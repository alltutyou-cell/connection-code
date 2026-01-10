
import React from 'react';

const BookMockup: React.FC = () => {
    return (
        <div className="relative group perspective-1000 w-[220px] md:w-[260px] mx-auto transition-transform duration-500 hover:scale-105 my-8">
            {/* Book Container with 3D Effect - Enforcing aspect ratio 2:3 */}
            <div className="relative transform-style-3d rotate-y-[-20deg] rotate-x-[10deg] group-hover:rotate-y-[-15deg] group-hover:rotate-x-[5deg] transition-all duration-500 ease-out shadow-2xl rounded-r-lg aspect-[2/3.1]">

                {/* Front Cover */}
                <div className="relative z-20 h-full w-full rounded-r-lg overflow-hidden shadow-xl bg-white">
                    <img
                        src="/book-cover.jpg"
                        alt="The Connection Code Book"
                        className="w-full h-full object-cover rounded-r-sm"
                    />
                    {/* Sheen/Highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-y-0 left-0 w-2 md:w-3 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Book Spine (simulated) */}
                <div className="absolute top-[2px] bottom-[2px] left-0 w-6 md:w-8 bg-[#F5F5F0] -translate-x-full origin-right transform-style-3d rotate-y-[-90deg] border-l border-gray-200 shadow-inner z-10 flex items-center justify-center overflow-hidden rounded-l-sm">
                    <div className="w-full h-full bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-50"></div>
                </div>

                {/* Pages (Side View) */}
                <div className="absolute top-[3px] bottom-[3px] right-0 w-8 md:w-10 bg-white -translate-z-[2px] translate-x-[6px] rotate-y-[90deg] origin-left shadow-sm border border-gray-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=')]"></div>

                {/* Back Shadow */}
                <div className="absolute top-10 left-10 w-full h-full bg-black/30 blur-2xl -z-10 translate-z-[-30px] rounded-lg"></div>
            </div>
        </div>
    );
};

export default BookMockup;
