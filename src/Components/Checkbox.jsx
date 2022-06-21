export function Checkbox({ unique, label }) {
  return (
    <div className="nhsuk-checkboxes__item">
      <input
        className="nhsuk-checkboxes__input"
        id={unique}
        name="example"
        type="checkbox"
        value="phone"
      />
      <label
        className="nhsuk-label nhsuk-checkboxes__label"
        htmlFor="example-2"
      >
        {label}
      </label>
    </div>
  );
}
