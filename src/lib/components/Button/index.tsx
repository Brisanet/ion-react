import "./button.css";

interface ButtonInterface {
  children: string | JSX.Element;
}

const Button = ({ children }: ButtonInterface): JSX.Element => {
  return <button className="btn">{children}</button>;
};

export default Button;
