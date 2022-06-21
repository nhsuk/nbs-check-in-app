import { Link } from "react-router-dom";

export function CheckedIn() {
  return (
    <>
      <h1>This person has been checked in</h1>
      <Link to="/" className="nhsuk-button">
        Back to start
      </Link>
    </>
  );
}
