import React from 'react';

const Rating = props => {
  const black = Math.round(props.children);
  const white = 5 - black;
  const rating = [];
  for (let i = 0; i < black; i++) {
    rating.push('★');
  }
  for (let i = 0; i < white; i++) {
    rating.push('☆');
  }
  return (
    <div className="rate">
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
