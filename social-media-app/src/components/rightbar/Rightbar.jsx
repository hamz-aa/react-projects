import "./rightbar.css";

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
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbar-profile-img"
              />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Alice Borderland</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
