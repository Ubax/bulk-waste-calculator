import { Grid, Card, Typography, Button, Box, Stack } from "@mui/joy";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { calcNumberOfStickers } from "./calcNumberOfStickers";
import { useTranslation } from "react-i18next";

export function CustomSizeItem({ onAdd }) {
  const { t } = useTranslation();
  const [sizes, setSizes] = useState(['', '', '']);
  const [weight, setWeight] = useState('');
  const disabled = sizes.some((dim) => !dim) || weight === 0;
  const stickers = calcNumberOfStickers(sizes, weight);
  const handleSizeChange = (index, newValue) => {
    if(newValue.match(/^\d*\.?\d*$/g)){
      setSizes((prev) => prev.map((v, i) => (index === i ? newValue : v)));
    }
  };
  const stickerNumberText = disabled
    ? "0"
    : isNaN(stickers)
    ? t("customSizeItem.sizeIncorrectOrToBigObject")
    : stickers;
  return (
    <Grid xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {t("customSizeItem.title")}
        </Typography>
        <Typography level="body2" sx={{ mt: 2 }}>
          {t("customSizeItem.subtitleDimensions")}
        </Typography>
        <Stack direction="row" spacing={1}>
          {sizes.map((size, index) => (
            <Input
              key={index}
              value={size}
              placeholder="0"
              onChange={({ target }) => handleSizeChange(index, target.value)}
            />
          ))}
        </Stack>
        <Typography level="body2">
          {t("customSizeItem.subtitleWeight")}
        </Typography>
        <Input
          value={weight}
          endDecorator={<Typography>kg</Typography>}
          onChange={({ target }) => setWeight(target.value)}
          placeholder="0"
        />
        <Box sx={{ display: "flex", mt: 2 }}>
          <div>
            <Typography level="body3">{t("item.numberOfStamps")}</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {stickerNumberText}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={() =>
              onAdd({
                id: sizes.join("x"),
                name: () => sizes.join("x"),
                stickers,
              })
            }
            disabled={disabled}
          >
            {t("customSizeItem.addButton")}
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
