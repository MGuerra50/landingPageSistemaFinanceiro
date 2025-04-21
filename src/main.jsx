import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      '@keyframes moveUpFade': {
        from: {
          transform: 'translate(20px, 20px) scale(1)',
          opacity: 0,
        },
        to: {
          transform: 'translate(0, 0)  scale(1.02)',
          opacity: 1,
          filter: 'drop-shadow(15px 20px 15px rgba(0,0,0,0.50))'
        },
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
