import { Stack, Card, Typography, Button } from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export function SummaryItem({ onIncrease, onDecrease, name, quantity }) {
  return (
    <Card variant="outlined">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          <Typography
            level="h2"
            sx={(theme) => ({ color: theme.palette.primary[500] })}
            fontSize="md"
          >{`${quantity} x`}</Typography>{" "}
          {name}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button onClick={onIncrease}>
            <AddIcon />
          </Button>
          <Button onClick={onDecrease}>
            <RemoveIcon />
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
