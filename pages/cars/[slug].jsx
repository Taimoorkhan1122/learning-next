import { useRouter } from "next/router";
import React from "react";

const Cars = ({ slug }) => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Welcom to {slug}</div>;
};

export const getStaticProps = (context) => {
  const { slug } = context?.params;

  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: "first-blog-post" },
      },
      {
        params: { slug: "second-blog-post" },
      },
      {
        params: { slug: "third-blog-post" },
      },
    ],
    fallback: false,
  };
};

export default Cars;
