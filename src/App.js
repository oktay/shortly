import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Hero from './components/Hero'
import List from './components/List'

function App() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    if (localStorage.getItem('links')) {
      setLinks(JSON.parse(localStorage.getItem('links')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  return (
    <Box bg="gray.100">
      <Header />
      <Hero />
      <Form setLinks={setLinks} />
      <List links={links} setLinks={setLinks} />
      <Footer />
    </Box>
  )
}

export default App
