import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import colors from "./foundations/colors";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  styles,
  colors,
  config,
};

export default extendTheme(overrides);
