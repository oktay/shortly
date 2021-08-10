import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'

function Hero() {
  return (
    <Box bg="white" py="16">
      <Container maxWidth="container.xl">
        <Box maxWidth="600px">
          <Heading size="4xl">More than just shorter links</Heading>
          <Text color="gray.500" mt="6">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Text>
          <Button
            as="a"
            href="#form"
            rounded="full"
            colorScheme="teal"
            mt="6"
            size="lg"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
