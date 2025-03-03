import React from 'react';

const Card = ({ color, value, label, href }) => {
  return (
    <div
      className={`${color} text-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform`}
    >
      <a href={href} className="block">
        <h2 className="text-4xl font-bold mb-2">{value}</h2>
        <p className="text-lg">{label}</p>
      </a>
    </div>
  );
};

export default Card;
