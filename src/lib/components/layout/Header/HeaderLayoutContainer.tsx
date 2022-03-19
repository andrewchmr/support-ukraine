import type { LayoutContainerProps } from "../LayoutContainer";
import { LayoutContainer } from "../LayoutContainer";

interface HeaderLayoutContainerProps extends LayoutContainerProps {
  isDark?: boolean;
}
export const HeaderLayoutContainer = ({
  isDark = false,
  ...props
}: HeaderLayoutContainerProps) => (
  <LayoutContainer
    display="flex"
    as="header"
    width="full"
    alignItems="center"
    h="72px"
    outerProps={{
      bgColor: isDark ? "green.dark" : undefined,
    }}
    justifyContent="space-between"
    {...props}
  />
);
