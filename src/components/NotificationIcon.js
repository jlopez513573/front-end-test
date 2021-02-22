const NotificationBadge = () => <div className="notification-badge"></div>;

const NotificationIcon = ({ hasNotification = false }) => {
  return (
    <div className="notification-icon">
      {hasNotification && <NotificationBadge />}
    </div>
  );
};

export default NotificationIcon;
