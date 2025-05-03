import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import PizzaGraphic from "../components/pizzaGraphic";
import { RiCheckboxFill } from "react-icons/ri";
import HeroButton from "../components/HeroButton";
import { BiSolidRightArrow } from "react-icons/bi";

const FlexSection = () => {
    const data = [44, 55, 13, 33];
    const labels = ['Maçã', 'Manga', 'Laranja', 'Melancia']

    return (
        <Box
            bgGradient="linear(to-r,rgba(80, 42, 204, 0.97),rgba(185, 56, 250, 0.97))"
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            flexWrap={"wrap"}
            pt={"20px"}
        >
            <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                color="white"
                textAlign="center"
                lineHeight="shorter"
                pb={"20px"}
                userSelect="none"
            >
                Discover Insights into Your Financial Health
            </Text>
            <Flex
                w={"90%"}
                h={"90%"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                bg={"#FAFAFA"}
                borderRadius={"20px"}
                transition={"0.5s ease all"}
                _hover={{ boxShadow: "-4px 4px 15px rgba(0, 0, 0, 0.3)", transform: "scale(1.007)" }}
            >
                <Box
                    w={"27.5%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    flexWrap={"wrap"}
                    pt={"3%"}
                    pb={"3%"}
                >
                    <PizzaGraphic series={data} labels={labels} />
                </Box>
                <Box w={"59%"} justifyContent={"center"} alignItems={"center"} display={"flex"} flexWrap={"wrap"}>
                    <Box>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            fontWeight="medium"
                            color="gray.600"
                            textAlign="center"
                            maxW="700px"
                            mx="auto"
                            mt="2"
                            mb="10"
                            userSelect="none"
                        >
                            Get a quick glance at your budget performance and financial habits with live metrics
                        </Text>
                        <Box
                            w={"100%"}
                            h={"100%"}
                            justifyContent={"start"}
                            alignItems={"center"}
                            display={"flex"}
                            flexWrap={"wrap"}
                        >
                            <Grid
                                color={"gray.600"}
                                gridTemplateColumns={"repeat(1, 1fr)"}
                                gap={4}
                                w={"50%"}
                                justifyContent={"start"}
                                alignItems={"center"}
                                flexWrap={"wrap"}
                                userSelect="none"
                            >
                                <GridItem display={"flex"} alignItems={"center"} gap={"5px"}>
                                    <BiSolidRightArrow fontSize={"25px"} color="rgba(80, 42, 204, 0.97)" />
                                    <Text>No more messy spreadsheets</Text>
                                </GridItem>
                                <GridItem display={"flex"} alignItems={"center"} gap={"5px"}>
                                    <BiSolidRightArrow fontSize={"25px"} color="rgba(80, 42, 204, 0.97)" />
                                    <Text>Simple, clear financial insights</Text>
                                </GridItem>
                                <GridItem display={"flex"} alignItems={"center"} gap={"5px"}>
                                    <BiSolidRightArrow fontSize={"25px"} color="rgba(80, 42, 204, 0.97)" />
                                    <Text>Focus on what grows your income</Text>
                                </GridItem>
                                <GridItem display={"flex"} alignItems={"center"} gap={"5px"}>
                                    <BiSolidRightArrow fontSize={"25px"} color="rgba(80, 42, 204, 0.97)" />
                                    <Text>Smart charts, zero confusion</Text>
                                </GridItem>
                            </Grid>
                            <Box
                                w={"50%"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                transition={"0.2s ease all"}
                                borderRadius={"15px"}
                                _hover={{
                                    transform: "scale(1.2)",
                                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                                }}
                            >
                                <HeroButton
                                    background="rgba(185, 56, 250, 0.97)"
                                    dark={true}
                                >
                                    Get Started
                                </HeroButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Box w={"100%"}>Teste teste</Box>
        </Box>
    );
}
export default FlexSection;