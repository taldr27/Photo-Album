import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExapanded] = useState(false);

  const handleClick = () => {
    setExapanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded" >
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
      </div>
      <div className="cursor-pointer" onClick={handleClick}>
        {expanded ? <GoChevronDown /> : <GoChevronLeft />}  
      </div>
      {
        expanded && <div className="p-2 border-t">{children}</div>
      }
    </div>
  );
}

export default ExpandablePanel;