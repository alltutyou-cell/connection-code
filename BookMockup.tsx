
import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group w-[220px] md:w-[260px] mx-auto transition-transform duration-500 hover:scale-[1.02] my-8 perspective-1000">
            {/* The Book Itself */}
            <div className="relative transform-style-3d rotate-y-[-15deg] rotate-x-[5deg] group-hover:rotate-y-[-5deg] group-hover:rotate-x-[0deg] transition-all duration-700 ease-out shadow-[20px_20px_50px_rgba(0,0,0,0.3)] bg-gray-900 rounded-r-md rounded-l-sm aspect-[2/3.1]">

                {/* 1. Spine (Left Edge) - Darker shade of cover to simulate wrapping */}
                <div className="absolute top-0 bottom-0 left-0 w-4 bg-gray-800 transform -translate-x-full origin-right rotate-y-[-90deg] rounded-l-sm border-l border-white/10 z-10 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    {/* Creating a 'curved' look for the spine */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20"></div>
                </div>

                {/* 2. Front Cover */}
                <div className="relative w-full h-full z-20 bg-white rounded-r-md rounded-l-sm overflow-hidden border-t border-r border-white/20">
                    <img
                        src="/book-cover.jpg"
                        alt="The Connection Code Book"
                        className="w-full h-full object-cover rounded-r-md rounded-l-sm"
                    />

                    {/* Realism: Spine Fold/Crease */}
                    <div className="absolute top-0 bottom-0 left-[2px] w-[2px] bg-white/30 blur-[1px]"></div>
                    <div className="absolute top-0 bottom-0 left-[6px] w-[1px] bg-black/20 blur-[1px]"></div>

                    {/* Realism: Gloss/Sheen Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/30 pointer-events-none mix-blend-soft-light"></div>

                    {/* Realism: Left Edge Shadow (Curvature) */}
                    <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* 3. Pages (Right Side Thickness) */}
                <div className="absolute top-[3px] bottom-[3px] right-0 w-[12px] bg-[#fdfdfd] transform translate-x-full origin-left rotate-y-[90deg] shadow-sm border-r border-gray-200 z-10">
                    {/* Page texture lines */}
                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#e5e5e5_2px)] opacity-50"></div>
                </div>

                {/* 4. Pages (Bottom Thickness) - Visible due to tilt */}
                <div className="absolute bottom-0 left-[3px] right-0 h-[12px] bg-[#fdfdfd] transform translate-y-full origin-top rotate-x-[-90deg] shadow-sm border-b border-gray-200 rounded-bl-sm">
                    <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#e5e5e5_2px)] opacity-50"></div>
                </div>

            </div>

            {/* 5. Drop Shadow (Soft, Grounding) */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black/40 blur-xl rounded-full opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"></div>
        </div>
    );
};

export default BookMockup;
