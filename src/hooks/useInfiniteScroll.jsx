// useInfiniteScroll.jsx

import { useEffect, useState } from "react";

// Custom hook for infinite scrolling
const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to near the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isFetching
      ) {
        setIsFetching(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;
    // Execute the callback when fetching is triggered
    callback();
  }, [isFetching, callback]);

  // Return the fetching state and the function to update it
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
