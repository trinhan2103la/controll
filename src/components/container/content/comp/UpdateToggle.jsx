/* eslint-disable react/prop-types */

const UpdateToggle = ({ isUpdating, onStart, onStop }) => {
  return (
    <div>
      {isUpdating ? (
        <button className="bg-navy text-light " onClick={onStop}>
          Stop Updates
        </button>
      ) : (
        <button className="bg-navy text-light " onClick={onStart}>
          Start Updates
        </button>
      )}
    </div>
  );
};

export default UpdateToggle;
