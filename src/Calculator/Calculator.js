import { Grid, Stack, Typography, Container, Divider, Card } from "@mui/joy";
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

const STICKER_PRICE = 8.6;

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
    <Container>
      <Grid container spacing={1}>
        <Grid xs={12} lg={8}>
          <Typography level="h2" fontSize="md" sx={{ my: 1 }}>
            Objects
          </Typography>
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
          <Typography level="h2" fontSize="md" sx={{ mt: 1, mb: 1.5 }}>
            Summary
          </Typography>
          <Stack spacing={1}>
            {summaryList.length > 0 ? summaryList : emptylistPlaceholder}
            <Divider />
            <Typography fontSize="md">Number of stamps: {sum}</Typography>
            {sum > 0 && (
              <Typography fontSize="md">
                Total price: {sum} stamps x {STICKER_PRICE} CHF ={" "}
                <Typography fontSize="md" textColor={"blue"}>
                  {(sum * STICKER_PRICE).toFixed(2)} CHF{" "}
                </Typography>
              </Typography>
            )}
          </Stack>
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
            Total price: {sum} stamps x {STICKER_PRICE} CHF ={" "}
            <Typography fontSize="md" textColor={"blue"}>
              {(sum * STICKER_PRICE).toFixed(2)} CHF{" "}
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
