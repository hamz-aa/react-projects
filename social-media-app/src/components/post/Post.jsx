import { MoreVert } from "@mui/icons-material";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="assets/person/1.jpeg"
              className="post-profile-img"
              alt=""
            />
            <span className="post-username">Hamza Ahmed</span>
            <span className="post-date">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Hey! Its my first post:)</span>
          <img src="assets/post/1.jpeg" className="post-img" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="assets/like.png" className="like-icon" alt="" />
            <img src="assets/heart.png" className="like-icon" alt="" />
            <span className="post-like-counter">32 people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
