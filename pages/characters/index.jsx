import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../../styles/chars.module.css";

const index = ({ characters }) => {
  const { results } = characters;
  console.log(results);

  return (
    <div>
      <div>Welcom to Cars sections</div>
      <section className={styles.container}>
        {results.map((char) => (
          <Link key={char.id} href={`characters/${char.id.toString()}`}>
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src={char.image} alt="character" layout="fill" />
              </div>
              <div className={styles.itemsContainer}>
                <div className={styles.item}>Name: {char.name}</div>
                <div className={styles.item}>Species: {char.species}</div>
                <div className={styles.item}>Status: {char.status}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export const getStaticProps = async ({ context }) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character`).then(
    (res) => res.json()
  );

  return {
    props: {
      characters: data,
    },
  };
};

export default index;
