import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group w-[220px] md:w-[260px] mx-auto my-12 perspective-1000">
            {/* 3D Container */}
            <div className="relative transform-style-3d rotate-y-[-25deg] rotate-x-[10deg] group-hover:rotate-y-[-15deg] group-hover:rotate-x-[5deg] transition-all duration-700 ease-out shadow-2xl rounded-r-md aspect-[2/3.1]">

                {/* 1. FRONT COVER */}
                <div className="relative z-20 w-full h-full bg-white rounded-r-md overflow-hidden backface-hidden">
                    <img
                        src="/book-cover.jpg"
                        alt="The Connection Code Book"
                        className="w-full h-full object-cover"
                    />

                    {/* Realistic Lighting Overlays */}
                    {/* Spine Indentation (The 'Hinge') */}
                    <div className="absolute top-0 bottom-0 left-[2%] w-[2px] bg-black/20 blur-[1px]"></div>
                    {/* Glossy Sheen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:400%_100%] animate-shimmer"></div>
                    {/* Edge Highlight */}
                    <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>

                {/* 2. WRAPPED SPINE (The Key to Realism) */}
                {/* We use the same image but darker to simulate the art wrapping around */}
                <div className="absolute top-0 bottom-0 left-0 w-10 bg-gray-800 transform -translate-x-full origin-right rotate-y-[-90deg] rounded-l-sm overflow-hidden z-10 border-r border-black/20">
                    <div className="relative w-full h-full overflow-hidden">
                        <img
                            src="/book-cover.jpg"
                            className="absolute w-[800%] h-full max-w-none object-cover left-0 opacity-40 blur-[1px] grayscale-[20%]"
                            alt=""
                        />
                        {/* Spine Curvature Shadow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                    </div>
                </div>

                {/* 3. PAGES (Right Edge) */}
                <div className="absolute top-[3px] bottom-[3px] right-0 w-[24px] bg-[#f8f8f8] transform translate-x-full origin-left rotate-y-[90deg] translate-z-[1px] border-l border-gray-300">
                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#f1f1f1,#f1f1f1_1px,#fff_2px,#fff_3px)]"></div>
                </div>

                {/* 4. PAGES (Bottom Edge) */}
                <div className="absolute bottom-0 left-0 right-0 h-[24px] bg-[#f8f8f8] transform translate-y-full origin-top rotate-x-[-90deg]">
                    <div className="w-full h-full bg-[repeating-linear-gradient(0deg,#f1f1f1,#f1f1f1_1px,#fff_2px,#fff_3px)]"></div>
                </div>

                {/* 5. BACK COVER (For depth perception) */}
                <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-800 transform translate-z-[-23px] rounded-l-sm shadow-xl"></div>
            </div>

            {/* Ground Shadow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl rounded-[100%] transform rotate-x-[60deg] opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
        </div>
    );
};

export default BookMockup;
