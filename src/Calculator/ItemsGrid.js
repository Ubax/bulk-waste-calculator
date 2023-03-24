import { Grid, Typography } from "@mui/joy";
import { useState } from "react";
import { INITIAL_ITEMS } from "./constants";
import { CustomSizeItem } from "./CustomSizeItem";
import { Item } from "./Item";
import { useTranslation } from "react-i18next";

export function ItemsGrid({ items, setItems }) {
  const [customItemKey, setCustomItemKey] = useState(0);
  const { t } = useTranslation();

  const addItem = ({ id, stickers, name }) => {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) {
      setItems((prev) => [...prev, { id, name, stickers, quantity: 1 }]);
    } else {
      changeItemQuantity(id, 1);
    }
  };
  const changeItemQuantity = (id, change) => {
    const index = items.findIndex((item) => item.id === id);
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
        {t("itemsGrid.title")}
      </Typography>
      <Grid container spacing={1}>
        <CustomSizeItem
          key={customItemKey}
          onAdd={({ id, stickers, name }) => {
            addItem({ id, stickers, name });
            setCustomItemKey((prev) => prev + 1);
          }}
        />
        {INITIAL_ITEMS.map(({ name, stickers, img, id }) => (
          <Item
            key={name}
            id={id}
            name={name(t)}
            stickers={stickers}
            img={img}
            onClick={() => addItem({ id, name, stickers })}
          />
        ))}
      </Grid>
    </>
  );
}
