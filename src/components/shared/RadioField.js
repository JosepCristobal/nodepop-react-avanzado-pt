import React from 'react';
import classNames from 'classnames';

import './RadioField.css';

function RadioField({ className, label, ...props }) {
  const inputRef = React.useRef(null);

  return (
    <div
      className={classNames(
        'radioField',
        { 'radioField--focused': false },
        className
      )}
    >
      <label className="radioField-label">
        <span>{label}</span>
        <input
          ref={inputRef}
          className="radioField-input"
          {...props}
        />
      </label>
    </div>
  );
}

export default RadioField;