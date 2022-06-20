import { useLocation } from "react-router-dom";
export function SearchPanel() {
  const location = useLocation();

  return (
    <>
      <form>
        <div className="nhsuk-form-group">
          <h1 className="nhsuk-label-wrapper">
            <label className="nhsuk-label nhsuk-label--l" htmlFor="search">
              Search by name or booking reference
            </label>
          </h1>
          <input
            className="nhsuk-input nhsuk-input--width-10"
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
      <hr />
    </>
  );
}
