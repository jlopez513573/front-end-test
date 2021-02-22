import ActivityItem from "./ActivityItem";

const Activity = () => {
  return (
    <div className="activity">
      <h1 className="activity-title">Activity</h1>
      <ActivityItem text="You have new 5 followers including Kathryn Crawford and Piper Shaw" />
      <ActivityItem text="3 new events were added to your calendar" />
      <ActivityItem text="You have 3 pending readings to complete 🤓" />
    </div>
  );
};

export default Activity;
