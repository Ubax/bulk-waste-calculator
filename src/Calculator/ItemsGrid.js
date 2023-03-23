import { Grid, Typography } from "@mui/joy";
import { useState } from "react";
import { INITIAL_ITEMS } from "./constants";
import { CustomSizeItem } from "./CustomSizeItem";
import { Item } from "./Item";

export function ItemsGrid({items, setItems}) {
  const [customItemKey, setCustomItemKey] = useState(0);

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

  return (
    <>
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
    </>
  );
}
