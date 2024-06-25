// import '../App.css';

// // get the data from the props
// const RatingChart = ({ratings}) => {

//   return (
//     <div className="chart">
//       {ratings.map((count, index) => (
//         <div key={index} className="bar">
//           <div className="bar-inner" style={{ height: `${count * 5}px` }}>  {count} </div>
//           <div className="label">{index + 1}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RatingChart;

import React from 'react';
import '../App.css';

const RatingChart = ({ ratings }) => {
  const maxRating = 50;

  return (
    <div className="chart-container">
      <div className="y-axis">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="y-label">
            {maxRating - index * 10}
          </div>
        ))}
      </div>
      <div className="chart">
        {ratings.map((count, index) => (
          <div key={index} className="bar">
            <div className="bar-inner" style={{ height: `${count * 3}px` }}> {count} </div>
            <div className="label">{index + 1}</div>
          </div>
        ))}
      </div>
    <div className='hr'></div>
    </div>
  );
};

export default RatingChart;

