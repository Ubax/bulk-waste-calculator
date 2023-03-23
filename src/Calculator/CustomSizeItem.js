import { Grid, Card, Typography, Button, Box } from "@mui/joy";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { calcNumberOfStickers } from "./calcNumberOfStickers";

export function CustomSizeItem({ onAdd }) {
  const [sizes, setSizes] = useState([0, 0, 0]);
  const [weight, setWeight] = useState(0);
  const stickers = calcNumberOfStickers(sizes, weight);
  const handleSizeChange = (index, newValue) => {
    setSizes((prev) => prev.map((v, i) => (index === i ? newValue : v)));
  };
  return (
    <Grid xs={6} md={4}>
      <Card variant="outlined">
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Custom object
        </Typography>
        <Typography level="body2">
          Provide 3 dimensions of the object
        </Typography>
        {sizes.map((size, index) => (
          <Input
            value={size}
            endDecorator={<Typography>cm</Typography>}
            onChange={({ target }) => handleSizeChange(index, target.value)}
          />
        ))}
        <Typography level="body2">
          Provide approx weight of the object
        </Typography>
        <Input
          value={weight}
          endDecorator={<Typography>kg</Typography>}
          onChange={({ target }) => setWeight(target.value)}
        />
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Number of stickers:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {stickers}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={() =>
              onAdd({
                name: sizes.join("x"),
                stickers,
              })
            }
          >
            Add
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
