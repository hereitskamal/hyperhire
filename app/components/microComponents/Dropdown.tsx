"use client";

import { useState } from 'react';

interface DropdownProps {
    label: string;
    color: string;
    
    labelColor?: string;
    options: string[];
    onSelect: (option: string) => void;
    width?: string; // Optional width prop
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, color, onSelect, width = 'w-72' , labelColor= 'text-white'}) => { // Default width set to 'w-72'
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleOptionClick = (option: string) => {
        onSelect(option);
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className={`flex items-center ${labelColor} font-bold focus:outline-none`}
            >
                {label}
                <span className="ml-2">
                    {isDropdownOpen ? '▲' : '▼'}
                </span>
            </button>
            {isDropdownOpen && (
                <div className={`absolute ${width} right-0 mt-2`}>
                    <div className="bg-white rounded-lg shadow-lg z-20">
                        <div className={`px-4 py-2 font-bold text-center ${color}`}>{label}</div>
                        <ul className="text-gray-700">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
