import Button from "../Button";
import NotificationIcon from "../NotificationIcon";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <Button text="+ ADD" />
      <NotificationIcon hasNotification />
      <NotificationIcon />
    </div>
  );
};

export default HeaderActions;
