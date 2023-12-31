import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [item, setItem] = useState([
    [1, 4, 5, 3, 4],
    [6, 3, 9, 4],
    [1, 4],
    [6, 9, 4],
  ]);

  const handlethings = (e) => {
    e.preventDefault();
    let minsum;
    let sum = Infinity;
    for (let i = 0; i < item.length; i++) {
      const sumindividual = item[i].reduce((acc, crr) => acc + crr, 0);
      console.log(sumindividual);
      if (sumindividual < sum) {
        sum = sumindividual;
        minsum = i;
      }
    }
    setItem((prevItem) =>
      prevItem.map((line, index) => {
        if (index === minsum) {
          return [...line, data];
        } else {
          return line;
        }
      })
    );
  };
  useEffect(() => {
    const inteerval = setInterval(() => {
      setItem((prevItem) => {
        return prevItem.map((line) => {
          return [line[0] - 1, ...line.slice(1)].filter((item) => item >= 0);
        });
      });
    }, 1000 / 2);
    return () => clearInterval(inteerval);
  }, []);
  return (
    <>
      <div>
        <form action="">
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit" onClick={handlethings}>
            submit
          </button>
          <div className="flex    gap-x-12">
            {item.map((person, index) => (
              <div className="  flex  flex-col gap-12 p" key={index}>
                <div className="flex flex-col ">
                  {person.map((persons, index) => (
                    <div key={index} className="">
                      {persons}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
