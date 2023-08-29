export default function Pagination({ charactersPerPage, totalCharacters, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <a
            key={number}
            style={{
              color: currentPage === number ? 'red' : 'cyan',
              fontWeight: currentPage === number ? 'bold' : 'normal',
              margin: '0.5vw',
              fontSize: '2vh',
              fontWeight:"bold"
            }}
            onClick={() => paginate(number)}
            href="javascript:void(0);"
            className="page-link"
          >
            {number}
          </a>
        ))}
      </ul>
    </nav>
  );
}