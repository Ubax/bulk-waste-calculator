import { Grid, Stack, Typography, Container, Divider } from "@mui/joy";
import { useState } from "react";
import { CustomSizeItem } from "./CustomSizeItem";
import { Item } from "./Item";
import { SummaryItem } from "./SummaryItem";

const INITIAL_ITEMS = [
  { name: "Chair", stickers: 1, img: "/chair.svg" },
  { name: "Small sofa", stickers: 1, img: "/small-sofa.svg" },
  { name: "Big sofa", stickers: 2, img: "/big-sofa.svg" },
  { name: "Cupboard", stickers: 1, img: "/cupboard.svg" },
  { name: "Wardrobe", stickers: 2, img: "/wardrobe.svg" },
  { name: "Bag max 120l", stickers: 1, img: "/trash.png" },
  { name: "Single mattress", stickers: 1, img: "/small-mattress.png" },
  { name: "Double mattress", stickers: 2, img: "/big-mattress.png" },
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

  const summaryList = items
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
    ));

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid xs={12} lg={8}>
          <Typography variant="h1">Objects</Typography>
          <Grid container spacing={1}>
            <CustomSizeItem
              key={customItemKey}
              onAdd={({ name, stickers }) => {
                addItem({ name, stickers });
                setCustomItemKey((prev) => prev + 1);
              }}
            />
            {INITIAL_ITEMS.map(({ name, stickers, img }) => (
              <Item
                key={name}
                name={name}
                stickers={stickers}
                img={img}
                onClick={() => addItem({ name, stickers })}
              />
            ))}
          </Grid>
        </Grid>
        <Grid xs={12} lg={4} sx={{ display: { xs: "none", md: "initial" } }}>
          <Typography variant="h1">Summary</Typography>
          {!!sum && (
            <Stack spacing={1}>
              {summaryList}
              <Divider />
              <Typography variant="h2">Stickers = {sum}</Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
      <Stack sx={{ width: 100, height: 64, display: { md: "none" } }}></Stack>
      <Stack
        sx={{
          display: { md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: 64,
          backgroundColor: "#FFF",
          borderTop: "2px solid #EEE",
          boxShadow: 3,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" sx={{ mr: 1 }}>
          Stickers:
        </Typography>
        <Typography variant="h3" fontWeight={900}>
          {sum}
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
        <Typography variant="body2">
          Images downloaded from Freepik, Pixabay and Vecteezy
        </Typography>
      </Stack>
    </Container>
  );
}
