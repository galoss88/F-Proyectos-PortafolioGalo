import React from "react";
import {
  DivBiografia,
  FotoBiografia,
  TextoBiografia,
} from "./styles/stylesBiografia";

export default function Biografia() {
  return (
    <DivBiografia>
      <FotoBiografia />
      <TextoBiografia id="hijo">
        Soy Nicolas, desarrollador FullStack, siempre fui apasionado de la
        tecnología aunque veía a la programación como algo lejano y difícil de
        aprender. Fue un camino duro que aunque es difícil, disfruto mucho
        recorrerlo. Soy una persona responsable, detallista, muy comprometido en
        lograr mis objetivos y con mucho deseo de crecer tanto personalmente
        como laboralmente.
      </TextoBiografia>
    </DivBiografia>
  );
}
