import { Box } from "@chakra-ui/react";

export const TriangleDivider = () => {
  return (
    <Box
      position="relative"
      bg="rgb(252, 218, 106)"
      height="1px"
    >
      <Box
        content="''"
        position="absolute"
        bottom="0"
        width="0"
        height="0"
        borderStyle="solid"
        borderWidth="22px 22px 0 22px"
        borderColor="rgb(252, 218, 106) transparent transparent transparent"
        left="50%"
        transform="translateX(-50%) translateY(100%)"
        _after={{ content: "''" }}
      />
    </Box>
  );
};

const SectionDivider = () => {
  return (
    <Box
      w="100%"
      h="80px"
      position="relative"
      overflow="hidden"
      zIndex={1}
    >
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-r,rgba(80, 42, 204, 0.97),rgba(185, 56, 250, 0.97))"
        transform="skewY(3deg)"
        transformOrigin="top right"
      />
      Testando Divider
    </Box>
  );
};

export default SectionDivider;
