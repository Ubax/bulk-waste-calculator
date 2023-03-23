import { Box, Chip, Typography, AspectRatio } from "@mui/joy";

export const IMAGE_HEIGHT = 250;

export function ImageWithTag(props) {
  console.log(props);
  return (
    <span style={{ position: "relative" }}>
      {!!props.label && (
        <Chip
          size="small"
          variant="filled"
          sx={{
            zIndex: 1,
            p: 1,
            position: "absolute",
            margin: "10px",
            backgroundColor: "rgba(239, 246, 255, 0.7)",
          }}
        >
          <Typography
            sx={(theme) => ({
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: 10,
            })}
          >
            {props.label}
          </Typography>
        </Chip>
      )}
      <Box>
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            style={{
              zIndex: -1,
            }}
            src={props.src}
          />
        </AspectRatio>
      </Box>
    </span>
  );
}
