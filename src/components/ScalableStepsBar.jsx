import React from "react";

// --- SEGMENTED PROGRESS BAR COMPONENT ---
const ScalableStepsBar = ({ stepsStatus, activeColor = '', inactiveColor = '' }) => {
  return (
       <div className="w-full flex items-center gap-2">
      <div className="flex-1 flex gap-[2px]">
        {stepsStatus.map((isActive, index) => (
          <div
            key={index}
            className="flex-1 h-[6px] step-segment"
            style={{
              backgroundColor: isActive ? activeColor : inactiveColor,
            }}
          />
        ))}
      </div>
      <div className=" text-xl font-bold text-[#5e17eb]">
      {stepsStatus.filter(Boolean).length}<span className="comp-change text-[#9b88c2]">/{stepsStatus.length} </span > 
      </div>
    </div>
  );
};
export default ScalableStepsBar;
