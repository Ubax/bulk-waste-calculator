import { Container } from "@mui/joy";
import { useState } from "react";
import { Calculator } from "./Calculator/Calculator";

function App() {
  const [screen, setScreen] = useState("calculator");
  return (
    <Container maxWidth="xl">
      {screen === "calculator" && <Calculator onNextScreen={() => {}} />}
    </Container>
  );
}

export default App;
