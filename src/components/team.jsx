import React, { useState } from "react";
import { t1, t2 } from '../assets';

const TeamMember = ({ image, hoverImage, name, position }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[30rem] mx-4 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={isHovered ? hoverImage : image}
                alt={name}
                className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? "grayscale-0" : "grayscale"}`}
            />
            {isHovered && (
                <div className="absolute top-2 right-2 w-40 bg-white bg-opacity-90 p-2 rounded-lg shadow-lg">
                    <h3 className="text-sm font-bold">{name}</h3>
                    <p className="text-xs">{position}</p>
                </div>
            )}
        </div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
        {
            image: t1,
            hoverImage: t2,
            name: "Iskandar",
            position: "Back office"
        },
    ];

    return (
        <div className="flex justify-center items-center bg-gray2">
            <div className="flex space-x-4 px-4 overflow-x-auto">
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        image={member.image}
                        hoverImage={member.hoverImage}
                        name={member.name}
                        position={member.position}
                    />
                ))}
            </div>
        </div>

    );
};

export default Team;
