import React from 'react';
import { ArrowRight } from 'lucide-react';

const AdCard = ({ children, dark = false, id }: { children: React.ReactNode, dark?: boolean, id?: string }) => (
    <div id={id} className={`w-[540px] h-[540px] flex flex-col justify-between p-12 shrink-0 shadow-2xl relative overflow-hidden ${dark ? 'bg-gradient-to-b from-slate-800 to-indigo-900 text-white' : 'bg-[#FAF9F6] text-[#1a1a1a]'}`}>
        {children}
    </div>
);

const AdGallery: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-8 font-sans overflow-x-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Ad Creative Gallery (Price: $19)</h1>
            <p className="text-center mb-12 text-gray-600">Screenshots perfectly sized for Facebook/Instagram (1080x1080 equivalent scale)</p>

            <div className="flex flex-wrap justify-center gap-12 pb-24">

                {/* Concept 1: Invisible Wife */}
                <AdCard id="ad-invisible-wife">
                    <div>
                        <h2 className="text-[28px] font-bold mb-8 font-sans leading-tight">IF YOU'RE A WIFE WHO...</h2>
                        <p className="text-[24px] font-serif italic text-[#E67E7E] leading-snug mb-8">
                            feels completely <span className="font-bold font-sans not-italic">INVISIBLE</span> <br />
                            in your own marriage
                        </p>
                        <p className="text-[16px] font-medium leading-relaxed mb-4">The problem isn't that he doesn't care.</p>
                        <p className="text-[16px] font-bold text-[#1a1a1a]">It's that he doesn't NOTICE.</p>
                        <p className="text-[14px] text-gray-600 mt-6">Here's how to get him to <span className="text-[#E67E7E] font-bold">SEE</span> you again (without nagging)</p>
                    </div>

                    <div className="mt-auto self-center">
                        <button className="bg-[#E67E7E] text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
                            → 87 scripts for $19
                        </button>
                    </div>
                </AdCard>

                {/* Concept 2: 3AM Scroller (Dark) */}
                <AdCard dark id="ad-3am-scroller">
                    <div>
                        <h2 className="text-[28px] font-bold mb-8 font-sans leading-tight">IF YOU'RE A WIFE WHO...</h2>
                        <p className="text-[24px] font-serif italic text-rose-200 leading-snug mb-8">
                            scrolls Pinterest at <span className="font-bold font-sans not-italic">3am</span> <br />
                            crying because you feel so alone
                        </p>
                        <p className="text-[16px] font-semibold leading-relaxed mb-4">
                            This <span className="text-[#E67E7E]">11-word sentence</span> <br />
                            changed everything for <span className="text-[#E67E7E]">500+</span> wives.
                        </p>
                        <p className="text-[14px] text-gray-300 mt-6 leading-relaxed">No therapy. No "big talk."<br />Just the right words at the right time.</p>
                    </div>

                    <div className="mt-auto self-center">
                        <button className="bg-white text-[#1a1a1a] font-bold text-lg px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                            → Get the script for $19
                        </button>
                    </div>
                </AdCard>

                {/* Concept 3: The Silence */}
                <AdCard id="ad-silence">
                    <div>
                        <h2 className="text-[28px] font-bold mb-8 font-sans leading-tight">IF YOU'RE A WIFE WHO...</h2>
                        <p className="text-[24px] font-serif italic text-[#1a1a1a] leading-snug mb-8">
                            eats dinner in <span className="font-bold font-sans not-italic text-[#E67E7E]">SILENCE</span> <br />
                            every night
                        </p>
                        <p className="text-[16px] font-medium text-gray-600 mb-4">The awkward quiet isn't normal.</p>
                        <p className="text-[16px] font-bold text-[#1a1a1a]">And you don't have to accept it.</p>
                        <p className="text-[14px] text-gray-500 mt-6">Here's the <span className="text-[#E67E7E] font-bold">3-sentence script</span> <br /> that brings conversation back</p>
                    </div>

                    <div className="mt-auto self-center">
                        <button className="bg-[#E67E7E] text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
                            → Get all 87 scripts for $19
                        </button>
                    </div>
                </AdCard>

                {/* Concept 4: The Kiss */}
                <AdCard id="ad-kiss">
                    <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-white -z-10"></div>
                    <div>
                        <h2 className="text-[28px] font-bold mb-8 font-sans leading-tight">IF YOU'RE A WIFE WHO...</h2>
                        <p className="text-[24px] font-serif italic text-[#D46B6B] leading-snug mb-8">
                            gets kissed like you're <span className="font-bold font-sans not-italic">his aunt</span> <br />
                            instead of his wife
                        </p>
                        <p className="text-[16px] font-medium text-gray-600 mb-4">The passion didn't die.</p>
                        <p className="text-[16px] font-bold text-[#1a1a1a]">It's just dormant.</p>
                        <p className="text-[14px] text-gray-500 mt-6">This <span className="text-[#E67E7E] font-bold">11-word script</span> reignites it <br />(without "the talk")</p>
                    </div>

                    <div className="mt-auto self-center">
                        <button className="bg-[#E67E7E] text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
                            → Get the script for $19
                        </button>
                    </div>
                </AdCard>

                {/* Concept 5: Phone Scroll */}
                <AdCard id="ad-phone-scroll">
                    <div>
                        <h2 className="text-[28px] font-bold mb-8 font-sans leading-tight">IF YOU'RE A WIFE WHO...</h2>
                        <p className="text-[24px] font-serif italic text-[#E67E7E] leading-snug mb-8">
                            watches your husband <br />
                            <span className="font-bold font-sans not-italic">scroll his phone</span> <br />
                            instead of talking to you
                        </p>
                        <p className="text-[16px] font-medium text-gray-600 mb-4">He's not ignoring you on purpose.</p>
                        <p className="text-[16px] font-bold text-[#1a1a1a]">He just doesn't know what to say.</p>
                        <p className="text-[14px] text-gray-500 mt-6">These <span className="text-[#E67E7E] font-bold">87 scripts</span> give him <br />something to respond to</p>
                    </div>

                    <div className="mt-auto self-center">
                        <button className="bg-[#E67E7E] text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg flex items-center gap-2">
                            → Get them for $19
                        </button>
                    </div>
                </AdCard>

            </div>
        </div>
    );
};

export default AdGallery;
