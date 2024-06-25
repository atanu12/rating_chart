import '../App.css';

// get the data from the props
const RatingChart = ({ratings}) => {

  return (
    <div className="chart">
      {ratings.map((count, index) => (
        <div key={index} className="bar">
          <div className="bar-inner" style={{ height: `${count * 5}px` }}>  {count} </div>
          <div className="label">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default RatingChart;
