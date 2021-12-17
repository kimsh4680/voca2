import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>토익 영단어(고급)</h1>
      </Link>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/create_day" className="link">
          Day 추가 / 삭제
        </Link>
      </div>
    </div>
  );
}
