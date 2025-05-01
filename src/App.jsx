// import viteLogo from '/vite.svg'
import './App.css'
import BarNavigation from './sections/barNavigation'
import HeroSection from './sections/HeroSection'
import CardSection from './sections/CardSection'
import SectionDivider, { TriangleDivider } from './sections/SectionDivider'
import Card from './components/card'
import { Box, Flex, Text } from '@chakra-ui/react'
import FlexSection from './sections/FlexSection'


function App() {

  return (
    <>
      <BarNavigation />
      <HeroSection />
      <SectionDivider deg={3} background1={"#FAFAFA"} />
      <Box /*bgGradient={"linear(to-r,rgba(80, 42, 204, 0.97),rgba(185, 56, 250, 0.97))"}*/>
        <CardSection>
          <>
            <Box w={"100%"} h={"100%"}>
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
                lineHeight="shorter"
              >
                Discover Insights into Your Financial Health
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="medium"
                color="gray.600"
                textAlign="center"
                maxW="700px"
                mx="auto"
                mt="2"
                mb="10"
              >
                Get a quick glance at your budget performance and financial habits with live metrics
              </Text>
            </Box>
            <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Flex>
          </>
        </CardSection>
      </Box>
      <SectionDivider deg={3} background2={"#FAFAFA"} />
      <FlexSection />
    </>
  )
}

export default App
