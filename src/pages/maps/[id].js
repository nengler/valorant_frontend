import baseUrl from "util/baseUrl";
import { Heading } from "@chakra-ui/react";

export default function Show({ data }) {
  console.log(data);
  return (
    <div>
      <Heading as="h1" size="2xl">
        {data.map.name}
      </Heading>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);

  const response = await fetch(`${baseUrl}/maps/${params.id}`);

  const data = await response.json();

  return { props: { data } };
}
