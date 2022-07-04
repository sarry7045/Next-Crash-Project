import RDMakeovers from "./RDMakeovers";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

const index = ({ data }) => {
  console.log(data);
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
      <h1>Hello</h1>
      <Banner />
    </>
  );
};

const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {/* <Image src={imageUrl} width={500} height={300} alt="Banner" /> */}
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {" "}
      </Text>
    </Box>
  </Flex>
);

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default index;
