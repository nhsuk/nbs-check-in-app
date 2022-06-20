import sortBy from "lodash.sortby";
import appointments from "./appointments.json";
import { Link, useLocation } from "react-router-dom";

export function AppointmentList() {
  const location = useLocation();

  let query = "";
  if (location.search.length > 0) {
    query = location?.search?.split("?")[1].split("=")[1];
  }

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      String(appointment.lastName)
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      String(appointment.firstName)
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      String(appointment.bookingReference)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  });

  return (
    <>
      <h2>Today's appointments</h2>

      <SearchSummary
        appointments={appointments}
        filteredAppointments={filteredAppointments}
        query={query}
      />

      <ul className="nhsuk-list">
        {sortBy(filteredAppointments, ["lastName"]).map((item) => {
          return <Row key={item._id} {...item} />;
        })}
      </ul>
    </>
  );
}

function SearchSummary({ appointments, filteredAppointments, query }) {
  if (appointments.length === filteredAppointments.length) {
    return null;
  }
  if (filteredAppointments.length === 0) return <p>No results found</p>;

  return (
    <p>
      Showing {filteredAppointments.length}{" "}
      {filteredAppointments.length > 1 ? "results" : "result"} for "{query}"
    </p>
  );
}

function Row({ _id, firstName, lastName, special }) {
  return (
    <li className="nhsuk-u-margin-bottom-6">
      <Link to={"/check-in/" + _id} title={special}>
        <b>{lastName}</b>, {firstName}
      </Link>
    </li>
  );
}
