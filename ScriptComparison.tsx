
import React from 'react';
import { Frown, Smile, Sparkles } from 'lucide-react';

interface ScriptComparisonProps {
    situation: string;
    before: {
        label: string;
        text: string;
        why: string;
        time?: string;
    };
    after: {
        label: string;
        text: string;
        why: string;
        time?: string;
    };
}

const ScriptComparison: React.FC<ScriptComparisonProps> = ({ situation, before, after }) => {
    return (
        <div className="mb-24 max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-4 mb-12 text-center">
                <span className="bg-rose-100 text-[#E67E7E] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest border border-rose-200 shadow-sm">Real Script Example</span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 leading-tight max-w-2xl">{situation}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* BEFORE: The "Failed" Text */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-6 text-red-500 font-bold text-lg uppercase tracking-wide">
                        <Frown className="w-6 h-6" />
                        {before.label}
                    </div>

                    {/* Phone Mockup - Gray/Failed */}
                    <div className="relative w-full max-w-[320px] bg-gray-900 rounded-[3rem] p-4 border-[6px] border-gray-800 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>

                        {/* Screen Content */}
                        <div className="bg-white rounded-[2.2rem] h-[500px] overflow-hidden flex flex-col relative">
                            {/* Header */}
                            <div className="bg-gray-100 p-4 pt-10 border-b border-gray-200 flex items-center justify-center">
                                <span className="font-semibold text-gray-500 text-sm">Husband</span>
                            </div>

                            {/* Messages */}
                            <div className="p-4 space-y-4 flex-grow bg-white">
                                <div className="flex justify-end">
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm leading-relaxed">
                                        {before.text}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-[10px] text-gray-400 font-medium">Read {before.time || '2:45 PM'}</span>
                                </div>

                                {/* The "Ignored" silence visual */}
                                <div className="flex justify-center mt-8 opacity-40">
                                    <span className="text-xs text-gray-400 italic">No response...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why it fails box directly under phone */}
                    <div className="mt-8 bg-red-50 border border-red-100 p-6 rounded-2xl w-full max-w-sm text-center shadow-sm">
                        <p className="font-bold text-red-700 text-sm uppercase mb-2 text-xs tracking-wider">Why This Fails</p>
                        <p className="text-red-900 text-sm leading-relaxed">{before.why}</p>
                    </div>
                </div>

                {/* AFTER: The "Successful" Text */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-6 text-green-600 font-bold text-lg uppercase tracking-wide">
                        <Smile className="w-6 h-6" />
                        {after.label}
                    </div>

                    {/* Phone Mockup - Success/Color */}
                    <div className="relative w-full max-w-[320px] bg-gray-900 rounded-[3rem] p-4 border-[6px] border-gray-800 shadow-2xl ring-4 ring-rose-100/50">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>

                        {/* Screen Content */}
                        <div className="bg-white rounded-[2.2rem] h-[500px] overflow-hidden flex flex-col relative">
                            {/* Header */}
                            <div className="bg-gray-5 p-4 pt-10 border-b border-gray-100 flex items-center justify-center relative">
                                <span className="font-bold text-gray-800 text-sm">❤️ Husband</span>
                            </div>

                            {/* Messages */}
                            <div className="p-4 space-y-4 flex-grow bg-white">
                                <div className="flex justify-end">
                                    <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm max-w-[90%] text-sm leading-relaxed shadow-sm">
                                        {after.text}
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-[10px] text-gray-400 font-medium">Read {after.time || 'Now'}</span>
                                </div>

                                {/* The "Typing" animation */}
                                <div className="flex items-end gap-2 mt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">H</div>
                                    <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why it works box directly under phone */}
                    <div className="mt-8 bg-green-50 border border-green-100 p-6 rounded-2xl w-full max-w-sm text-center shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <Sparkles className="w-12 h-12 text-green-600" />
                        </div>
                        <p className="font-bold text-green-700 text-sm uppercase mb-2 text-xs tracking-wider">Why This Works</p>
                        <p className="text-green-900 text-sm leading-relaxed">{after.why}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScriptComparison;
