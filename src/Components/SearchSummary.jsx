export function SearchSummary({ appointments, filteredAppointments, query }) {
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
