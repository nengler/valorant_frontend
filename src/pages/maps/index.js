import baseUrl from "util/baseUrl";
import Map from "features/maps/index/map";
import { Container, Heading } from "@chakra-ui/react";
import HavenImage from "@/public/images/maps/splash/2BEE0DC9-4FFE-519B-1CBD-7FBE763A6047_splash.webp";
import BindImage from "@/public/images/maps/splash/2C9D57EC-4431-9C5E-2939-8F9EF6DD5CBA_splash.webp";
import BreezeImage from "@/public/images/maps/splash/2FB9A4FD-47B8-4E7D-A969-74B4046EBD53_splash.webp";
import AscentImage from "@/public/images/maps/splash/7EAECC1B-4337-BBF6-6AB9-04B8F06B3319_splash.webp";
import SplitImage from "@/public/images/maps/splash/D960549E-485C-E861-8D71-AA9D1AED12A2_splash.webp";
import IceBoxImage from "@/public/images/maps/splash/E2AD5C54-4114-A870-9641-8EA21279579A_splash.webp";

export default function index({ data }) {
  const mapObjects = {
    Haven: HavenImage,
    Bind: BindImage,
    Breeze: BreezeImage,
    Ascent: AscentImage,
    Split: SplitImage,
    Icebox: IceBoxImage,
  };

  return (
    <Container maxW="container.lg">
      <Heading as="h1" size="2xl">
        Maps
      </Heading>

      {data.map((map) => (
        <Map key={map.id} map={map} mapImage={mapObjects[map.name]} />
      ))}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${baseUrl}/maps`);

  const data = await response.json();

  return { props: { data } };
}
