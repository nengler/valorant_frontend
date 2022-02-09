import baseUrl from "util/baseUrl";
import { Button, Flex, Heading, Spinner, Container } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useState } from "react";
import useSWR from "swr";
import PickRate from "features/maps/show/pickRate";
import Comps from "features/maps/show/comps";
import SliderFilter from "features/maps/show/sliderFilter";

export default function Show({ map }) {
  const [rankFilters, setRankFilters] = useState([3, 24]);

  const updateAgentPickRates = async (lowerRank, higherRank) => {
    setRankFilters([lowerRank, higherRank]);
  };

  const fetcher = (url) =>
    fetch(url, {
      method: "get",
    }).then((r) => r.json());

  const { data, error } = useSWR(
    `${baseUrl}/maps/${map.id}/agentPickRate?lowerRank=${rankFilters[0]}&higherRank=${rankFilters[1]}`,
    fetcher
  );
  return (
    <Container maxW="container.xl">
      <Flex
        background="white"
        zIndex={1}
        pos="sticky"
        top={0}
        mb="5"
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Link href="/maps">
            <Button size="sm">
              <ArrowBackIcon />
            </Button>
          </Link>
          <Heading ml="3" as="h1" size="2xl">
            {map.name}
          </Heading>
        </Flex>
        <SliderFilter updateAgentPickRates={updateAgentPickRates} />
      </Flex>
      <PickRate agentPercentages={data?.agentPercentages} />
      <Comps mostCommonComps={data?.mostCommonComps} />
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`${baseUrl}/maps/${params.id}`);

  const data = await response.json();

  const map = data.map;

  return {
    props: {
      map: map,
    },
  };
}
