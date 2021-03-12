import { useState, useEffect } from "react";

import { Title } from "../styles/pages/Home";

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
  }, []);
  return (
    <div>
      <Title>Home Next</Title>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>{house.houseName}</li>
        ))}
      </ul>
    </div>
  );
}
