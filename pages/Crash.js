export default function Crash({ data }) {
  console.log(data, "//////");
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
