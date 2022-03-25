import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

import { SocialIcons } from "lib/components/icons/SocialIcons";
import { BecomeVolunteerWelcomeSectionButton } from "lib/components/LandingPage/WelcomeSectionButton";
import { Routes } from "lib/constants";

import { HeaderLayoutContainer } from "./HeaderLayoutContainer";
import { headerLinks } from "./headerLinks";
import { HeaderText } from "./HeaderText";

interface MobileNavigationProps {
  isDark: boolean;
}
export function MobileNavigation({ isDark }: MobileNavigationProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const emptyRef = useRef(null);

  const bgColor = isDark ? "green.dark" : "white.base";
  const textColor = isDark ? "white.base" : "black.base";
  return (
    <>
      <Button
        display={{ base: "block", md: "none" }}
        as={IconButton}
        icon={<HamburgerIcon h="30px" w="30px" color={textColor} />}
        px="0"
        borderRadius="4px"
        onClick={onOpen}
        background="transparent"
        _hover={{ background: "transparent", opacity: "0.8" }}
        _active={{ background: "transparent" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={emptyRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={bgColor}>
          <HeaderLayoutContainer
            outerProps={
              isDark
                ? {}
                : { borderBottomWidth: "1px", borderBottomColor: "grey.medium" }
            }
            justifyContent="flex-end"
            isDark={isDark}
          >
            <DrawerCloseButton
              _hover={{ background: "transparent", opacity: "0.8" }}
              size="lg"
              position="static"
              color={textColor}
            />
          </HeaderLayoutContainer>

          <DrawerBody p="6">
            {headerLinks.map(({ name, path }) => {
              const isActive = router.pathname === path;
              const isFundraisings = path === Routes.fundraisings;

              return (
                <Box mb="3">
                  <NextLink key={path} href={path} passHref>
                    <HeaderText
                      fontSize="24px"
                      lineHeight="29px"
                      isDark={isDark}
                      isActive={isActive}
                      isFundraisings={isFundraisings}
                      onClick={onClose}
                    >
                      {name}
                    </HeaderText>
                  </NextLink>
                </Box>
              );
            })}
            <BecomeVolunteerWelcomeSectionButton mt="8" />
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start" pb="12">
            <SocialIcons isDark={isDark} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
