import { useState } from "react";
import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";

function App() {
  const [friendsList, setFriendsList] = useState([]);

  const [friend, setFriend] = useState();

  const [flag, setFlag] = useState(false);

  const handleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="app">
      <h1>Eat'n'Split</h1>
      <div className="left-sec">
        <FriendsList
          friendsList={friendsList}
          setFriend={setFriend}
          friend={friend}
        />
        {flag && (
          <AddFriend
            friendsList={friendsList}
            setFriendsList={setFriendsList}
            setHandleFlag={handleFlag}
          />
        )}
        <button onClick={handleFlag}>{flag ? "Close" : "Add Friend"}</button>
      </div>
      <div className="right-sec">
        {friend && (
          <SplitBill
            friendsList={friendsList}
            setFriendsList={setFriendsList}
            friend={friend}
          />
        )}
      </div>
    </div>
  );
}

export default App;
