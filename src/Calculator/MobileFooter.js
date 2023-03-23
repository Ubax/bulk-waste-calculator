import { Container, Stack, Typography } from "@mui/joy";
import { STAMP_PRICE } from "./constants";


export function MobileFooter(props) {

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
        <Typography level="h6">Number of stamps: {sum}</Typography>
        {sum > 0 && (
          <Typography level="h6">
            Total price: {sum} stamps x {STAMP_PRICE} CHF ={" "}
            <Typography fontSize="md" textColor={"blue"}>
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
