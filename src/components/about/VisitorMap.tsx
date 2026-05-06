import { Box, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

/**
 * ClustrMaps embed — visitor counter + world map with red dots.
 *
 * SETUP (one-time):
 *  1. Go to https://clustrmaps.com/ → "Get a free map" → enter site URL.
 *  2. Pick "Globe" or "Map" widget. Copy the `d=...` value from the snippet.
 *  3. Paste it below as CLUSTRMAPS_ID.
 *
 * Until ID is set, a placeholder card renders.
 */
const CLUSTRMAPS_ID = '' // e.g. 'qqYfShfqJiPVsKUmBgyEr3-23P9LwsJj9KGzYV2n3eo'

const VisitorMap = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingColor = useColorModeValue('gray.800', 'white')
  const subColor = useColorModeValue('gray.500', 'gray.400')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  useEffect(() => {
    if (!CLUSTRMAPS_ID || !containerRef.current) return
    if (containerRef.current.querySelector('script')) return
    const script = document.createElement('script')
    script.id = 'clustrmaps'
    script.src = `//clustrmaps.com/map_v2.js?d=${CLUSTRMAPS_ID}&cl=ffffff&w=a`
    script.async = true
    containerRef.current.appendChild(script)
  }, [])

  return (
    <Box w="full" py={[6, 8, 10]} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={["full", "full", "7xl"]} px={[2, 4, 8]}>
        <Flex align="center" gap={3} mb={4}>
          <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
          <Heading size={["sm", "md"]} fontWeight="semibold" color={headingColor}>
            Visitors
          </Heading>
          <Text fontSize="xs" color={subColor} fontFamily="mono">
            // global reach
          </Text>
        </Flex>

        <Box
          bg={cardBg}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="md"
          p={[3, 4, 6]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minH="320px"
        >
          {CLUSTRMAPS_ID ? (
            <Box ref={containerRef} w="full" maxW="600px" />
          ) : (
            <Text fontSize="sm" color={subColor} fontFamily="mono" textAlign="center">
              ClustrMaps ID not configured. See <code>src/components/about/VisitorMap.tsx</code>.
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  )
}

export default VisitorMap
