import Image from "next/image";
import { useRef, useState } from "react";
import { AspectRatio, Box, Center, Slide } from "@chakra-ui/react";
import { SlideFade } from "@chakra-ui/react";
import Link from "next/link";

export default function Map({ map }) {
  const [isHovered, setIsHovered] = useState(false);
  const isHovering = () => setIsHovered(true);
  const isNotHovering = () => setIsHovered(false);
  const mapTextElement = useRef(null);

  return (
    <AspectRatio ratio={16 / 9} maxH="300px">
      <Link href={`/maps/${map.id}`}>
        <a>
          <Box
            onMouseEnter={(e) => {
              if (e.target !== mapTextElement.current) {
                isHovering();
              }
            }}
            onMouseLeave={isNotHovering}
            pos="relative"
            w="100%"
            h="100%"
            m="auto"
            key={map.id}
          >
            <Image
              src={`/images/maps/splash/${map.uuid.toUpperCase()}_splash.webp`}
              alt={`Image of ${map.name}`}
              layout="fill"
              objectFit="cover"
              quality={50}
            />
            <SlideFade
              style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}
              direction="left"
              in={!isHovered}
            >
              <Box
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                background="blackAlpha.400"
              />
            </SlideFade>
            <Slide
              style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}
              in={isHovered}
              unmountOnExit={true}
            >
              <Center ref={mapTextElement} w="100%" h="100%">
                <Box
                  fontSize="2xl"
                  as="h2"
                  fontWeight="semibold"
                  borderRadius="sm"
                  color="white"
                  p="4"
                  bg="blackAlpha.600"
                >
                  {map.name}
                </Box>
              </Center>
            </Slide>
          </Box>
        </a>
      </Link>
    </AspectRatio>
  );
}
