import { ChakraProvider } from '@chakra-ui/react'
import {
  Link
} from "@chakra-ui/react";
export default function Root() {
    return (
  <ChakraProvider>
    <header>
      <Link href="/home">
          <img
          src="https://i.ibb.co/VD85q5T/d0e8a0a2-ccc1-417b-9096-6b32effcb4d8.jpg"
          alt="Logo"
          style={{ height: "75px", width: "auto" }}
          />
        Benvenuto nella Movie App    
      </Link>
    </header>
  </ChakraProvider>       
  );  
}