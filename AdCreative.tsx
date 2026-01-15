import React from 'react';
import { ArrowRight, Wifi, Battery, Signal } from 'lucide-react';

const AdCreative: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F2F0E9] flex flex-col items-center justify-center p-8 font-sans" id="ad-capture">

            {/* Headlines */}
            <h1 className="text-4xl md:text-5xl font-black text-center text-black mb-2 uppercase tracking-tight leading-tight max-w-3xl">
                I SAW THE TEXT HE<br />SENT HIS FRIEND.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 italic mb-8 font-serif text-center">
                (I wasn't snooping. His phone was just... there.)
            </p>

            {/* Phone Mockup */}
            <div className="bg-white rounded-[3rem] border-8 border-gray-800 p-4 w-[22rem] shadow-2xl relative mb-10 overflow-hidden">
                {/* Notch/Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-white z-10 flex justify-between px-6 items-center pt-2">
                    <span className="text-[10px] font-bold">9:41</span>
                    <div className="flex gap-1">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-3 h-3" />
                    </div>
                </div>

                {/* Chat UI */}
                <div className="mt-8 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold text-white">M</div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold">Marcus</span>
                    </div>
                </div>

                <div className="space-y-3 text-xs font-medium pb-4">
                    {/* Gray Bubble (Left) */}
                    <div className="flex justify-start">
                        <div className="bg-[#E9E9EB] text-black px-3 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                            You coming to the game Sunday?
                        </div>
                    </div>

                    {/* Blue Bubble (Right) */}
                    <div className="flex justify-end">
                        <div className="bg-[#007AFF] text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                            Nah man
                        </div>
                    </div>

                    {/* Gray Bubble (Left) */}
                    <div className="flex justify-start">
                        <div className="bg-[#E9E9EB] text-black px-3 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                            What do you mean
                        </div>
                    </div>

                    {/* Blue Bubble (Right) */}
                    <div className="flex justify-end flex-col items-end gap-1">
                        <div className="bg-[#007AFF] text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                            Things are different at home lately
                        </div>
                        <div className="bg-[#007AFF] text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                            In a good way
                        </div>
                    </div>

                    {/* Gray Bubble (Left) */}
                    <div className="flex justify-start">
                        <div className="bg-[#E9E9EB] text-black px-3 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                            Damn bro
                        </div>
                    </div>

                    {/* Blue Bubble (Right) - Text Nuke */}
                    <div className="flex justify-end">
                        <div className="bg-[#007AFF] text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[90%] text-left">
                            Idk how to explain it but Sarah's been saying things differently and it's like... I actually WANT to talk to her now. Like we're on the same team again instead of me feeling like I'm failing constantly
                        </div>
                    </div>

                    {/* Gray Bubble (Left) */}
                    <div className="flex justify-start">
                        <div className="bg-[#E9E9EB] text-black px-3 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                            That's what's up
                        </div>
                    </div>

                    <div className="text-[10px] text-gray-400 text-center pt-2">Delivered</div>
                </div>

                {/* Input Bar Mock */}
                <div className="border-t border-gray-100 pt-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 h-8 bg-white border border-gray-200 rounded-full text-[10px] text-gray-400 flex items-center px-3">iMessage</div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
            </div>

            {/* Bottom Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a472a] text-center flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                Get all 87 scripts here - $19 <ArrowRight className="w-6 h-6 border-2 border-[#1a472a] rounded-full p-0.5" />
            </h2>

        </div>
    );
};

export default AdCreative;
