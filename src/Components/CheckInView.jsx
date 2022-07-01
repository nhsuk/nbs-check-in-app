import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import appointments from "../assets/appointments.json";
import { WarningCallout } from "../DesignSystem/WarningCallout";
import { Checkbox } from "./Checkbox";
import { BackButton } from "./BackButton";

export function CheckInView() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const appointment = appointments.find((item) => item._id === id);
  const [checkbox, setCheckbox] = useState(false);

  function clickHandler() {
    setCheckbox(!checkbox);
  }

  const dob = new Date(appointment.dateOfBirth).toLocaleDateString("en-GB");

  return (
    <>
      <h1 onClick={clickHandler}>Confirm check-in</h1>
      <dl className="nhsuk-summary-list">
        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Name</dt>
          <dd className="nhsuk-summary-list__value">
            {appointment.firstName} {appointment.lastName}
          </dd>
        </div>
        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Date of birth</dt>
          <dd className="nhsuk-summary-list__value">{dob}</dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Appointment time</dt>
          <dd className="nhsuk-summary-list__value">{appointment.time}</dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Appointment type</dt>
          <dd className="nhsuk-summary-list__value">
            {appointment.appointmentType}
          </dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">Booking reference</dt>
          <dd className="nhsuk-summary-list__value">
            {appointment.bookingReference}
          </dd>
        </div>

        <div className="nhsuk-summary-list__row">
          <dt className="nhsuk-summary-list__key">NHS Number</dt>
          <dd className="nhsuk-summary-list__value">{appointment.nhsNumber}</dd>
        </div>
      </dl>

      <ThingsToCheck variant={appointment.special} checkbox={checkbox} />

      <Link to="/checked-in" className="nhsuk-button">
        Check this person in
      </Link>
      <BackButton />
    </>
  );
}
const ThingsToCheck = ({ variant, checkbox }) => {
  return (
    <>
      <form>
        {variant === "immunosupressed" && (
          <WarningCallout
            title="This person is immunosuppressed"
            body="The person you are checking in is immunosuppressed and should have their evidence ready if they have brought any with them."
          />
        )}
        {variant === "under-16-overseas" && (
          <WarningCallout
            title="There must be a parent or guardian at this appointment"
            body="The person you are checking in is under 16 and must be accompanied by a parent or responsible person who is 18 years old or over"
          />
        )}
        {variant === "hsc-worker" && (
          <WarningCallout
            title="This person is a health or social care worker"
            body="The person you are checking in must show you evidence that they are a health or social care worker in order to be checked in."
          />
        )}

        {checkbox && (
          <div className="nhsuk-form-group">
            <fieldset
              className="nhsuk-fieldset"
              aria-describedby="example-hint"
            >
              <legend className="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
                Checks for this person
              </legend>
              <div className="nhsuk-checkboxes">
                <Checkbox
                  unique="symptoms"
                  label="Does not currently have COVID symptoms"
                />
                <Checkbox
                  unique="id"
                  label="Their identity has been confirmed"
                />
                {variant === "under-16-overseas" && (
                  <Checkbox
                    unique="u16"
                    label="A parent or guardian is present"
                  />
                )}
                {variant === "hsc-worker" && (
                  <Checkbox
                    unique="hsc"
                    label="Has evidence to show they are a health or social care worker "
                  />
                )}
              </div>
            </fieldset>
          </div>
        )}

        {!checkbox && (
          <>
            <p>Please confirm that the person you are checking in:</p>
            <ul>
              <li>Does not currently have COVID symptoms</li>
              <li>Matches the details above</li>
              {variant === "under-16-overseas" && (
                <li>
                  Is accompanied by a guardian or responsible person who is 18
                  years old or over
                </li>
              )}
              {variant === "hsc-worker" && (
                <li>
                  Has evidence to show they are a health or social care worker
                </li>
              )}
            </ul>
          </>
        )}
      </form>
    </>
  );
};
