// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types'; // Step 1: Import PropTypes

const SkillsLevel = ({ skillName, percentage }) => {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex justify-between items-end">
        <p className="font-bold text-xl">{skillName}</p>
        <p className="text-sm">{percentage}</p>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full">
        <div
          style={{ width: `${percentage}` }}
          className="h-2 bg-primary rounded-full"
        ></div>
      </div>
    </div>
  );
};

// Step 2: Define PropTypes
SkillsLevel.propTypes = {
  skillName: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillsLevel;