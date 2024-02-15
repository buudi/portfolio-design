import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";

import {
  FaXTwitter,
  FaSquareFacebook,
  FaSquareReddit,
  FaYCombinator,
} from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const SocialMediaShareMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialMediaIcons = [
    {
      icon: (
        <FaXTwitter
          color="black"
          style={{ background: "white" }}
          size={"2.5rem"}
        />
      ),
      label: "Twitter",
      link: "twitter.com",
    },
    {
      icon: (
        <FaSquareFacebook
          color="#3B5998"
          size={"2.5rem"}
          style={{ background: "white", marginTop: "0.6rem" }}
        />
      ),
      label: "Facebook",
      link: "facebook.com",
    },
    {
      icon: (
        <FaYCombinator
          size={"2.5rem"}
          color="#FF6600"
          style={{ background: "white", marginTop: "0.6rem" }}
        />
      ),
      label: "Hacker News",
      link: "news.ycombinator.com",
    },
    {
      icon: (
        <FaSquareReddit
          size={"2.5rem"}
          color="#FF5700"
          style={{ background: "white", marginTop: "0.6rem" }}
        />
      ),
      label: "Reddit",
      link: "reddit.com",
    },
  ];

  return (
    <>
      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="top-end"
      >
        <PopoverTrigger>
          <IconButton
            icon={<FaShareAlt />}
            aria-label="Share"
            size="lg"
            bg="blue.900"
            color="#D6DBDF"
            position="fixed"
            bottom="15px"
            right="15px"
            borderRadius="50%"
            onClick={() => setIsOpen(!isOpen)}
          />
        </PopoverTrigger>
        <PopoverContent
          style={{
            backgroundColor: "transparent",
            maxWidth: "5rem",
            border: "none",
          }}
        >
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
          <PopoverBody>
            <Flex direction="column" ml="1rem">
              {socialMediaIcons.map((socialMedia, index) => (
                <Box
                  key={index}
                  as="a"
                  href={socialMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="inline-block"
                  p="1" // Reduced padding
                  style={{ fontSize: "1.5rem" }} // Moderate icon size
                >
                  {socialMedia.icon}
                </Box>
              ))}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SocialMediaShareMobile;
