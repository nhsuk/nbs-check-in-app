import React from "react";
import "./LocationIndicator.scss";

export function LocationIndicator({ locationName }) {
  return (
    <div className="location-indicator__container">
      <div className="nhsuk-width-container">
        <div className="location-indicator" aria-label="Location navigation">
          <div className="location-indicator__item">
            <span className="location-indicator__content">
              Current location: {locationName}
            </span>
          </div>
          <nav className="location-indicator__navigation">
            <ul className="location-indicator__nav-links">
              <li className="location-indicator__item">
                <a className="location-indicator__link" href="#">
                  Change location
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LocationIndicator;
