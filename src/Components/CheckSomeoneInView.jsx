import { AppointmentTable } from "./AppointmentTable";
import { SearchPanel } from "./SearchPanel";

export function CheckSomeoneInView() {
  return (
    <>
      <h1>Check someone in</h1>
      <AppointmentTable>
        <SearchPanel />
      </AppointmentTable>
    </>
  );
}
