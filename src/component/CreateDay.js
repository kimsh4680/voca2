import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const day = useFetch(`http://localhost:3001/days`);

  const [delday, setDelday] = useState(day);

  const his = useHistory();

  const dayRef = useRef(null);
  function onc() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        day: day.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`${day.length + 1} DAY 추가 되었습니다.`);
        his.push(`/`);
      }
    });
  }

  function del() {
    if (window.confirm(`${dayRef.current.value} day 삭제 하시겠습니까?`)) {
      fetch(`http://localhost:3001/days/${dayRef.current.value}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setDelday({ id: 0 });
          his.push("/");
        }
      });
    }
  }

  if (delday.id === 0) {
    console.log("내가 만든 삭제 day");
    return null;
  }

  return (
    <>
      <h2>현재 {day.length}일수</h2>
      <button onClick={onc}>{day.length + 1} DAY 추가</button>

      <h2>삭제할 일수</h2>
      <div>
        <select ref={dayRef}>
          {day.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}
        </select>
      </div>
      <button onClick={del} className="btn_del">
        DAY 삭제
      </button>
    </>
  );
}
