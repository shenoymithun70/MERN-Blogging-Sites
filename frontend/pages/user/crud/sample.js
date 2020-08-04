import Layout from "../../../components/Layout";
import Link from "next/link";

const Sample = () => {
  return (
    <Layout>
      <h1 className="daddu text-center">Mithun</h1>
      <p>Daddu</p>
      <Link href="/signin">
        <button className="btn btn-primary">Click Me</button>
      </Link>
    </Layout>
  );
};

export default Sample;
