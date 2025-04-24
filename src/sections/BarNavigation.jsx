import { Box, Grid, GridItem, Image, Link } from "@chakra-ui/react";
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
            bg={scrolled ? "rgba(255,255,255,0.2)" : "transparent"}
            backdropFilter={scrolled ? "blur(10px)" : "none"}
            boxShadow={scrolled ? "md" : "none"}
            color={scrolled ? "white" :  "black"}
        >
            <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4} alignItems={"center"} pt={1} pl={0} pr={0} pb={1}>
                <GridItem justifyContent={"end"} display="flex">
                    <Image src={logo} alt="Logo" boxSize="60px" style={{ userSelect: "none" }} />
                </GridItem>
                <GridItem style={{ userSelect: "none" }}>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none", color: scrolled ? "rgb(252, 218, 106)": "default" }}>
                                Home
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none", color: scrolled ? "rgb(252, 218, 106)": "default" }}>
                                Features
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none", color: scrolled ? "rgb(252, 218, 106)": "default" }}>
                                Pricing
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none", color: scrolled ? "rgb(252, 218, 106)": "default" }}>
                                Blog
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none", color: scrolled ? "rgb(252, 218, 106)": "default" }}>
                                Sign In
                            </Link>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default BarNavigation;