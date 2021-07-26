// import React from 'react';
// import "./button.css"

// const Button = ({ className, children, disabled, onclick }) => {
//    return ( <div>
//       <button 
//         onclick={ onclick }
//         className={ `button-text ${ className }` }
//         disabled={ disabled }
//     >
//         { children  }
//       </button>
//     </div>
//     )
// }

// export default Button;

import React from 'react';
import './button.css';
const Button = ({ onClick, children, disable, className }) => {
  const colorType = {
      Normal: 'normalColor',
      Fire: 'fireColor',
      Poison: 'poisonColor',
      Dragon: 'dragonColor',
      Psychic: 'psychicColor',
      Bug: 'bugColor',
      Electric: 'electricColor'
  }
    return (
    <div>
      <button onClick={onClick} disable={disable} className={`${className}  ${colorType[children]}`}>
        {children}
      </button>
    </div>
  );
};
export default Button;