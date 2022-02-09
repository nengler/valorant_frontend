import killJoy from "@/public/images/agents/small/1E58DE9C-4950-5125-93E9-A0AEE9F98746_small.webp";
import breach from "@/public/images/agents/small/5F8D3A7F-467B-97F3-062C-13ACF203C006_small.webp";
import skye from "@/public/images/agents/small/6F2A04CA-43E0-BE17-7F36-B3908627744D_small.webp";
import yoru from "@/public/images/agents/small/7F94D92C-4234-0A36-9646-3A87EB8B5C89_small.webp";
import omen from "@/public/images/agents/small/8E253930-4C05-31DD-1B6C-968525494517_small.webp";
import brimstone from "@/public/images/agents/small/9F0D8BA9-4140-B941-57D3-A7AD57C6B417_small.webp";
import astra from "@/public/images/agents/small/41FB69C1-4189-7B37-F117-BCAF1E96F1BF_small.webp";
import cypher from "@/public/images/agents/small/117ED9E3-49F3-6512-3CCF-0CADA7E3823B_small.webp";
import sova from "@/public/images/agents/small/320B2A48-4D9B-A075-30F1-1F93A9B638FA_small.webp";
import sage from "@/public/images/agents/small/569FDD95-4D10-43AB-CA70-79BECC718B46_small.webp";
import kayo from "@/public/images/agents/small/601DBBE7-43CE-BE57-2A40-4ABD24953621_small.webp";
import viper from "@/public/images/agents/small/707EAB51-4836-F488-046A-CDA6BF494859_small.webp";
import reyna from "@/public/images/agents/small/A3BFB853-43B2-7238-A4F1-AD90E9E46BCC_small.webp";
import jett from "@/public/images/agents/small/ADD6443A-41BD-E414-F6AD-E58D267F4E95_small.webp";
import phoenix from "@/public/images/agents/small/EB93336A-449B-9C1B-0A54-A891F7921D69_small.webp";
import raze from "@/public/images/agents/small/F94C3B30-42BE-E959-889C-5AA313DBA261_small.webp";
import Image from "next/image";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import formatPercentage from "util/formatPercentage.";

export default function Comps({ mostCommonComps }) {
  const agentObject = {
    Killjoy: killJoy,
    Breach: breach,
    Skye: skye,
    Yoru: yoru,
    Omen: omen,
    Brimstone: brimstone,
    Astra: astra,
    Cypher: cypher,
    Sova: sova,
    Sage: sage,
    Kayo: kayo,
    Viper: viper,
    Reyna: reyna,
    Jett: jett,
    Phoenix: phoenix,
    Raze: raze,
  };

  const [barGraphContainer, setBarGraphContainer] = useState(null);
  const [commonComps, setCommonComps] = useState(mostCommonComps);

  useEffect(() => {
    if (mostCommonComps) {
      setCommonComps(mostCommonComps);
    }
  }, [mostCommonComps]);

  if (!commonComps) {
    return null;
  }

  return (
    <>
      <Heading mb="2" as="h4" size="md">
        Comp Pickrate
      </Heading>

      <Box ref={(ref) => setBarGraphContainer(ref)} h={commonComps.length * 56}>
        {commonComps.map((comp) => (
          <Flex align="center" mb="4" key={comp.agents.join(",")}>
            <Flex>
              {comp.agents.map((agent) => (
                <Image
                  layout="fixed"
                  key={agent}
                  src={agentObject[agent]}
                  width="40px"
                  height="40px"
                />
              ))}
            </Flex>
            <Flex
              ml="4"
              transition="2s width"
              w={
                barGraphContainer === null
                  ? 0
                  : comp.percentage * barGraphContainer.offsetWidth * 20
              }
              h="40px"
              bg="purple.500"
              justifyContent="center"
              alignItems="center"
              pos="relative"
              borderRadius="sm"
            >
              {formatPercentage(comp.percentage * 100)}
            </Flex>
          </Flex>
        ))}
      </Box>
      <Box pos="relative" ml={`${40 * 5 + 16}px`} borderTop="3px solid black">
        <Box pos="absolute" left="0" top="0" transform="translateX(-50%)">
          0%
        </Box>
        <Box pos="absolute" left="50%" top="0" transform="translateX(-50%)">
          5%
        </Box>
        <Box pos="absolute" right="0" top="0" transform="translateX(50%)">
          10%
        </Box>
      </Box>
    </>
  );
}
