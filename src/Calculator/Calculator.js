import { Grid, Stack, Typography, Card, Divider } from "@mui/joy";
import { useState } from "react";
import { CustomSizeItem } from "./CustomSizeItem";
import { Item } from "./Item";
import { SummaryItem } from "./SummaryItem";

const INITIAL_ITEMS = [
  { name: "CHAIR", stickers: 1 },
  { name: "SMALL SOFA", stickers: 1 },
  { name: "BIG SOFA", stickers: 2 },
  { name: "CUPBOARD", stickers: 1 },
  { name: "WARDROBE", stickers: 2 },
];

export function Calculator(props) {
  const [customItemKey, setCustomItemKey] = useState(0);
  const [items, setItems] = useState([]);

  const addItem = ({ name, stickers }) => {
    const index = items.findIndex((item) => item.name === name);
    if (index < 0) {
      setItems((prev) => [...prev, { name, stickers, quantity: 1 }]);
    } else {
      changeItemQuantity(name, 1);
    }
  };
  const changeItemQuantity = (name, change) => {
    const index = items.findIndex((item) => item.name === name);
    if (index >= 0) {
      if (items[index].quantity + change === 0) {
        setItems((prev) => prev.filter((_, i) => i !== index));
      } else {
        setItems((prev) =>
          prev.map((item, i) =>
            index === i ? { ...item, quantity: item.quantity + change } : item
          )
        );
      }
    }
  };

  const sum = items.reduce((result, { quantity, stickers }) => {
    return result + quantity * stickers;
  }, 0);

  return (
    <Grid container spacing={1}>
      <Grid xs={12} lg={9}>
        <Typography variant="h1">Objects</Typography>
        <Grid container spacing={1}>
          {INITIAL_ITEMS.map(({ name, stickers }) => (
            <Item
              key={name}
              name={name}
              stickers={stickers}
              img="/chair.svg"
              onClick={() => addItem({ name, stickers })}
            />
          ))}
          <CustomSizeItem
            key={customItemKey}
            onAdd={({ name, stickers }) => {
              addItem({ name, stickers });
              setCustomItemKey((prev) => prev + 1);
            }}
          />
        </Grid>
      </Grid>
      <Grid xs={12} lg={3}>
        <Typography variant="h1">Summary</Typography>
        {!!sum && (
          <Stack spacing={1}>
            {items
              .filter(({ quantity }) => quantity > 0)
              .map(({ name, quantity, stickers }) => (
                <SummaryItem
                  key={`${name}_${quantity}`}
                  name={name}
                  quantity={quantity}
                  stickersSum={stickers * quantity}
                  onIncrease={() => changeItemQuantity(name, 1)}
                  onDecrease={() => changeItemQuantity(name, -1)}
                />
              ))}
            <Divider />
            <Typography variant="h2">Stickers = {sum}</Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
}
