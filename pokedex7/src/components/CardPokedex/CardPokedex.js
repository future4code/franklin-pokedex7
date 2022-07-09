import React, { useState } from "react";
import {
  ConstainerControl,
  ConstainerPokedex,
  ContainerCondicional,
} from "./styled";

export const CardPokedex = () => {
  const [screen, setScreen] = useState(1);

  return (
    <ConstainerPokedex>
      <ContainerCondicional></ContainerCondicional>
      <ConstainerControl>
        <button onClick={() => setScreen(1)}></button>
        <button onClick={() => setScreen(2)}></button>
        <button onClick={() => setScreen(3)}></button>
        <button onClick={() => setScreen(4)}></button>
        <button onClick={() => setScreen(5)}></button>
      </ConstainerControl>
    </ConstainerPokedex>
  );
};
