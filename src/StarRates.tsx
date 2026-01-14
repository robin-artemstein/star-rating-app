// This is the StarRates component.
// It takes a prop called starRateNumber (a number from 1 to 5).
// It displays 5 star icons in a row.
// Based on the prop, it fills the leftmost stars with solid stars (<IoMdStar />) and the rest with outline stars (<IoIosStarOutline />).
// We use a loop with if-else to decide which icon to use for each star, as required (no ternary operators).

import { IoMdStar, IoIosStarOutline } from 'react-icons/io'; // Import the star icons from React Icons.

// Define the props interface for TypeScript type safety.
// starRateNumber should be a number between 1 and 5.
interface StarRatesProps {
  starRateNumber: number;
}

const StarRates: React.FC<StarRatesProps> = ({ starRateNumber }) => {
  // Create an empty array to hold the 5 star icons.
  const stars = [];

  // Loop from 1 to 5 to build each star.
  for (let i = 1; i <= 5; i++) {
    // Check if the current star position is less than or equal to the starRateNumber.
    if (i <= starRateNumber) {
      // If yes, add a filled star icon.
      stars.push(<IoMdStar key={i} className="text-yellow-500 w-6 h-6" />);
    } else {
      // If not, add an outline star icon.
      stars.push(<IoIosStarOutline key={i} className="text-yellow-500 w-6 h-6" />);
    }
  }

  return (
    // Display the stars in a horizontal row using Tailwind's flex-row.
    <div className="flex flex-row justify-center">
      {stars}
    </div>
  );
};

export default StarRates;
