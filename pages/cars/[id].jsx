import { useRouter } from "next/router";
import React from "react";

const Cars = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Welcom to {id}</div>;
};

export default Cars;
