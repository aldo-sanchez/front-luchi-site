import Head from "next/head";
import Staff from "../shared/Staff";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luisana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="title">
        <img src="https://res.cloudinary.com/dnx34ea7g/image/upload/v1608702162/large_LR_Final_7_c34f4d0446.jpg" />
        <header>
          <h1>Luisana Rivas</h1>
          <h2>mezzo-soprano</h2>
        </header>
      </section>
      {/* <Staff /> */}
    </>
  );
}
