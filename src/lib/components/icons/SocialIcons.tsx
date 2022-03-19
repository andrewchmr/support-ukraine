import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import colors from "lib/styles/customTheme/colors";

import { FacebookPath, MailPath, SocialIcon, TelegramPath } from "./SocialIcon";

interface SocialIconsProps extends BoxProps {
  isDark?: boolean;
}
export const SocialIcons = ({ isDark = false, ...props }: SocialIconsProps) => {
  const color = isDark ? colors.white.base : colors.black.base;
  return (
    <Box gap="2" display="flex" marginRight={["unset", 10]} {...props}>
      <SocialIcon color={color}>
        <FacebookPath color={color} />
      </SocialIcon>
      <SocialIcon color={color}>
        <TelegramPath color={color} />
      </SocialIcon>
      <Box as="a" href="mailto:info@ukraine-army.help">
        <SocialIcon color={color}>
          <MailPath color={color} />
        </SocialIcon>
      </Box>
    </Box>
  );
};
