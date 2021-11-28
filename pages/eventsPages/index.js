import Cards from "../../components/Cards";
import Layout from "../../components/Layout";

export default function events() {
  return (
    <Layout>
      <div className='flex justify-center p-10'>
        <h1 className="text-xl">EVENT</h1>
      </div>

      <Cards />
    </Layout>
  );
}
