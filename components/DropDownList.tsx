'use client'

import { useState } from "react";
import Image from 'next/image';

const DropDownList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Most Recent");
    
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            Most Recent
            <Image
              src="/assets/icons/hamburger.svg"
              alt="more"
              height={16}
              width={16}
            ></Image>
            {selected}
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt=""
            height={20}
            width={20}
          ></Image>
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {["Most Recent", "Most Liked"].map((option) => (
            <li
              key={option}
              className={`list-item ${
                selected === option ? "bg-blue-50 font-bold text-blue-600" : ""
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default DropDownList