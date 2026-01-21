// This is the StarRates component.
// It takes a prop called starRateNumber (a number from 1 to 5).
// It displays 5 star icons in a row.
// Based on the prop, it fills the leftmost stars with solid stars (<IoMdStar />) and the rest with outline stars (<IoIosStarOutline />).
// We use a loop with if-else to decide which icon to use for each star, as required (no ternary operators).

import StarPositive from "./StarPositive";
import StarNegative from "./StarNegative";

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
      stars.push(<div className="flex flex-row mx-0.5"><StarPositive/></div>);
    } else {
      // If not, add an outline star icon.
      stars.push(<div className="flex flex-row mx-0.5"><StarNegative/></div>);
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
