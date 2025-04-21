import { Box } from "@chakra-ui/react";

const CardSection = ({ children, bg = "white" }) => {
    return (
        <Box>
            {children}
        </Box>
    );
}

export default CardSection;