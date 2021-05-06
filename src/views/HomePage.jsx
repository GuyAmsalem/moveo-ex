import { Link } from "react-router-dom";

export function HomePage(props) {
  return (
    <div className="home-page center-flex">
      <h1 className="title">Welcome to my exercise for Moveo!</h1>
      <Link className="btn save-btn" to="/main-app">
        To the app
      </Link>
    </div>
  );
}
