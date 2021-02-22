import HeaderLogo from "./HeaderLogo";
import SearchInput from "./SearchInput";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <SearchInput />
      <HeaderActions />
    </div>
  );
};

export default Header;
