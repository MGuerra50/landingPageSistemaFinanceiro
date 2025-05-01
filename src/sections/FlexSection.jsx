import { Box, Flex } from "@chakra-ui/react";

const FlexSection = () => {
    return (
        <Box bg={"#FAFAFA"} w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"} display={"flex"}>
            <Flex
                w={"98%"}
                h="95%"
                justifyContent={"space-between"}
                alignItems={"center"}
                flexWrap={"wrap"}
                bg={"#FF0000"}
            >
                Teste teste
            </Flex>
        </Box>
    );
}
export default FlexSection;