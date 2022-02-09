import { Flex, Text, Tooltip, Heading } from "@chakra-ui/react";
import Image from "next/image";
import formatPercentage from "util/formatPercentage.";
import formatNumberCommas from "util/formatNumberCommas";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AgentBarChart({ agent, agentImage, containerWidth, index }) {
  const [isHovering, setIsHovering] = useState(false);
  const onHover = () => setIsHovering(true);
  const onHoverLeave = () => setIsHovering(false);

  return (
    <motion.div
      style={{ position: "absolute" }}
      animate={{ y: index * 52, initial: false }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onHover}
      onClick={onHover}
      onMouseLeave={onHoverLeave}
    >
      <Tooltip
        isOpen={isHovering}
        hasArrow={true}
        placement="right"
        label={
          <>
            <Flex mb="1" justify="space-between" alignItems="center">
              <Heading as="h6" size="md" fontWeight="extrabold">
                {agent.name}
              </Heading>
              <Text> {formatPercentage(agent.percentage * 100)}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text mr={5}>Total Picks:</Text>
              <Text>{formatNumberCommas(agent.totalWins)}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text mr={5}>Total Wins:</Text>
              <Text>{formatNumberCommas(agent.totalPicks - agent.totalWins)}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text mr={5}>Total Losses:</Text>
              <Text>{formatNumberCommas(agent.totalPicks)}</Text>
            </Flex>

            <Flex justify="space-between">
              <Text mr={5}>Win Rate:</Text>
              <Text>{formatPercentage(agent.winPercentage * 100)}</Text>
            </Flex>
          </>
        }
        aria-label="A tooltip"
      >
        <Flex pb="3" key={agent.name} alignItems="center" transition=".5s opacity">
          <Image priority={true} src={agentImage} width="40px" height="40px" />
          <Flex
            ml="4"
            transition="2s width"
            w={containerWidth === null ? 0 : agent.percentage * containerWidth * 4}
            h="40px"
            bg="purple.500"
            justifyContent="center"
            alignItems="center"
            pos="relative"
            borderRadius="sm"
          >
            {formatPercentage(agent.percentage * 100)}
          </Flex>
        </Flex>
      </Tooltip>
    </motion.div>
  );
}
