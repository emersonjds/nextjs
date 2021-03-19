import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

import { Title, TextProduct } from "../styles/pages/Home";

interface IHouse {
  id: number;
  owner: string;
  houseName: string;
  value: number;
}

export default function Home() {
  const [houses, setHouses] = useState<IHouse[]>([]);

  useEffect(() => {
    //num fetch o response sempre tem que ser transformado em json
    fetch("http://localhost:3333/houses").then((response) => {
      response.json().then((data) => {
        setHouses(data);
      });
    });
    console.log(houses);
  }, []);
  return (
    <div>
      <Title>Home Next</Title>
      <ul>
        {houses.map((house) => (
          <TextProduct key={house.id}>{house.owner}</TextProduct>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://localhost:3333/houses');
  const { data } = response.json();

  return {
    props: {
      data.houses
    }
  }
}