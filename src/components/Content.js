import Dashboard from "./Dashboard";
import Events from "./Events";
import Activity from "./Activity";
import Progress from "./Progress";

const Content = () => {
  return (
    <div className="content">
      <Dashboard />
      <Events />
      <Activity />
      <Progress />
    </div>
  );
};

export default Content;
