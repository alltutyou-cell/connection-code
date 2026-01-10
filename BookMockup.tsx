import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group w-[240px] md:w-[280px] mx-auto my-10 perspective-1000">
            {/* Softcover Book Container - Tilted and Floating */}
            <div className="relative transform-style-3d rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-y-[-2deg] group-hover:rotate-x-[0deg] transition-all duration-700 ease-out">

                {/* 1. The Cover - With Soft Rounded Spine */}
                <div className="relative z-20 w-full aspect-[2/3.1] bg-white rounded-r-lg rounded-l-md shadow-2xl overflow-hidden brightness-100 group-hover:brightness-105 transition-all">
                    <img
                        src="/book-cover.jpg"
                        alt="The Connection Code Book"
                        className="w-full h-full object-cover"
                    />

                    {/* Lighting/Texture Effects for 'Softcover' Feel */}
                    {/* Spine Curvature Highlight (Left) */}
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/30 via-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>

                    {/* Surface Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none mix-blend-screen"></div>

                    {/* Subtle crease near spine */}
                    <div className="absolute top-0 bottom-0 left-[6px] w-[1px] bg-black/10"></div>
                </div>

                {/* 2. Paperback Spine (Curved) */}
                <div className="absolute top-[1px] bottom-[1px] left-[1px] w-5 bg-gray-100 transform -translate-x-[98%] rotate-y-[-90deg] origin-right rounded-l-sm overflow-hidden border-l border-gray-200">
                    {/* Cylinder Gradient for curvature */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300 opacity-80"></div>
                </div>

                {/* 3. Pages Block (The Thickness) */}
                <div className="absolute top-[2px] bottom-[2px] right-[2px] w-[18px] bg-white transform translate-x-[95%] translate-z-[-2px] rotate-y-[90deg] origin-left border-r border-gray-200">
                    {/* Detailed Page Texture - Thin lines */}
                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#f5f5f5,#f5f5f5_1px,#ffffff_1px,#ffffff_2px)]"></div>
                    {/* Shadow at the 'binding' end of the pages */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5"></div>
                </div>

                {/* 4. Back Cover (Barely visible, but adds depth) */}
                <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-100 transform translate-z-[-20px] rounded-lg border border-gray-200"></div>

                {/* 5. Realistic Drop Shadow */}
                <div className="absolute -bottom-8 left-4 right-4 h-6 bg-black/40 blur-xl opacity-60 rounded-full transform rotate-x-[60deg] group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"></div>
            </div>
        </div>
    );
};

export default BookMockup;
