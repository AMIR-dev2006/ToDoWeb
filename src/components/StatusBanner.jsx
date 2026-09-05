const StatusBanner = ({ apiError, isVisible, isExiting }) => {
  let content = null;

  if (apiError) {
    content = (
      <label className="flex justify-center server-down">
        failed to load tasks
      </label>
    );
  } else if (isVisible) {
    content = (
      <label className={`flex justify-center server-works collapse-in ${isExiting ? "collapse-out" : ""}`}>
        local mode
      </label>
    );
  }

  return <div className="status-anchor">{content}</div>;
};

export default StatusBanner;
