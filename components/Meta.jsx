import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <title>{title}</title>
    </Head>
  );
};

// for Default props
Meta.defaultProps = {
  title: "Code Diary",
  keywords:
    "coding, programming, development, learning, daily, progress, journey, community",
  description:
    "Code Diary is a platform for sharing your daily coding progress. Connect with other developers and learn from each other. Stay motivated and on track to reach your coding goals.",
};

export default Meta;
