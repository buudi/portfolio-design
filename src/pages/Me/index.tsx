import { useDisclosure } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

const Me = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <div>
        <h1>Me</h1>
      </div>
    </div>
  );
};

export default Me;
