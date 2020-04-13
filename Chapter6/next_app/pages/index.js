import Counter from "../components/Counter";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "../static/Image";

export default () => (
    <Layout header="Next" title="Top page.">
        <p>Welcome to next.js!</p>
        <Image fname="sndyhg.jpg" size="250" />
        <hr />
        <Counter />
        <div>
            <Link href="./other">
                <button>Go to Other page &gt;&gt;</button>
            </Link>
        </div>
    </Layout>
);
