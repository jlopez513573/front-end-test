const ActivityItem = ({ text }) => {
  return (
    <div className="activity-item">
      <div className="activity-item__icon"></div>
      <div className="activity-item__text">{text}</div>
    </div>
  );
};

export default ActivityItem;
