import { useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import MeSection from "./MeSection";
import SelectedWork from "./SelectedWork";
import MenuOverlay from "../../components/MenuOverlay";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Navbar onOpen={onOpen} />
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
      <MeSection />
      <SelectedWork />
    </>
  );
};

export default Home;
