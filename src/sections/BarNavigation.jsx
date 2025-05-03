import { Box, Flex, Image, Link } from "@chakra-ui/react";
import logo from '/logo.png';
import { useEffect, useState } from "react";

const BarNavigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <Box
            as="nav"
            position="sticky"
            top="0"
            zIndex="1000"
            transition="background 0.3s ease, box-shadow 0.3s ease"
            bg={scrolled ? "rgba(0,0,0,0.3)" : "transparent"}
            backdropFilter={scrolled ? "blur(10px)" : "none"}
            boxShadow={scrolled ? "md" : "none"}
            color={scrolled ? "white" : "black"}
        >
            <Flex
                justifyContent={"center"}
                align="center"
                w={"100%"}
                px={6}
                py={3}
                flexWrap="wrap"
            >
                <Flex gap={8} align="center" wrap="nowrap" flexShrink={1}>
                    <a href="#">
                        <Image src={logo} alt="Logo" boxSize="60px" userSelect="none" />
                    </a>
                    {["Home", "Features", "Pricing", "Blog", "Sign In"].map((item) => (
                        <Link
                            key={item}
                            href={"#"}
                            userSelect="none"
                            fontSize="xl"
                            fontWeight="bold"
                            textDecoration="none"
                            whiteSpace="nowrap"
                            _hover={{
                                textDecoration: "none",
                                color: scrolled ? "rgb(252, 218, 106)" : "default",
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
}

export default BarNavigation;