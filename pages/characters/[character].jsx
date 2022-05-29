import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const Cars = ({ data }) => {
  const router = useRouter();
  return router.isFallback ? (
    <div>Loading ....</div>
  ) : (
    <div>
      <Image
        src={data.image}
        alt={data.name}
        layout="fixed"
        width={200}
        height={200}
      />
      <h2>{data.name}</h2>
      <p>{data.gender}</p>
      <ul>
        {data.episode.map((epis, key) => (
          <li key={"episode/" + key}>
            <Link href={epis}>
              <a>Watch episode {key + 1}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { character } = context?.params;
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${character}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { character: "1" },
      },
      {
        params: { character: "2" },
      },
      {
        params: { character: "3" },
      },
      {
        params: { character: "4" },
      },
      {
        params: { character: "5" },
      },
      {
        params: { character: "6" },
      },
    ],
    fallback: true,
  };
};

export default Cars;
