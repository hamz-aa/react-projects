import "./sidebar.css";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircleFilledOutlined className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline className="sidebar-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-img"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebar-friend-name">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
