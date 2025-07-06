import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import jsonData from './data.json';

const initialColumns = [
  "#", "Job Request", "Submitted", "Status", "Submitter", "URL", "Assigned", "Priority", "Due Date", "Est. Value",""
];

const mapJsonToRows = (data) => {
  const mappedData = data.slice(0, 11).map(obj => initialColumns.slice(0, 11).map(col => obj[col] || ""));
  // Pad with empty rows if less than 10
  while (mappedData.length < 25) {
    mappedData.push(Array(initialColumns.length).fill(""));
  }
  return mappedData;
};

const AirtableLikeSheet = () => {
    const [columns] = useState(initialColumns.slice(0, 11));
  const [data, setData] = useState(mapJsonToRows(jsonData));
  const cellRefs = useRef([]);

  useEffect(() => {
      
    const colWidths = columns.map((col, colIndex) => {  // Calculate width for header and padding
      let headerWidth = (col.length * 7.5) + 32; // Adjusted: 7.5px per char + px-4 (32px) for header

      let maxWidthForColumn = Math.max(50, headerWidth); // Ensure a base minimum width of 50px

      for (let row of data) {
        const content = row[colIndex] || '';
        const dataCellWidth = (content.toString().length * 7.5) + 24; // Adjusted: 7.5px per char + px-3 (24px) for data cells
        maxWidthForColumn = Math.max(maxWidthForColumn, dataCellWidth);
      }
      return maxWidthForColumn;
    });
    cellRefs.current.forEach((rowRef, rowIndex) => {
      if (rowRef) {
        rowRef.forEach((cellRef, colIndex) => {
          if (cellRef) {
            cellRef.style.minWidth = `${colWidths[colIndex]}px`;
          }
        });
      }
    });
  }, [data, columns]);

  const handleChange = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  const addRow = () => {
    if (data.length >= 100) return;
    const emptyRow = Array(columns.length).fill("");
    setData(prev => [...prev, emptyRow]);
  };

  return (
    <div className="text-sm font-normal">
      <div className="overflow-x-auto border rounded shadow  ">
      <table className="border-collapse border-gray-400 mt-0 ">
          <thead>
            <tr >
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`border px-3 py-2 text-left font-semibold text-sm sticky top-0 z-10 ${col === "Assigned" ? "bg-[#d2e0d4]" :
                     col === "Priority" ? "bg-[#dccffc]": col === "Due Date" ? "bg-[#dccffc]"  : col === "Est. Value" ? "bg-[#fac2af]" : "bg-gray-200"}`}
                >
                  {(() => {
                    switch (col) {
                      case "Job Request":
                        return (
                          <div className="flex items-center gap-2">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/briefcase.svg" alt="Briefcase" className="w-4 h-4" />
                            Job Request <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" />
                          </div>
                        );
                      case "Submitted":
                        return (
                          <div className="flex items-center gap-2">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/calendar.svg" alt="Calendar" className="w-4 h-4" />
                            Submitted <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" className='mr-4' />
                          </div>
                        );
                      case "Status":
                        return (
                          <div className="flex items-center gap-2 mr-1">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-circle.svg" alt="Status" className="w-4 h-4" />
                            Status <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" />
                          </div>
                        );
                      case "Submitter":
                        return (
                          <div className="flex items-center gap-2">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/person.svg" alt="Person" className="w-4 h-4" />
                            Submitter <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" />
                          </div>
                        );
                      case "URL":
                        return (
                          <div className="flex items-center gap-2 ">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/globe.svg" alt="Globe" className="w-4 h-4" />
                            URL <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" />
                          </div>
                        );
                      case "Assigned":
                        return (
                          <div className="flex items-center gap-2">
                            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/emoji.svg" alt="Emoji" className="w-4 h-4" />
                            Assigned <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg" alt="" />
                          </div>
                        );
                      default:
                        return col;
                    }
                  })()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                  key={colIndex}
                  className={`border px-2 py-1 h-10 ${columns[colIndex] === "Status"
                    ? cell === "In-progress"
                      ? "bg-[#fff3d6] rounded-full bg-clip-content"
                      : cell === "Need to start"
                        ? "bg-[#dce4ef] rounded-full bg-clip-content"
                        : cell === "Complete"
                          ? "bg-[#d2f2e2] rounded-full bg-clip-content"
                          : cell === "Blocked"
                            ? "bg-[#ffe1dd] rounded-full bg-clip-content"
                            : ""
                        : columns[colIndex] === "URL"
                          ? "underline"
                          : columns[colIndex] === "Priority"
                            ? cell === "Medium"
                              ? "text-[#dfb83d] font-medium border-black"
                              : cell === "High"
                                ? "text-[#f26243] font-medium border-black"
                                : cell === "Low"
                                  ? "text-[#338cff] font-medium border-black"
                                  : ""
                            : ""
                    }`}
                    ref={el => {
                      if (!cellRefs.current[rowIndex]) cellRefs.current[rowIndex] = [];
                      cellRefs.current[rowIndex][colIndex] = el;
                    }}
                  >
                    {colIndex === 0 ? (
                      <div className="w-full px-2 py-1 bg-transparent text-black">
                        {rowIndex + 1}
                      </div>
                    ) : columns[colIndex] === "URL" ? (
                      <a href={cell} target="_blank" rel="noopener noreferrer" className="w-full px-2 py-1 outline-none bg-transparent text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        {cell}
                      </a>
                    ) : (
                      <input
                        value={cell}
                        onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                        className="w-full px-2 py-1 outline-none bg-transparent"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-row p-4 bg-gray-100 items-center shadow-md'>
        <ul className='flex flex-row gap-4 justify-center items-center'>
        <div className="w-30 text-center">
  <button className="w-full py-2  font-semibold text-black bg-[#55a86a] relative hover:border-t-4 hover:border-[#3f5d46] hover:bg-[#e8f0ea]  hover: ease-in transition-all duration-200 cursor-pointer">
    All Orders
  </button>
</div>

<div className="w-30 text-center">
  <button className="w-full py-2 font-semibold text-black bg-[#55a86a] relative hover:border-t-4 hover:border-[#3f5d46] hover:bg-[#e8f0ea] hover: ease-in transition-all duration-200 cursor-pointer">
    Pending
  </button>
</div>
<div className="w-30 text-center">
  <button className="w-full py-2 font-semibold text-black bg-[#55a86a] relative hover:border-t-4 hover:border-[#3f5d46] hover:bg-[#e8f0ea] hover: ease-in transition-all duration-200 cursor-pointer">
    Reviewed
  </button>
</div>
<div className="w-30 text-center">
  <button className="w-full py-2 font-semibold text-black bg-[#55a86a] relative hover:border-t-4 hover:border-[#7fc77f] hover:bg-[#e8f0ea] hover: ease-in transition-all duration-200 cursor-pointer">
    Arrived
  </button>
</div>
<div className="w-30 text-center">
<button
  onClick={addRow}
  className="w-full py-2 font-semibold  text-black bg-[#cedcd1] relative hover:border-t-4 hover:border-[#3f5d46] hover:bg-[#e8f0ea] hover: ease-in transition-all duration-200 cursor-pointer"
  disabled={data.length >= 100}
>
  +
</button>
</div>
 </ul>


      </div>
    </div>
  );
};

export default AirtableLikeSheet;