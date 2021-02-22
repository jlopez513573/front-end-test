import NavIcon from "./NavIcon";

const LeftNav = () => {
  return (
    <div className="leftnav">
      <NavIcon />
      <NavIcon active />
      <NavIcon />
      <NavIcon />
    </div>
  );
};

export default LeftNav;
