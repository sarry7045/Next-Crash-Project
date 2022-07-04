import RDMakeovers from "./RDMakeovers";

const index = ({ data }) => {
  console.log(data);
  return (
    <>
      {/* <RDMakeovers /> */}
      {data.map((value, i) => {
        return (
          <div key={i}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </div>
        );
      })}
    </>
  );
};

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
