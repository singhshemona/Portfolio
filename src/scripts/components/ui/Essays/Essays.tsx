// import React from 'react';
// import { Link } from 'react-router-dom';
// import essays from '../../../essays';
// import './Essays.scss';

// const Essays = () => {
//   return (
//     essays.map((essay, index) => (
//       <div key={index}>
//         <h3><Link to={essay.link}>{essay.title}</Link></h3>
//         {essay.date}
//         <p>{essay.content.substring(0, 50)}</p> 
//       </div>
//     ))
//   );
// }

// export default Essays;




import React from 'react';
import { Link } from 'react-router-dom';
import essays from '../../../essays';
// import './Home.scss';

export const Essays = () => {
  return (
    <div>
      <div className="skeleton">
        {
          essays.map((essay, index) => (
            <div key={index}>
              <h3><Link to={essay.link}>{essay.title}</Link></h3>
              {essay.date}
              <p>{essay.content.substring(0, 50)}</p> 
            </div>
          ))
        } 
      </div>
    </div>
  );
}

export default Essays