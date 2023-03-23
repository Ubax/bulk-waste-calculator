import { Container, Grid } from "@mui/joy";
import { useState } from "react";
import { ItemsGrid } from "./ItemsGrid";
import { MobileFooter } from "./MobileFooter";
import { Summary } from "./Summary";


export function Calculator(props) {
  const [items, setItems] = useState([]);

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
    <Container>
      <Grid container spacing={1}>
        <Grid xs={12} lg={8}>
          <ItemsGrid items={items} setItems={setItems} />
        </Grid>
        <Grid xs={12} lg={4} sx={{ display: { xs: "none", md: "initial" } }}>
          <Summary items={items} changeItemQuantity={changeItemQuantity}/>
        </Grid>
      </Grid>
      <MobileFooter items={items} />
    </Container>
  );
}
