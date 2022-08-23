import type { NextPage } from "next";

const SWAP: NextPage = () => {
  return <div>This is Swap</div>;
};

export default SWAP;

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
