export function ResultSorting({
  filteredAppointments,
  sortByTime,
  sortHandler,
}) {
  if (filteredAppointments.length < 2) return null;
  return (
    <p>
      Appointments are sorted by {sortByTime ? "appointment time" : "last name"}
      . You can also{" "}
      <a onClick={sortHandler} href="#">
        {sortByTime ? "sort by last name" : "sort by appointment time"}
      </a>
      .
    </p>
  );
}
