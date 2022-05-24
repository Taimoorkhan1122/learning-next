import Link from "next/link";
import React from "react";

const index = ({ cars }) => {
  console.log(cars);
  return (
    <div>
      <div>Welcom to Cars sections</div>
      <ul>
        {cars.map((car, id) => (
          <Link
            key={`id+${car.model}`}
            href={`${car.manufacturere}?${car.model}`}
          >
            <li>
              <div>{car.manufacturere}</div>
              <div>{car.model}</div>
              <div>{car.color}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = () => {
  const cars = [
    { manufacturere: "Audi", model: "A8", color: "Vibrant Blue" },
    { manufacturere: "Ferrari", model: "F920", color: "Signature Red" },
    { manufacturere: "Audi", model: "G47", color: "Black" },
    { manufacturere: "Mercedez", model: "Mercedez Benz v11", color: "Gray" },
  ];

  return {
    props: {
      cars,
    },
  };
};

export default index;
