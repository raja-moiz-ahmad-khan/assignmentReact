
import React from "react";


export default function Pagination( {totalPages, handlePagination} ){
  const totalpagesArray = [];
  for (let i = 0; i < totalPages; i++) {
    totalpagesArray[i] = i + 1;
  }
return (
    
      <div>
        {totalpagesArray.map((value, index) => {
          return (
            <button key={index} onClick={() => handlePagination(value)}>
              {value}
            </button>
          );
        })}
      </div>
    
  );
}
