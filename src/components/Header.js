import { Box, Container, Flex, Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import Logo from './Logo'

function Header() {
  return (
    <Box as="header" justifyContent="center" py="8" bg="white">
      <Container
        as={Flex}
        maxW="container.xl"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="https://github.com/oktay/shortly"
          color="gray.400"
          _hover={{ color: 'black' }}
          isExternal
        >
          <Icon as={FaGithub} fontSize="2xl" aria-label="Github Repo" />
        </Link>
      </Container>
    </Box>
  )
}

export default Header
