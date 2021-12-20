import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Posts from "./Post";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./Pagination";

export default function Pagetest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // function paginate(pageNumber) {
  //   setcurrentPage(pageNumber);
  // }

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">페이징 test</h2>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
