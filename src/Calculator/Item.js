import { Grid, Card, AspectRatio, Box, Typography, Button } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { Image } from "./Image";

export function Item({ onClick, name, stickers, img }) {
  const { t } = useTranslation();

  return (
    <Grid xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {name}
        </Typography>
        <AspectRatio
          objectFit="contain"
          minHeight="120px"
          maxHeight="200px"
          sx={{ my: 2 }}
        >
          <Image src={img} loading="lazy" alt={name} />
        </AspectRatio>
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">{t("item.numberOfStamps")}</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {stickers}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={onClick}
          >
            {t("item.addButton")}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
