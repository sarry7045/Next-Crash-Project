import RDMakeovers from "./RDMakeovers";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchApi } from "../TravelApp/fetchApi";
import Property from "../TravelApp/Property";

const index = ({ propertiesForSale, propertiesForRent }) => {
  // console.log(data);
  console.log("propertiesForSale", propertiesForSale);
  console.log("propertiesForRent", propertiesForRent);
  return (
    <>
      {/* <RDMakeovers /> */}
      {/* {data.map((value, i) => {
        return (
          <div key={i}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </div>
        );
      })} */}
      <Box>
        <Banner
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartment, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          purpose="RENT A HOME"
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        <Banner
          title1="Find, Buy & Own Your"
          title2="Dream Home"
          desc1="Explore Apartment, Villas, Homes"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          purpose="BUY A HOME"
        />
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Box>
    </>
  );
};

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  linkName,
  buttonText,
  desc2,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="Banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>{" "}
      </Button>
    </Box>
  </Flex>
);

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
export default index;
