import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import logo from '/logo.png';
import grafico from '/graficos.png';
import HeroButton from "../components/HeroButton";

const HeroSection = () => {
    const textRef = useRef(null)
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 })

    const handleMouseMove = (e) => {
        const rect = textRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setGradientPosition({ x, y })
    }
    return (
        <Box bgImage={logo} bgSize="81%" bgPosition="center" h="100vh" w="auto" overflow="vizible">
            <Flex
                justify="space-between"
                align="center"
                w={"100%"}
                h="100vh"
                bgGradient="linear(to-r,rgba(80, 42, 204, 0.97),rgba(185, 56, 250, 0.97))"
            >
                <Box w="50%" h="90%" flexWrap={"wrap"}>
                    <Box fontSize="4xl" color="white" fontWeight="bold" textAlign="left" pl={150} pt={10}>
                        <Text fontSize={"4rem"} mt={"1%"} mb={"-4%"}>Take control</Text>
                        <Text fontSize={"4rem"} mb={"-4%"}>of your</Text>
                        <Text
                            ref={textRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => setGradientPosition({ x: 50, y: 50 })}
                            fontSize="5rem"
                            fontWeight="bold"
                            bgGradient={`radial(at ${gradientPosition.x - 40}% ${gradientPosition.y}%,rgb(252, 218, 106),rgb(218, 120, 40))`}
                            bgClip="text"
                            color="transparent"
                            transition="background-position 0.2s ease"
                            cursor="default"
                        >
                            FINANCES</Text>
                        <Box w={"70%"} mt={4}>
                            <Text fontSize={"60%"} textAlign={"left"}>
                                Track your income, expenses, and investmants with ease
                            </Text>
                        </Box>
                        <Box
                            w={"100%"}
                            mt={4}
                            display={"flex"}
                            alignItems={"center"}
                            pl={"25%"}
                            pt={"5%"}
                        >
                            <Box
                                transition={"0.2s ease all"}
                                borderRadius={"15px"}
                                _hover={{ transform: "scale(1.2)", boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
                            >
                                <HeroButton background="rgb(252, 218, 106)">Get Started</HeroButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box w="50%" h="90%" overflow={"visible"}>
                    <Box w={"90%"} h={"auto"} justifyContent={"right"} alignItems={"center"}>
                        <Image
                            src={grafico}
                            alt="Grafico"
                            boxSize="100%"
                            objectFit="cover"
                            right={0}
                            bottom={0}
                            zIndex={-1}
                            animation="moveUpFade 0.6s ease-out forwards"
                            style={{ userSelect: "none" }}
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default HeroSection;