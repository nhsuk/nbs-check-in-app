import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const data = [
  {
    time: "05:03",
    name: "Melisent Natica",
  },
  {
    time: "02:04",
    name: "Vevay Gale",
  },
  {
    time: "05:02",
    name: "Tabbatha Francyne",
  },
  {
    time: "10:11",
    name: "Tina Christine",
  },
  {
    time: "01:03",
    name: "Jobi Shirberg",
  },
  {
    time: "09:11",
    name: "Berget Rona",
  },
  {
    time: "07:05",
    name: "Harrietta Callista",
  },
  {
    time: "06:12",
    name: "Sarette Brodench",
  },
  {
    time: "12:07",
    name: "Genevra Annice",
  },
  {
    time: "11:04",
    name: "Gerianna Arvo",
  },
  {
    time: "06:04",
    name: "Joy Eno",
  },
  {
    time: "07:07",
    name: "Viviene Sikorski",
  },
];

export function Main() {
  return (
    <>
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <h1>Today's appointments</h1>
              <table class="nhsuk-table">
                {/* <caption class="nhsuk-table__caption">
                  List of appointments for today
                </caption> */}
                <thead role="rowgroup" class="nhsuk-table__head">
                  <tr role="row">
                    <th role="columnheader" class="" scope="col">
                      Time
                    </th>
                    <th role="columnheader" class="" scope="col">
                      Name
                    </th>
                    <th role="columnheader" class="" scope="col">
                      Check in
                    </th>
                  </tr>
                </thead>
                <tbody class="nhsuk-table__body">
                  {data.map(({ name, time }) => (
                    <Row time={time} name={name} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      {/* <Router>
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

        <Route path="/about">
          <p>about</p>
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="/">
          <p>home</p>
        </Route>
      </Router> */}
    </>
  );
}

function Row({ time, name }) {
  return (
    <tr role="row" class="nhsuk-table__row">
      <td class="nhsuk-table__cell">{time}</td>
      <td class="nhsuk-table__cell">{name}</td>
      <td class="nhsuk-table__cell">
        <a href="#">Check in</a>
      </td>
    </tr>
  );
}
