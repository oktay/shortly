import { Box, Button, Flex, Link, useClipboard } from '@chakra-ui/react'

function Card({ link, setLinks }) {
  const { onCopy, hasCopied } = useClipboard(link.full_short_link)

  function remove() {
    setLinks((links) => links.filter((item) => link.code !== item.result.code))
  }

  return (
    <Flex
      bg="white"
      justifyContent="space-between"
      alignItems={{ base: 'flex-start', md: 'center' }}
      px="4"
      py="2"
      rounded="md"
      direction={{ base: 'column', md: 'row' }}
    >
      <Link href={link.original_link} fontWeight="medium" isExternal>
        {link.original_link}
      </Link>
      <Box
        display={{ base: 'flex', md: 'block' }}
        flexDirection="column"
        w={{ base: 'full', md: 'auto' }}
        flexShrink="0"
      >
        <Link
          href={link.full_short_link}
          color="teal.600"
          fontWeight="medium"
          isExternal
        >
          {link.full_short_link}
        </Link>
        <Button
          colorScheme={hasCopied ? 'purple' : 'teal'}
          onClick={onCopy}
          ml={{ md: '4' }}
          mt={{ base: '2', md: '0' }}
          size="sm"
          w={{ base: 'full', md: 'auto' }}
        >
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          ml={{ md: '4' }}
          mt={{ base: '2', md: '0' }}
          onClick={remove}
        >
          Remove
        </Button>
      </Box>
    </Flex>
  )
}

export default Card
