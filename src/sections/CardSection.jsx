import { Box } from "@chakra-ui/react";

const CardSection = ({ children, bg = "#FAFAFA" }) => {
    return (
        <Box bg={bg}>
            {children}
        </Box>
    );
}

export default CardSection;