import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>John Carter</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
