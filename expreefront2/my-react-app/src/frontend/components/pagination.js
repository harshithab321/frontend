import React from 'react';

const Pagination = ({ postsPerPage, totalPosts ,paginate,currentPage}) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    PageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination   ml-auto" style={{marginLeft:"1300px"}}>
        
        {PageNumbers.map((number) => (
          <li   onClick={(e) => { e.preventDefault()}} key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>            <a   onClick={()=>paginate(number)}   href={`Accessories?page=${number}`} className='page-link'>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
