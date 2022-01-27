import baseUrl from "util/baseUrl";
import Map from "features/maps/index/map";
import { Container, Heading } from "@chakra-ui/react";

export default function index({ data }) {
  return (
    <Container maxW="container.lg">
      <Heading as="h1" size="2xl">
        Maps
      </Heading>

      {data.map((map) => (
        <Map key={map.id} map={map} />
      ))}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${baseUrl}/maps`);

  const data = await response.json();

  return { props: { data } };
}
