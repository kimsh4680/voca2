import { useState } from "react";

export default function Word(props) {
  const [word, setWord] = useState(props.words);
  const [isShow, setisShow] = useState(false);
  const [isDone, setisDone] = useState(word.isDone);

  function toggleShow() {
    setisShow(!isShow);
  }

  function toggleDone() {
    // setisDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setisDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          {!isShow ? "뜻 보기" : "뜻 숨기기"}
        </button>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </td>
    </tr>
  );
}
