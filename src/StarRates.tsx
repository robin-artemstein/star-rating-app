// Import React for building the component
import React from 'react';
// Import star icons from React Icons (FaStar is a solid star icon)
import { FaStar } from 'react-icons/fa';

// Define the TypeScript interface for the component's props
// In layman's terms: This tells TypeScript what props the component expects (starRateNumber as a number)
interface StarRatesProps {
  starRateNumber: number;  // Should be between 1 and 5
}

// Define the StarRates component as a functional component with props
const StarRates: React.FC<StarRatesProps> = ({ starRateNumber }) => {
  // Create an array of 5 elements to represent the 5 stars
  // In layman's terms: We're making a list of 5 stars, and for each, decide if it's yellow or gray
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    // Use flex-row for horizontal layout with Tailwind
    // In layman's terms: This div lines up the stars side by side with a bit of space between them
    <div className="flex flex-row space-x-1">
      {stars.map((star) => (
        // For each star, render the FaStar icon
        // Color it yellow if the star's position <= starRateNumber, else gray
        // In layman's terms: If this star's number is within the rating, make it yellow; otherwise, gray
        <FaStar
          key={star}  // Unique key for React's list rendering
          className={star <= starRateNumber ? 'text-yellow-500' : 'text-gray-300'}  // Tailwind classes for colors
          size={24}  // Size of the icon (adjust as needed)
        />
      ))}
    </div>
  );
};

// Export the component so it can be imported in App.tsx
export default StarRates;