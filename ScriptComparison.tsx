
import React from 'react';
import { Frown, Smile } from 'lucide-react';

interface ScriptComparisonProps {
    situation: string;
    before: {
        label: string;
        text: string;
        why: string;
    };
    after: {
        label: string;
        text: string;
        why: string;
    };
}

const ScriptComparison: React.FC<ScriptComparisonProps> = ({ situation, before, after }) => {
    return (
        <div className="mb-20 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
                <span className="bg-rose-100 text-[#E67E7E] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Script Example</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">{situation}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Before Card */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-red-500 font-bold text-lg">
                        <Frown className="w-6 h-6" />
                        {before.label}
                    </div>

                    <div className="bg-gray-50 rounded-[2rem] p-8 flex-grow shadow-sm border border-gray-100 relative group hover:shadow-md transition-all">
                        <div className="bg-white p-6 rounded-2xl rounded-tr-none shadow-sm border border-gray-100 text-gray-700 leading-relaxed mb-6 font-medium relative z-10">
                            "{before.text}"
                        </div>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm">
                            <span className="font-bold text-red-600 underline decoration-red-300">Why this fails:</span>
                            <span className="text-red-800 ml-1">{before.why}</span>
                        </div>
                    </div>
                </div>

                {/* After Card */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-green-500 font-bold text-lg">
                        <Smile className="w-6 h-6" />
                        {after.label}
                    </div>

                    <div className="bg-rose-50 rounded-[2rem] p-8 flex-grow shadow-lg border border-rose-100 relative transform md:scale-105 z-10">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">RECOMMENDED</div>

                        <div className="bg-[#E67E7E] p-6 rounded-2xl rounded-tl-none shadow-md text-white leading-relaxed mb-6 font-medium relative z-10">
                            "{after.text}"
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-sm">
                            <span className="font-bold text-green-600 underline decoration-green-300">Why this works:</span>
                            <span className="text-green-800 ml-1">{after.why}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScriptComparison;
