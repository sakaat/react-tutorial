import Counter from "../components/Counter";
import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
    <Layout header="Other" title="Other page.">
        <p>This is Other page.</p>
        <hr />
        <Counter />
        <div>
            <Link href="/">
                <button>&lt;&lt; Back to Index page</button>
            </Link>
        </div>
    </Layout>
);
