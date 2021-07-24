import { Box, Container, Link } from "@chakra-ui/react"
import Logo from './Logo'

function Header() {
  return (
    <Box as="header" justifyContent="center" py="8" bg="white">
      <Container maxW="container.xl">
        <Link href="/">
          <Logo />
        </Link>
      </Container>
    </Box>
  )
}

export default Header