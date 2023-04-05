import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show>
        <GridItem bg="gold" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="blue.300" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
