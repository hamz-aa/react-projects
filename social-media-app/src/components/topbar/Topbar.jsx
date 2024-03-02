import "./topbar.css";
import { Person, Search } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Social</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search />
          <input
            type="text"
            placeholder="Search for friend, pot or video"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
