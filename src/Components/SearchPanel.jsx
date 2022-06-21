import { useLocation } from "react-router-dom";
export function SearchPanel() {
  const location = useLocation();

  return (
    <>
      <form>
        <div className="nhsuk-form-group">
          <h3 className="nhsuk-label-wrapper">
            <label className="nhsuk-label" htmlFor="search">
              Search by name or booking reference
            </label>
          </h3>
          <input
            className="nhsuk-input nhsuk-input--width-20"
            id="search"
            name="search"
            type="text"
            defaultValue={location.search.split("=")[1]}
          />
        </div>
        <button className="nhsuk-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
