import { useState } from "react";
import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";

function App() {
  const [friendsList, setFriendsList] = useState([
    {
      name: "Hamza",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
      bill: 0,
    },
    {
      name: "Hamza",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
      bill: 0,
    },
  ]);

  return (
    <div className="app">
      <div className="left-sec">
        <FriendsList friendsList={friendsList} />
        <AddFriend setFriendsList={setFriendsList} />
      </div>
      <div className="right-sec">
        <SplitBill />
      </div>
    </div>
  );
}

export default App;
