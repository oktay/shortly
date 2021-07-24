import { Container, Stack } from "@chakra-ui/react";
import Card from "./Card";

function List({ links, setLinks }) {
  return (
    <Container maxW="container.xl" py="8">
      {links.length > 0 && (
        <Stack>
          {links.map(link => <Card key={link.result.code} link={link.result} setLinks={setLinks} />)}
        </Stack>
      )}
    </Container>
  )
}

export default List