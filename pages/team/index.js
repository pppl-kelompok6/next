import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

export default function team() {
  return (
    <Layout>
      <div className='flex justify-center p-10'>
        <h1 className="text-4xl">Team</h1>
      </div>
      <Profile />
    </Layout>
  );
}
