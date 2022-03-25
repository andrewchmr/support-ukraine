import { ChevronRightIcon } from "@chakra-ui/icons";
import type { ButtonProps, LinkProps } from "@chakra-ui/react";
import { Button, Link } from "@chakra-ui/react";

interface WelcomeSectionButtonProps extends ButtonProps {
  linkProps?: LinkProps;
}
export const WelcomeSectionButton = ({
  linkProps,
  ...props
}: WelcomeSectionButtonProps) => (
  <Link {...linkProps}>
    <Button
      py="3"
      px="5"
      fontSize={["md", "lg"]}
      lineHeight="22px"
      fontWeight="semibold"
      borderRadius={0}
      {...props}
    />
  </Link>
);

export const BecomeVolunteerWelcomeSectionButton = ({
  linkProps,
  ...props
}: WelcomeSectionButtonProps) => (
  <WelcomeSectionButton
    linkProps={{ href: "https://forms.gle/YSSSo9HdYGgUYEBTA", ...linkProps }}
    bgColor="yellow.base"
    color="green.dark"
    _hover={{ bgColor: "yellow.base", textDecor: "underline" }}
    _active={{ bgColor: "yellow.light" }}
    rightIcon={<ChevronRightIcon color="green.dark" w="6" h="6" />}
    {...props}
  >
    Become a volunteer
  </WelcomeSectionButton>
);

export const AddAnOrganizationWelcomeSectionButton = ({
  linkProps,
  ...props
}: WelcomeSectionButtonProps) => (
  <WelcomeSectionButton
    linkProps={{ href: "https://forms.gle/ntKqje2NpucRu1WW7", ...linkProps }}
    borderColor="yellow.base"
    borderWidth="1px"
    color="yellow.base"
    background="transparent"
    _hover={{ textDecor: "underline" }}
    _active={{ borderColor: "yellow.light", color: "yellow.light" }}
    {...props}
  >
    Add an organization
  </WelcomeSectionButton>
);
