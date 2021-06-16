import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { db } from '../lib/db';

const IndexPage = ({ items }) => {
  console.log(items);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      {/* <p>{JSON.parse(items)}</p> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data: any = 'a';
  const docRef = db.collection("data").doc("bv47K7fcuX8iEmZ0c7eI");
  await docRef.get().then((doc) => {
    data = doc.data();
  })
  const data_json = JSON.stringify(data);

  return {
    props: {
      data_json,
    },
  };
}

export default IndexPage;