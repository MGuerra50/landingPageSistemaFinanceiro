import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const HeroButton = ({ children, border = "#91C9FF", background = "rgba(80, 42, 204, 1)" }) => {

    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (svg) {
            svg.style.strokeDasharray = "150 480";
            svg.style.strokeDashoffset = "150";
        }
    }, []);

    const handleMouseEnter = () => {
        if (svgRef.current) {
            svgRef.current.style.strokeDashoffset = "-480";
        }
    };

    const handleMouseLeave = () => {
        if (svgRef.current) {
            svgRef.current.style.strokeDashoffset = "150";
        }
    };

    return (
        <Box
            w="180px"
            h="60px"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Button
                w="178px"
                h="60px"
                background="transparent"
                justifyContent={"center"}
                display="flex"
                alignItems={"center"}
                border={`1px solid ${border}`}
                position="relative"
                zIndex={1}
                _hover={{ background: `${background}`, border: "none" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                borderRadius="10px"
                overflow="visible"
            >
                <Text
                    w={"100%"}
                    h={"100%"}
                    fontWeight="100"
                    alignContent={"center"}
                    fontSize="18px"
                    color="white"
                    zIndex={2}
                    _hover={{ fontWeight: "extrabold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                >
                    {children}
                </Text>
                <svg
                    ref={svgRef}
                    width="178px"
                    height="60px"
                    viewBox="0 0 180 60"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: 2,
                        transition: "1s ease-in-out",
                        pointerEvents: "none",
                    }}
                >
                    <rect
                        x="1"
                        y="1"
                        width="178"
                        height="58"
                        rx="7"
                        ry="7"
                    />
                </svg>
            </Button>
        </Box>
    );
}

export default HeroButton;