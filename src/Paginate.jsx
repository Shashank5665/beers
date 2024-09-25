import React, { useState } from "react";

const Paginate = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "William Brown" },
    { id: 6, name: "Olivia Garcia" },
    { id: 7, name: "James Martinez" },
    { id: 8, name: "Sophia Rodriguez" },
    { id: 9, name: "Benjamin Wilson" },
    { id: 10, name: "Mia Anderson" },
    { id: 11, name: "Lucas Taylor" },
    { id: 12, name: "Amelia Thomas" },
    { id: 13, name: "Henry Moore" },
    { id: 14, name: "Evelyn Martin" },
    { id: 15, name: "Alexander Lee" },
    { id: 16, name: "Isabella White" },
    { id: 17, name: "Daniel Harris" },
    { id: 18, name: "Ava Clark" },
    { id: 19, name: "Matthew Lewis" },
    { id: 20, name: "Charlotte Walker" },
    { id: 21, name: "David Hall" },
    { id: 22, name: "Harper Young" },
    { id: 23, name: "Joseph King" },
    { id: 24, name: "Luna Wright" },
    { id: 25, name: "Samuel Scott" },
    { id: 26, name: "Ella Green" },
    { id: 27, name: "Andrew Adams" },
    { id: 28, name: "Grace Baker" },
    { id: 29, name: "Christopher Gonzalez" },
    { id: 30, name: "Lily Perez" },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 3; // Items to display per page

  // Calculate the index of the last and first item
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  // Get the current items for the page
  const currentItems = data.slice(firstIndex, lastIndex);

  // Handle page change
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </ul>

      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(data.length / 10)].map((_, i) => {
          return <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>;
        })}
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginate;
