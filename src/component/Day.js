import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import Pagingwords from "./Pagingwords";
import Word from "./Word";

export default function Day() {
  //   const day = 2;
  const a = useParams();
  const day = a.day;
  // 페이징 처리
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:3001/words?day=${day}`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [day]);

  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(a);
  //console.log(a.day);
  // const {day} = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  // console.log(wordList);

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  //const words = useFetch(`http://localhost:3001/words?day=${day}`);

  const his = useHistory();

  function onc1() {
    console.log(`${Number(day) - 1}`);

    his.push(`/day/${Number(day) - 1}`);
  }

  function onc2() {
    his.push(`/day/${Number(day) + 1}`);
  }

  if (posts.length === 0) {
    return <h2>로딩중...</h2>;
  }

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <>
      <p style={{ display: "flex" }}>
        <button onClick={onc1}>{Number(day) - 1} Day</button>
        <h2>DAY {day}</h2>
        <button onClick={onc2}> {Number(day) + 1} Day</button>
      </p>

      <table>
        <tbody>
          {currentPosts.map((post) => (
            <Word word={post} key={post.id} />
          ))}
        </tbody>
        <Pagingwords
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </table>
    </>
  );
}
