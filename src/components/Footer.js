import { Box, Container, Flex, Link, Stack, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Box as="footer" bg="white" py="8" fontSize="sm">
      <Container maxW="container.xl">
        <Flex justifyContent="space-between">
          <Link
            isExternal
            href="https://oktaycolakoglu.com"
            color="gray.500"
            fontWeight="medium"
          >
            Oktay Çolakoğlu
          </Link>
          <Stack
            direction="row"
            color="gray.500"
            divider={<Text mx="4">&bull;</Text>}
          >
            <Link isExternal href="https://reactjs.org" flexShrink="0">
              ReactJS
            </Link>
            <Link isExternal href="https://chakra-ui.com/" flexShrink="0">
              Chakra UI
            </Link>
            <Link isExternal href="https://shrtco.de/" flexShrink="0">
              shrtcode
            </Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
