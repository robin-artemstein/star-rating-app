// Import global CSS (not needed here since it's in main.tsx)
// Import the custom StarRates component
import StarRates from './StarRates.tsx'
// Import App-specific CSS if needed (optional)
import './App.css'

// Define the main App component
function App() {
  // This is just a demo state to hold the star rating number (1 to 5)
  // In a real app, this could come from props, API, or user input
  const starRateNumber = 2// Example: Set to 3 for demo

  return (
    // Use Tailwind classes for centering and layout
    <div className="flex flex-col justify-center w-full h-full bg-blue-100">
            
      {/* Heading with Tailwind styles */}
      <h1 className="text-4xl font-bold text-blue-700 mb-4">React star rating app</h1>
      
      {/* Use the StarRates component and pass the prop */}
      {/* In layman's terms: This shows the star rating based on the number we pass */}
      <div className="flex justify-center">
        <div><StarRates starRateNumber={starRateNumber} /></div>
      </div>
      
      {/* Optional counter demo from Vite (you can remove this) */}
      <div className="text-center mt-8">
        <p className="text-lg text-black">The rating score is {starRateNumber}.</p>
      </div>
    </div>
  )
}

// Export the App component so it can be used in main.tsx
export default App