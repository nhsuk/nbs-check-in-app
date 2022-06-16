import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <h1 className="nhsuk-heading-l focusable-header" tabIndex="-1">
                Get ready to list
              </h1>
            </div>
          </div>
        </main>
      </div>
      <Router>
        <h1>Hello</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route path="/users">
            <p>users</p>
          </Route>
          <Route path="/">
            <p>home</p>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
