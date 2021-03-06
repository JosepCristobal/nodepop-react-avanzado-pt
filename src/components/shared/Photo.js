import React from 'react';
import classNames from 'classnames';

import styles from './Photo.css';

const Photo = ({ className, ...props }) => (
  <img className={classNames(styles.photo, className)} alt="" {...props} />
);

export default Photo;
