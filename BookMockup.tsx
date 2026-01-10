
import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group w-[220px] md:w-[280px] mx-auto transition-transform duration-500 hover:scale-[1.02] my-8 select-none">
            {/* Main Book Container - Sleek Modern Look (No White Spine) */}
            <div className="relative rounded-r-xl rounded-l-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] bg-white aspect-[2/3] transform rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 ease-out border border-white/10">

                {/* Image */}
                <img
                    src="/book-cover.jpg"
                    alt="The Connection Code Book"
                    className="w-full h-full object-cover rounded-r-xl rounded-l-md shadow-inner"
                />

                {/* Lighting Effects for Depth without "3D Box" */}
                {/* Left curve highlight */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 via-white/10 to-transparent opacity-50 rounded-l-md pointer-events-none"></div>
                {/* Surface sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-r-xl rounded-l-md pointer-events-none mix-blend-soft-light"></div>
            </div>

            {/* Subtle "Stacked" effect behind to give volume without the white strip */}
            <div className="absolute top-2 left-2 w-full h-full bg-gray-900 rounded-r-xl rounded-l-md -z-10 opacity-5 shadow-lg transform rotate-[-2deg] group-hover:rotate-0 transition-all duration-500"></div>
        </div>
    );
};

export default BookMockup;
