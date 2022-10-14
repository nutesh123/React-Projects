import React from 'react';

import classes from './Movie.module.css';

const Movie = (prop) => {
  return (
    <li className={classes.movie}>
      <h2>{prop.title}</h2>
      <h3>{prop.releaseDate}</h3>
      <p>{prop.openingText}</p>
    </li>
  );
};

export default Movie;
