import React, { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import appointments from "../assets/appointments.json";
import { SearchPanel } from "./SearchPanel";
import { AppointmentTable } from "./AppointmentTable";
import { WarningBox } from "./WarningBox";
import { Checkbox } from "./Checkbox";
import { CheckedIn } from "./CheckedIn";
import { CheckSomeoneInView } from "./CheckSomeoneInView";
import { CheckInView } from "./CheckInView";

export function Main() {
  return (
    <>
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <Switch>
                <Route path="/checked-in" component={CheckedIn} />
                <Route path="/check-in" component={CheckInView} />
                <Route path="/" component={CheckSomeoneInView} />
              </Switch>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
