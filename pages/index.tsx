import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout/>
      <Link href="/Film" className="box text-white">
        Cliquez ici
      </Link>
    </div>
  );
};

export default Home;
