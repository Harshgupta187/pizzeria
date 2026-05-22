import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center py-5">
      <h1 style={{ fontSize: "5rem", color: "#ffc107" }}>404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-warning px-5">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;