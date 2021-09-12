import "./styles.css";
import Image from "./react.png";
import Logo from "./redux.svg";
export const App = () => {
  return (
    <>
      <h1>Hello React {process.env.name}</h1>
      <img src={Image} alt="React Logo" />
      <Logo />
    </>
  );
};
