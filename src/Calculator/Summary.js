import { Divider, Stack, Typography } from "@mui/joy";
import { STAMP_PRICE } from "./constants";
import { SummaryItem } from "./SummaryItem";
import { useTranslation } from "react-i18next";

export function Summary({ items, changeItemQuantity }) {
  const { t } = useTranslation();
  const sum = items.reduce((result, { quantity, stickers }) => {
    return result + quantity * stickers;
  }, 0);

  const summaryList = items
    .filter(({ quantity }) => quantity > 0)
    .map(({ name, quantity, stickers, id }) => (
      <SummaryItem
        key={`${id}_${quantity}`}
        id={id}
        name={`${name(t)} (${t("summary.stamp", {
          count: stickers,
        })})`}
        quantity={quantity}
        onIncrease={() => changeItemQuantity(id, 1)}
        onDecrease={() => changeItemQuantity(id, -1)}
      />
    ));

  const emptylistPlaceholder = (
    <>
      <Divider sx={{ my: 0.5 }} />
      <Typography variant="h1" sx={{ my: 2 }}>
        {t("summary.noItemsPlaceholder")}
      </Typography>
    </>
  );

  return (
    <>
      <Typography level="h2" fontSize="md" sx={{ mt: 1, mb: 1.5 }}>
        Summary
      </Typography>
      <Stack spacing={1}>
        {summaryList.length > 0 ? summaryList : emptylistPlaceholder}
        <Divider />
        <div style={{ marginLeft: 8 }}>
          <Typography fontSize="md">
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
        </div>
      </Stack>
    </>
  );
}
