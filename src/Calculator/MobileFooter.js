import { Container, Stack, Typography } from "@mui/joy";
import { STAMP_PRICE } from "./constants";
import { useTranslation } from "react-i18next";

export function MobileFooter(props) {
  const { t } = useTranslation();
  const sum = props.items.reduce((result, { quantity, stickers }) => {
    return result + quantity * stickers;
  }, 0);

  return (
    <Container>
      <Stack sx={{ width: 100, height: 64, display: { md: "none" } }}></Stack>
      <Stack
        sx={{
          display: { md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: 80,
          backgroundColor: "#FFF",
          borderTop: "2px solid #EEE",
          boxShadow: 3,
          pl: 2,
        }}
        direction="column"
        justifyContent="center"
        spacing={1}
      >
        <Typography level="h6">
          {t("summary.numberOfStamps", { sum })}
        </Typography>
        {sum > 0 && (
          <Typography fontSize="md">
            {t("summary.totalPriceInfo", { sum, stampPrice: STAMP_PRICE })}
            <Typography
              fontSize="md"
              sx={(theme) => ({ color: theme.palette.primary[500] })}
            >
              {(sum * STAMP_PRICE).toFixed(2)} CHF{" "}
            </Typography>
          </Typography>
        )}
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
        <Typography variant="body2">
          Images downloaded from Freepik, Pixabay and Vecteezy
        </Typography>
      </Stack>
    </Container>
  );
}
