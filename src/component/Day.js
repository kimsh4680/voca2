import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  //   const day = 2;
  const a = useParams();
  const day = a.day;
  console.log(a);
  console.log(a.day);
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

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  const his = useHistory();

  function onc1() {
    his.push(`/day/${day - 1}`);
  }
  function onc2() {
    his.push(`/day/${Number(day) + 1}`);
  }

  if (words.length === 0) {
    return <h2>로딩중...</h2>;
  }

  return (
    <>
      <p style={{ display: "flex" }}>
        <button onClick={onc1}> {Number(day) - 1} Day</button>
        <h2>DAY {day}</h2>
        <button onClick={onc2}> {Number(day) + 1} Day</button>
      </p>

      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
