import { ChakraProvider } from '@chakra-ui/react'
import {
  Box,
  Heading,
  FormControl,
  Input,
  Stack,
  Spinner,
  Text,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
export default function Root() {
    return (
    <ChakraProvider>
       <Box id="sidebar">
      <Heading>React Router</Heading>
      <Stack>
        <form id="search-form" role="search">
          <FormControl>
            <Input
              id="q"
              aria-label="Search Movies"
              placeholder="Search"
              type="search"
              name="q"
            />
          </FormControl>
          <Spinner id="search-spinner" aria-hidden hidden={true} />
          <Text className="sr-only" aria-live="polite"></Text>
        </form>
      </Stack>
      <Stack as="nav">
        <List>
          <ListItem>
            <Link href="/movie">Movies</Link>
          </ListItem>
        </List>
      </Stack>
    </Box>
    </ChakraProvider>
        
    );
  }