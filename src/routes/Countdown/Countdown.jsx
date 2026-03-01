// import components
import Title from "../../components/Title/Title";
import Counter from "../../components/Counter/Counter";

// import useContext
import CountdownContext from "../../useContextReact/CountdownContext";

// import hooks do React
import { useContext } from "react";

// import Navigate from react-router-dom
import { useNavigate } from "react-router-dom";

// import custom hooks
import useCountdown from "../../hooks/useCountdown";

const Countdown = () => {
  const context = useContext(CountdownContext);

  const navigateTo = useNavigate();

  if (!context) return navigateTo("/");

  const formData = context?.formData;

  const title = formData.title;
  const date = formData.date;
  const color = formData.color;

  const [day, hour, minute, second] = useCountdown(date);

  console.log(
    `Day: ${day}, Hour: ${hour}, Minute: ${minute} and second: ${second}.`,
  );

  return (
    <>
      <Title title={title} colorTheme={color} />
      <div className="countdown-container">
        <Counter
          title="Dias"
          number={isNaN(day) ? 0 : day}
          colorTheme={color}
        />
        <Counter
          title="Horas"
          number={isNaN(hour) ? 0 : hour}
          colorTheme={color}
        />
        <Counter
          title="Minutos"
          number={isNaN(minute) ? 0 : minute}
          colorTheme={color}
        />
        <Counter
          title="Segundos"
          number={isNaN(second) ? 0 : second}
          colorTheme={color}
        />
      </div>
    </>
  );
};

export default Countdown;
