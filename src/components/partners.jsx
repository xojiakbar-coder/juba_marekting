import React from 'react';

const Partners = ({ data }) => {

    return (
        <div className="bg-yellow2 w-full overflow-hidden">
            <div className="container mx-auto py-10 relative">
                <div className="flex2 flex items-center gap-6 whitespace-nowrap animate-slide">
                    {/* Rasmlar ketma-ket cheksiz chiqishi uchun ularni ikki marta chiqaramiz */}
                    {data?.concat(data, data).map((i, index) => (
                        <img
                            key={index}
                            className="min-w-[150px] sm:min-w-[200px] md:min-w-[250px] px-5 h-auto object-cover flex-shrink-0"
                            src={i.photo}
                            alt="Rasm topilmadi"
                        />
                    ))}


                </div>
            </div>
        </div>
    );
};

export default Partners;
