// import viteLogo from '/vite.svg'
import './App.css'
import BarNavigation from './sections/barNavigation'
import HeroSection from './sections/HeroSection'
import CardSection from './sections/CardSection'
import SectionDivider, { TriangleDivider } from './sections/SectionDivider'
import Card from './components/card'
import { Box, Flex } from '@chakra-ui/react'


function App() {

  return (
    <>
      <BarNavigation />
      <HeroSection />
      {/* <TriangleDivider /> */}
      <SectionDivider />
      <Box /*bgGradient={"linear(to-r,rgba(80, 42, 204, 0.97),rgba(185, 56, 250, 0.97))"}*/>
        <CardSection>
          <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </CardSection>
      </Box>
    </>
  )
}

export default App
