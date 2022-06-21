import { useState } from "react";
import sortBy from "lodash.sortby";
import appointments from "../assets/appointments.json";
import { Link, useLocation } from "react-router-dom";
import { ResultSorting } from "./ResultSorting";
import { SearchSummary } from "./SearchSummary";

export function AppointmentTable({ children }) {
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
      <ResultSorting
        filteredAppointments={filteredAppointments}
        sortByTime={sortByTime}
        sortHandler={sortHandler}
      />

      {children}

      {/* <p>
        <a href="#">A</a> B <a href="#">C</a> <a href="#">D</a> E
      </p> */}

      <SearchSummary
        appointments={appointments}
        filteredAppointments={filteredAppointments}
        query={query}
      />

      {filteredAppointments && filteredAppointments.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Appointment time</th>
            </tr>
          </thead>
          <tbody>
            {orderedAppointments.map((item) => {
              return <TableRow key={item._id} {...item} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

function TableRow({ _id, firstName, lastName, special, time }) {
  return (
    <tr>
      <td>
        <Link to={"/check-in/" + _id} title={"Variant: " + special}>
          <b>{lastName}</b>, {firstName}
        </Link>
      </td>
      <td>{time}</td>
    </tr>
  );
}
