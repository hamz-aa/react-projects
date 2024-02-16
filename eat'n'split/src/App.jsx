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
      totalBill: 0,
      friendExpense: 0,
      myExpense: 0,
      isPayed: null,
    },
    {
      name: "Hamza",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
      totalBill: 0,
      friendExpense: 0,
      myExpense: 0,
      isPayed: null,
    },
  ]);

  const [friend, setFriend] = useState({
    name: "Hamza",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU",
    totalBill: 0,
    friendExpense: 0,
    myExpense: 0,
    isPayed: null,
  });

  return (
    <div className="app">
      <div className="left-sec">
        <FriendsList friendsList={friendsList} setFriend={setFriend} />
        <AddFriend setFriendsList={setFriendsList} />
        <button>Close</button>
      </div>
      <div className="right-sec">
        <SplitBill
          friendsList={friendsList}
          setFriendsList={setFriendsList}
          friend={friend}
        />
      </div>
    </div>
  );
}

export default App;
