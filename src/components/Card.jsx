import { Box, Text, Flex, Icon, Divider, chakra } from "@chakra-ui/react";
// import { FiPieChart } from "react-icons/fi";

const Card = () => {
    return (
        <Box
            maxW="300px"
            mx="auto"
            //   my="5rem"
            mt={"2rem"}
            mb={"5rem"}
            bg="rgba(255, 255, 255, 0.05)"
            borderRadius="lg"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.18)"
            color="white"
            p="1.5rem"
            transition="all 0.5s"
            _hover={{
                transform: "scale(1.03)",
                boxShadow: "0 8px 50px 0 rgba(0, 0, 0, 0.4)",
            }}
        >
            {/* Ícone no topo */}
            <Flex justify="center" align="center" mb="4">
                <Box
                    bg="linear-gradient(135deg, #6b46c1, #805ad5)"
                    p="3"
                    borderRadius="full"
                >
                    {/* <Icon as={FiPieChart} boxSize="8" /> */}
                </Box>
            </Flex>

            {/* Conteúdo */}
            <Text fontSize="lg" fontWeight="bold">
                Overview
            </Text>
            <Text fontSize="3xl" fontWeight="extrabold" color="yellow.300">
                $24,500
            </Text>

            <Divider borderColor="whiteAlpha.300" my="4" />

            <Flex justify="space-between" fontSize="sm">
                <Text color="gray.300">Income</Text>
                <Text color="green.400">+ $5,000</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm">
                <Text color="gray.300">Expenses</Text>
                <Text color="red.400">- $3,200</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm">
                <Text color="gray.300">Investments</Text>
                <Text color="cyan.300">+ $19,450</Text>
            </Flex>
        </Box>
    );
};

export default Card;
