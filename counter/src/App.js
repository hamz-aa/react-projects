import { useState } from "react";
import "./App.css";
import { Count } from "./components/Count";
import { Steps } from "./components/Steps";
import { MyDate } from "./components/MyDate";

function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [steps, setSteps] = useState(1);
  const [date, setDate] = useState(dateHandler(0));

  function dateHandler(count) {
    let date = new Date();
    let change = count || 0;

    if (change < 0) {
      change = 0;
      count = 0;
    }

    let dayInMonth = date.getDate() + change;

    if (change + date.getDay() > 7) {
      change = (change + date.getDay() - 1) % 7;
    } else {
      change = change + (date.getDay() - 1);
    }

    if (change < 0) change = 0;

    let day = days[change];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let formattedDate;
    if (dayInMonth === date.getDate())
      formattedDate = `Today is ${day} ${month} ${dayInMonth} ${year}`;
    else
      formattedDate = `${count} days from today is ${day} ${month} ${dayInMonth} ${year}`;

    return formattedDate;
  }

  return (
    <div
      className="App"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Steps steps={steps} setSteps={setSteps} />
      <Count steps={steps} setDate={setDate} dateHandler={dateHandler} />
      <MyDate date={date} />
    </div>
  );
}

export default App;
