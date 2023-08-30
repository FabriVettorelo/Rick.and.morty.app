import React from 'react';

export default function Pagination({ charactersPerPage, totalCharacters, currentPage, paginate }) {
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);

  return (
    <nav style={{display:"flex",alignItems:"center"}}>
      <button
        style={{  backgroundColor:"purple",color:"white",border:"none", padding:"5px 10px",cursor:"pointer",marginRight:"10px"}}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <p style={{marginRight:"10px",color:"white"}}>
        Page {currentPage} / {totalPages}
      </p>
      <button
        style={{  backgroundColor:"purple",color:"white",border:"none", padding:"5px 10px",cursor:"pointer",marginRight:"10px"}}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}