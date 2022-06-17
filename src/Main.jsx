import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const data = [
  {
    time: "01:08",
    firstname: "Pearline",
    lastname: "Margret",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "05:08",
    firstname: "Charlena",
    lastname: "Meter",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "09:05",
    firstname: "Jerry",
    lastname: "Ahab",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "02:10",
    firstname: "Beth",
    lastname: "McClimans",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "10:07",
    firstname: "Ileana",
    lastname: "Rugen",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "08:12",
    firstname: "Jeanna",
    lastname: "Stoller",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "04:12",
    firstname: "Sherrie",
    lastname: "Gabrielli",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "12:09",
    firstname: "Tera",
    lastname: "Tybald",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "10:05",
    firstname: "Lonnie",
    lastname: "Ranjiv",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "12:09",
    firstname: "Devina",
    lastname: "Selway",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "06:06",
    firstname: "Modestia",
    lastname: "Phaidra",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
  {
    time: "02:10",
    firstname: "Tera",
    lastname: "Jagir",
    bookingReference: "ABF3235234",
    nhsNumber: "4859375849",
  },
];

export function Main() {
  return (
    <>
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <Router>
                <Switch>
                  <Route path="/checked-in">
                    <CheckedIn />
                  </Route>
                  <Route path="/check-in">
                    <>
                      <h1>Select the person you want to check in</h1>
                      <CheckIn />
                    </>
                  </Route>
                  <Route path="/">
                    <h1>Select the person you want to check in</h1>
                    <div class="nhsuk-form-group">
                      <label class="nhsuk-label" for="example">
                        Search by name or booking reference
                      </label>
                      <input
                        class="nhsuk-input nhsuk-u-width-three-quarters"
                        id="example"
                        name="example"
                        type="text"
                      />
                      <br />
                      <br />
                      <button className="nhsuk-button">Search</button>
                      <h2>Today's appointments</h2>
                      <hr />
                    </div>

                    {/* <p>Select the person you wish to check in</p> */}
                    <ul className="nhsuk-list">
                      {data.map((item) => (
                        <Row {...item} />
                      ))}
                    </ul>
                  </Route>
                </Switch>
              </Router>
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

function Row({ time, firstname, lastname, bookingReference, nhsNumber }) {
  return (
    <li className="nhsuk-u-margin-bottom-6">
      <Link to="/check-in">
        <b>{lastname}</b>, {firstname}
      </Link>
    </li>
  );
}

function CheckIn() {
  return (
    <>
      <dl class="nhsuk-summary-list">
        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">Name</dt>
          <dd class="nhsuk-summary-list__value">Melisent Natica</dd>
        </div>

        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">Time</dt>
          <dd class="nhsuk-summary-list__value">5:03</dd>
        </div>

        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">Booking reference</dt>
          <dd class="nhsuk-summary-list__value">AVFD585849</dd>
        </div>

        <div class="nhsuk-summary-list__row">
          <dt class="nhsuk-summary-list__key">NHS Number</dt>
          <dd class="nhsuk-summary-list__value">3446235432</dd>
        </div>
      </dl>
      <Link to="/checked-in" className="nhsuk-button">
        Check this person in
      </Link>
    </>
  );
}

function CheckedIn() {
  return (
    <>
      <h1>This person has been checked in</h1>
      <Link to="/" className="nhsuk-button">
        Back to start
      </Link>
    </>
  );
}
