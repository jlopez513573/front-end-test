import cn from "classnames";

const Button = ({ text, type = "default" }) => {
  const classes = cn({ button: true, "button-default": type === "default" });
  return <button className={classes}>{text}</button>;
};

export default Button;
