interface IProps {
  children: string;
  color?: "primary" | "danger" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: IProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
