import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ProgressOverview = () => {
  const data = [
    {
      name: "completed",
      value: 40,
    },
    {
      name: "lefttogo",
      value: 60,
    },
  ];
  const colors = ["#FED200", "#FF794F"];
  return (
    <div className="progress-overview">
      <h1>Progress Overview</h1>
      <div className="progress-overview__chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              startAngle={330}
              endAngle={-30}
              cornerRadius={40}
              paddingAngle={-30}
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="progress-insights__container">
        <div className="progress-insights">
          <div className="progress-insights__title">
            <div
              className="progress-insights__icon"
              style={{ backgroundColor: colors[0] }}
            ></div>
            Completed
          </div>
          <div className="progress-insights__value">
            20 <span>hours</span>
          </div>
        </div>
        <div className="progress-insights">
          <div className="progress-insights__title">
            <div
              className="progress-insights__icon"
              style={{ backgroundColor: colors[1] }}
            ></div>
            Left to go
          </div>
          <div className="progress-insights__value">
            30 <span>hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverview;
