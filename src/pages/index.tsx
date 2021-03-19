import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

import { Title, TextProduct } from "../styles/pages/Home";

interface IHouse {
  id: number;
  owner: string;
  houseName: string;
  value: number;
}

interface HomeProps {
  houses: IHouse[];
}

export default function Home({houses}: HomeProps) {
 
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/houses');
  const houses = await response.json();

  return {
    props: {
      houses
    }
  }
}