export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  // 뭐가 다른거지?  ()=>{}
  //   function onc_paging() {
  //     paginate(number);
  //   }

  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  paginate(number);
                }}
                // href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
