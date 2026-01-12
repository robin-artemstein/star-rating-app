// src/StarRates.tsx
import React from 'react';
import { MdStar } from "react-icons/md";

// Define props interface
interface StarRatesProps {
  starRateNumber: number;  // Expected to be 1~5
}

// Functional component
const StarRates: React.FC<StarRatesProps> = ({ starRateNumber }) => {
  // Create array for 5 stars (1 to 5)
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex flex-row justify-center space-x-1">
      {stars.map((star) => {
        // Decide colour using if/else
        let starColorClass = 'text-gray-300'; // default colour

        if (star <= starRateNumber) {
          starColorClass = 'text-yellow-500';
        }
        // else → remains gray (already set as default)

        return (
          <MdStar
            key={star}
            className={starColorClass}
            size={23}
          />
        );
      })}
    </div>
  );
};

export default StarRates;
