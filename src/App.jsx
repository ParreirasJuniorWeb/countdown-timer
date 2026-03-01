// import CSS
import './App.css'

// import Outlet from react-router-dom
import { Outlet, useNavigate } from 'react-router-dom';

// import images
import NewYear from "./images/party-new-years-eve-1953253_1920.jpg";

// import useContext
import CountdownContext from "./useContextReact/CountdownContext";

// import hooks do React
import { useContext, useEffect } from "react";

function App() {
  
  const context = useContext(CountdownContext);
  const formData = context?.formData;

  const urlImage = formData.image;

  const navigateTo = useNavigate();

  useEffect(() => {
    if(!formData) return navigateTo("/");
  }, [formData, navigateTo]);

  return (
    <div className='App' style={{backgroundImage: `url(${
      urlImage === "" ? NewYear : urlImage 
    })`}}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App;