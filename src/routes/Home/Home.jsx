// import hooks from react
import { useContext, useState } from "react";

// import CSS
import "./Home.css";

// import useContext
import CountdownContext from "../../useContextReact/CountdownContext";

// import Navigate from react-router-dom
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const context = useContext(CountdownContext);
  const setFormData = context?.setFormData;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      date,
      image,
      color
    };

    // Envia para o provedor do contexto React para 
    // alterar o state padrão previamente definido como 'null' 
    // no 'useContect' personalizado que criamos, o " CountdownContext ".
    setFormData(formData);

    // direciona para a outra página - a Countdown.jsx
    navigate("/countdown");
  }

  return (
    <div className="home">
      <h1>Monte a sua contagem regressiva!</h1>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Título:</span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="date">
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label htmlFor="image">
          <span>Imagem:</span>
          <input
            type="url"
            name="image"
            id="image"
            placeholder="Insira a URL da imagem aqui"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label htmlFor="color">
          <span>Cor do tema:</span>
          <input
            type="color"
            name="color"
            id="color"
            required
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;