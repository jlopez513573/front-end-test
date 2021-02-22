import cn from "classnames";

const NavIcon = ({ active }) => {
  const classes = cn({ "nav-icon": true, "nav-icon--active": active });
  return <button className={classes}>X</button>;
};

export default NavIcon;
