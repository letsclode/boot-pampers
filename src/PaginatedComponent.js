import { useState } from "react";


const ITEMS_PER_PAGE = 10; // Number of items to display per page

const PaginatedComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the data length and items per page
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Calculate the starting and ending indexes for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the data to display on the current page
  const currentData = data.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Display the data for the current page */}
      {currentData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Pagination controls */}
      <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedComponent;
