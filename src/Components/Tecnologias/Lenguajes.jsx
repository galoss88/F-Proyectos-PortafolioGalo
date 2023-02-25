import React from "react";
import lenguajes from "../../Info/lenguajes"
import useCreateLenguajes from "../../hooks/useCreateLenguajes";
const Lenguajes = () => {
  
  //Hook creador de lenguaje, Solo paso array con objetos que tengan la informacion.
  const [Lenguaje] = useCreateLenguajes(lenguajes);
  return <Lenguaje />;
};

export default Lenguajes;
