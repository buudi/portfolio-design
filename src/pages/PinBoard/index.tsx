import { useDisclosure } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

const PinBoard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <div>
        <h1>Pin Board</h1>
      </div>
    </div>
  );
};

export default PinBoard;
