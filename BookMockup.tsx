
import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group perspective-1000 w-[240px] md:w-[300px] mx-auto transition-transform duration-500 hover:scale-105">
            {/* Book Container with 3D Effect */}
            <div className="relative transform-style-3d rotate-y-[-15deg] rotate-x-[5deg] group-hover:rotate-y-[-10deg] group-hover:rotate-x-[0deg] transition-all duration-500 ease-out shadow-2xl rounded-r-lg">

                {/* Front Cover */}
                <div className="relative z-20 rounded-r-lg overflow-hidden shadow-xl">
                    <img
                        src="/book-cover.jpg"
                        alt="The Connection Code Book"
                        className="w-full h-auto object-cover rounded-r-sm"
                    />
                    {/* Sheen/Highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Book Spine (simulated) */}
                <div className="absolute top-[2px] bottom-[2px] left-0 w-4 bg-[#F5F5F0] -translate-x-full origin-right transform-style-3d rotate-y-[-90deg] border-l border-gray-200 shadow-inner z-10 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-gray-100 to-[#F5F5F0]"></div>
                </div>

                {/* Pages (Side View) */}
                <div className="absolute top-[3px] bottom-[3px] right-0 w-8 bg-white -translate-z-[1px] translate-x-[24px] rotate-y-[90deg] origin-left shadow-sm border border-gray-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=')]"></div>

                {/* Back Shadow */}
                <div className="absolute top-10 left-10 w-full h-full bg-black/40 blur-xl -z-10 translate-z-[-20px] rounded-lg"></div>
            </div>
        </div>
    );
};

export default BookMockup;
