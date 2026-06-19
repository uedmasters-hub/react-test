import "./SectionHeader.css";

function SectionHeader({
  badge,
  title,
  subtitle,
  actionText,
  onAction,
  center = false,
}) {
  return (
    <div className={`section-header ${center ? "center" : ""}`}>
      <div className="section-header-content">
        {badge && <span className="section-badge">{badge}</span>}

        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}
      </div>

      {actionText && (
        <button
          className="section-action-btn"
          onClick={onAction}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export default SectionHeader;