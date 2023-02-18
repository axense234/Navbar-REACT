// React
import { useEffect, useRef } from "react";
// Data
import { pageLinks } from "../data";

const Dropdown = ({ showDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    let timeout;
    const dropdown = dropdownRef.current;
    if (showDropdown) {
      dropdown.style.height = `${pageLinks.length * 8}rem`;
    } else {
      dropdown.style.height = "0";
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showDropdown]);

  return (
    <aside className='dropdown-container' ref={dropdownRef}>
      <div className='dropdown-container__page-links'>
        {pageLinks.map((pageLink) => {
          return (
            <a href={pageLink.destination} key={pageLink.id}>
              {pageLink.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Dropdown;
