import { Icon } from "@chakra-ui/react";

import colors from "lib/styles/customTheme/colors";

export const ArrowRight = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="9px"
      height="14px"
      viewBox="0 0 9 14"
      fill="none"
    >
      <path d="M1 1L7 7L1 13" stroke={colors.green.base} strokeWidth="2" />
    </Icon>
  );
};
