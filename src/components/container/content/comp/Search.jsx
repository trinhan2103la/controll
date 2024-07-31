/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = ({
  searchTerm,
  onSearchTermChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) => {
  return (
    <div className="mb-4 flex space-x-4 items-center">
      <input
        type="text"
        placeholder="Search "
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        className=" border-gray-300  w-[30%] text-sm"
      />
      <DatePicker
        selected={startDate}
        onChange={onStartDateChange}
        showTimeSelect
        dateFormat="yyyy-MM-dd HH:mm:ss"
        placeholderText="Start"
        className="px-4 py-2 border-none outline-none border-gray-300 rounded text-sm"
      />
      <DatePicker
        selected={endDate}
        onChange={onEndDateChange}
        showTimeSelect
        dateFormat="yyyy-MM-dd HH:mm:ss"
        placeholderText="End"
        className="px-4 py-2 border-none outline-none border-gray-300 rounded text-sm"
      />
    </div>
  );
};

export default Search;
