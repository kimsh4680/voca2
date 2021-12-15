import { useRef } from "react";
import { useHistory } from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const day = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    // console.log(engRef.current.value);
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`${korRef.current.value} 생성 완료.`);
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="영어 단어 적기" ref={engRef} />
      </div>
      <div>
        <input type="text" placeholder="한글 뜻" ref={korRef} />
      </div>
      <div>
        <label>Day</label>
        <select ref={dayRef}>
          {day.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
