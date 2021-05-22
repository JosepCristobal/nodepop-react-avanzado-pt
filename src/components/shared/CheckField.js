import React from 'react';

import './CheckField.css';

function CheckField({className, label, ...props }){
    return (
        <div>
          <h3>Quiere conservar la validación</h3>
          <label>
            {label}
          <input 
            className = {className}
            {...props}
          />
        </label>
        </div>
      );

}

export default CheckField;