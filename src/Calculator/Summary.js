import { Divider, Stack, Typography } from "@mui/joy";
import { STAMP_PRICE } from "./constants";
import { SummaryItem } from "./SummaryItem";

export function Summary({items, changeItemQuantity}) {
  const sum = items.reduce((result, { quantity, stickers }) => {
    return result + quantity * stickers;
  }, 0);

  const reps = (multiplier) => {
    if (multiplier === 1) {
      return "1 stamp";
    } else {
      return `${multiplier} stamps`;
    }
  };
  const summaryList = items
    .filter(({ quantity }) => quantity > 0)
    .map(({ name, quantity, stickers }) => (
      <SummaryItem
        key={`${name}_${quantity}`}
        name={`${name} (${reps(stickers)})`}
        quantity={quantity}
        onIncrease={() => changeItemQuantity(name, 1)}
        onDecrease={() => changeItemQuantity(name, -1)}
      />
    ));

  const emptylistPlaceholder = (
    <>
      <Divider sx={{ my: 0.5 }} />
      <Typography variant="h1" sx={{ my: 2 }}>
        Added items will appear here
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
        <Typography fontSize="md">Number of stamps: {sum}</Typography>
        {sum > 0 && (
          <Typography fontSize="md">
            Total price: {sum} stamps x {STAMP_PRICE} CHF ={" "}
            <Typography fontSize="md" textColor={"blue"}>
              {(sum * STAMP_PRICE).toFixed(2)} CHF{" "}
            </Typography>
          </Typography>
        )}
      </Stack>
    </>
  );
}
