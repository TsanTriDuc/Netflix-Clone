import { Link } from "react-router-dom";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import "./index.scss";
import { useState } from "react";

function Header() {
  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/home">
          <img
            src="https://seekvectors.com/files/download/Netflix-Logo-19.png"
            alt="logo"
            width={80}
          />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movies Management</Link>
          </li>
          <li
            onClick={() => {
              setIsShowSearch(true);
            }}
          >
            <SearchOutlined />
          </li>
        </ul>
      </nav>
      <div className={`header__search ${isShowSearch ? "active" : ""}`}>
        <input type="text" placeholder="Search moive what you want..." />
        <CloseOutlined
          onClick={() => {
            setIsShowSearch(false);
          }}
        />
      </div>
    </header>
  );
}

export default Header;
