import React, { useState } from "react";

const Team = ({ teamMembers }) => {
    const [hoveredMember, setHoveredMember] = useState(null);

    return (
        <div className="flex justify-center items-center bg-gray2">
            <div className="flex overflow-x-auto px-5">
                {teamMembers?.map((member, index) => (
                    <div
                        key={index}
                        className="relative w-60 h-80 sm:w-72 sm:h-96 lg:w-60 lg:h-[30rem] cursor-pointer shrink-0"
                        onMouseEnter={() => setHoveredMember(index)}
                        onMouseLeave={() => setHoveredMember(null)}
                    >
                        <img
                            src={hoveredMember === index ? member.background_image : member.photo}
                            alt={member.name}
                            className={`w-full h-full object-none transition-transform duration-300 ${hoveredMember === index ? "grayscale-0" : "grayscale"}`}
                        />
                        {hoveredMember === index && (
                            <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded-lg shadow-lg">
                                <h3 className="text-sm font-bold">{member.username}</h3>
                                <p className="text-xs">{member.job_title}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
