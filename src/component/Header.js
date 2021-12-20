import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <h1>토익 영단어(고급)</h1>
      </Link>
      <div className="menu">
        <Link
          to="/page"
          className="link"
          style={{ color: "black", textDecoration: "none" }}
        >
          게시판
        </Link>
        <Link
          to="/create_word"
          className="link"
          style={{ color: "black", textDecoration: "none" }}
        >
          단어 추가
        </Link>
        <Link
          to="/create_day"
          className="link"
          style={{ color: "black", textDecoration: "none" }}
        >
          Day 추가 / 삭제
        </Link>
      </div>
    </div>
  );
}
