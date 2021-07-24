import axios from "axios";
import { Box, Button, Container, Flex, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react";

function Form({ setLinks }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    
    if(url) {
      setError(false);
      setLoading(true);
      axios.get('https://api.shrtco.de/v2/shorten', { params: { url } })
      .then(response => {
        setLinks(list => [response.data, ...list])
      })
      .catch(error => setError(error.response.data.error))
      .then(() => setLoading(false))
    } else {
      setError('Please add a link')
    }
  }

  return (
    <Box pt="16">
      <Container maxW="container.xl">
        <Box bg="purple.700" p="12" rounded="md">
          <Flex as="form" alignItems="stretch" onSubmit={handleSubmit} flexDirection={{ base: 'column', md: 'row' }} onBlur={() => setError(false)}>
            <FormControl id="url" isInvalid={error}>
              <Input type="text" placeholder="Shorten a link ere..." variant="filled" h="12" _focus={{ bg: 'white' }} 
              value={url} onChange={({ target }) => setUrl(target.value)} disabled={loading} />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <Button ml={{ base: "0", md: "4" }} mt={{ base: "4", md: "0" }} size="lg" colorScheme="teal" isLoading={loading} type="submit">Shorten It!</Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Form