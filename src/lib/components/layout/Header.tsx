import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const links = [{ name: "Fundraisings", path: "/fundraisings" }];

const Header = () => {
  const router = useRouter();

  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">Logo</Link>
      </Heading>
      <Box marginLeft="auto">
        {links.map((link) => {
          const isActive = router.pathname === link.path;

          return (
            <NextLink key={link.path} href={link.path} passHref>
              <Link
                fontSize="lg"
                fontWeight={isActive ? "semibold" : undefined}
                textDecoration={isActive ? "underline" : undefined}
              >
                {link.name}
              </Link>
            </NextLink>
          );
        })}
      </Box>
    </Flex>
  );
};

export default Header;
