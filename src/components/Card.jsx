import { Box, Button, Text, Flex, Divider } from "@chakra-ui/react";
import { RiArrowUpBoxFill } from "react-icons/ri";

const Card = () => {
    return (
        <Box
            maxW="250px"
            mx="auto"
            mt={"2rem"}
            mb={"2rem"}
            bg="rgb(255, 255, 255)"
            borderRadius="lg"
            boxShadow="-1px 2px 3px 0 rgba(31, 38, 135, 0.27)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.18)"
            color="white"
            p="1.5rem"
            transition="all 0.4s ease-in-out"
            _hover={{
                transform: "scale(1.025)",
            }}
        >
            <Flex justify="center" align="center" mb="4">
                <Box color={"black"}>
                    <RiArrowUpBoxFill size={"50px"}/>
                </Box>
            </Flex>
            <Text fontSize="2xl" fontWeight="semibold" color="black" textAlign={"center"}>
                Smart Budgeting
            </Text>

            <Divider borderColor="whiteAlpha.300" my="4" />

            <Text color={"black"} fontSize="sm" textAlign={"center"}>
                Track and manage your budget with real-time alerts
            </Text>

            <Divider />
            <a href="#" width={"100%"} height={"100%"} border_radius={"7px"}>
                <Box
                    w={"100%"}
                    h={"100%"}
                    color={"black"}
                    justifyContent={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    mt="4"
                    transition={"0.5s ease-in-out"}
                    borderRadius={"7px"}
                    _hover={{ bg: "#291C5E", fontWeight: "extrabold", color: "white" }}
                >
                    Learn More
                </Box>
            </a>
        </Box>
    );
};

export default Card;
