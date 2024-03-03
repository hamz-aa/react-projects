import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="/assets/person/1.jpeg"
            className="share-profile-img"
            alt=""
          />
          <input
            type="text"
            className="share-input"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-option">
            <span className="share-option-text">Photo or Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
