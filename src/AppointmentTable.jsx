import { useState } from "react";
import sortBy from "lodash.sortby";
import appointments from "./appointments.json";
import { Link, useLocation } from "react-router-dom";

export function AppointmentTable() {
  const location = useLocation();

  const [sortByTime, setSortByTime] = useState(false);

  function sortHandler(e) {
    e.preventDefault();
    setSortByTime(!sortByTime);
    const wrapper = document.getElementById("app");
    wrapper.setAttribute("tabIndex", "-1");
    setTimeout(() => {
      wrapper.focus();
    }, 0);
  }

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

  const orderedAppointments = sortBy(
    filteredAppointments,
    sortByTime ? "time" : "lastName"
  );

  return (
    <>
      <h2>Today's appointments</h2>

      <SearchSummary
        appointments={appointments}
        filteredAppointments={filteredAppointments}
        query={query}
      />

      <ResultSorting
        filteredAppointments={filteredAppointments}
        sortByTime={sortByTime}
        sortHandler={sortHandler}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Appointment time</th>
          </tr>
        </thead>
        <tbody>
          {orderedAppointments.map((item) => {
            return <Row key={item._id} {...item} />;
          })}
        </tbody>
      </table>
    </>
  );
}

function ResultSorting({ filteredAppointments, sortByTime, sortHandler }) {
  if (filteredAppointments.length < 2) return null;
  return (
    <p>
      Appointments are sorted by {sortByTime ? "appointment time" : "last name"}
      . You can also{" "}
      <a onClick={sortHandler} href="#">
        {sortByTime ? "sort by last name" : "sort by time"}
      </a>
      .
    </p>
  );
}

function SearchSummary({ appointments, filteredAppointments, query }) {
  if (appointments.length === filteredAppointments.length) {
    return null;
  }
  if (filteredAppointments.length === 0)
    return <p>No results found for "{query}"</p>;

  return (
    <p>
      Showing {filteredAppointments.length}{" "}
      {filteredAppointments.length > 1 ? "results" : "result"} for "{query}".
    </p>
  );
}

function Row({ _id, firstName, lastName, special, time }) {
  return (
    <tr>
      <td>
        <Link to={"/check-in/" + _id} title={special}>
          <b>{lastName}</b>, {firstName}
        </Link>
      </td>
      <td>{time}</td>
    </tr>
  );
}
