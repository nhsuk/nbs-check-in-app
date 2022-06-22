export function WarningCallout({ title, body }) {
  return (
    <div className="nhsuk-warning-callout">
      <h3 className="nhsuk-warning-callout__label">
        <span role="text">
          <span className="nhsuk-u-visually-hidden">Important: </span>
          {title}
        </span>
      </h3>
      <p>{body}</p>
    </div>
  );
}
