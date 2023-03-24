import { extendTheme, CssVarsProvider } from "@mui/joy";
import { Calculator } from "./Calculator/Calculator";

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          900: "#c5000e",
          800: "#d3001e",
          700: "#e00025",
          600: "#e00025",
          500: "#e00025",
          400: "#fb4349",
          300: "#f06a6e",
          200: "#f79597",
          100: "#ffcbd1",
          50: "#ffeaee",
        },
        focusVisible: "rgba(3, 102, 214, 0.3)",
      },
    },
  },
});

//E00025

function App() {
  return (
    <CssVarsProvider theme={customTheme}>
      <Calculator />
    </CssVarsProvider>
  );
}

export default App;
