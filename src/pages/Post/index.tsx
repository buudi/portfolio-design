import { useDisclosure } from "@chakra-ui/react";

import Navbar from "../Home/Navbar";
import MenuOverlay from "../../components/MenuOverlay";

const Post = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />

      <h1>Post</h1>
    </div>
  );
};

export default Post;
