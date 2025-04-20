import { Box, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import logo from '/logo.png';

const BarNavigation = () => {
    return (
        <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={4} alignItems={"center"} pt={1} pl={0} pr={0} pb={1}>
                <GridItem justifyContent={"end"} display="flex">
                    <Image src={logo} alt="Logo" boxSize="60px" style={{ userSelect: "none" }} />
                </GridItem>
                <GridItem style={{ userSelect: "none" }}>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
                                Home
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
                                Features
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
                                Pricing
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
                                Blog
                            </Link>
                        </GridItem>
                        <GridItem justifyContent={"center"} display="flex">
                            <Link href="#" fontSize="xl" fontWeight="bold" textDecoration={"none"} _hover={{ textDecoration: "none" }}>
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