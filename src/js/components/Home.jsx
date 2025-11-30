import React from "react";

//include images into your bundle
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	return (
		 <div className="container py-4">
      <h1 className="mb-4">Proyecto — Contador de segundos</h1>
      {/* Placeholder: luego importaremos y pegaremos SecondsCounter aquí */}
	   <SecondsCounter />
    </div>
  );
};

export default Home;