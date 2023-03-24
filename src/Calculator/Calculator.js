import { Box, Container, Grid } from "@mui/joy";
import { useState } from "react";
import { ItemsGrid } from "./ItemsGrid";
import { LanguageChange } from "./LanguageChange";
import { MobileFooter } from "./MobileFooter";
import { Summary } from "./Summary";

export function Calculator(props) {
  const [items, setItems] = useState([]);

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
    <Container sx={{ position: "relative" }}>
      <Grid container spacing={1}>
        <Grid xs={12} lg={8}>
          <ItemsGrid items={items} setItems={setItems} />
        </Grid>
        <Grid xs={12} lg={4}>
          <Summary items={items} changeItemQuantity={changeItemQuantity} />
        </Grid>
      </Grid>
      <MobileFooter items={items} />
      <Box sx={{ position: "absolute", right: 24, top: 0 }}>
        <LanguageChange />
      </Box>
    </Container>
  );
}
