
import React from 'react';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

const DoomScrollSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left Column: Text */}
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="mb-6 inline-block px-4 py-1.5 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-full">
            The Reality Check
          </div>
          <h2 className="text-5xl md:text-7xl serif font-bold mb-8 text-gray-900 leading-[1.1] tracking-tight">
            The "Doom Scroll" <span className="italic relative z-10">Trauma</span>
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            <p>
              You open Instagram and immediately regret it. There's another anniversary post from a friend: <br/>
              <span className="font-bold text-gray-900 italic">"15 years and still my best friend! ❤️ "</span>
            </p>
            <p>
              You scroll more. A screenshot of a text from her husband: <br/>
              <span className="text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-lg inline-block mt-2">"Can't wait to see your beautiful face tonight 😘"</span>
            </p>
            
            <div className="relative py-4">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E67E7E]/30 rounded-full"></div>
              <p className="text-3xl md:text-4xl font-serif text-[#E67E7E] italic pl-6 leading-tight">
                Your last text was "Can you pick up milk."
              </p>
            </div>

            <p className="font-medium text-gray-800">
              You feel pathetic. You feel invisible. You feel like a "sad, boring business partner."
            </p>
          </div>
        </div>

        {/* Right Column: Instagram Mockup */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-100/50 to-blue-50/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 max-w-[24rem] w-full rotate-3 hover:rotate-0 transition-all duration-700 ease-out transform cursor-default group">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
                   <div className="w-full h-full bg-white rounded-full p-[2px] overflow-hidden">
                     {/* Placeholder for IG icon or profile pic */}
                     <div className="w-full h-full bg-gray-200"></div> 
                   </div>
                </div>
                <div>
                    <span className="font-bold text-sm text-gray-900 block leading-tight">Your Feed</span>
                    <span className="text-xs text-gray-400 block">Suggested for you</span>
                </div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            
            {/* Image Placeholder */}
            <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400 text-sm font-medium relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
              [Happily Married Friend Post]
            </div>

            {/* Actions */}
            <div className="flex gap-5 mb-5 px-1">
              <Heart className="w-7 h-7 text-red-500 fill-current animate-pulse-slow" />
              <MessageCircle className="w-7 h-7 text-gray-800" />
            </div>

            {/* Caption */}
            <div className="px-1 mb-6 text-sm leading-relaxed">
              <span className="font-bold mr-2 text-gray-900">sarah_married</span>
              <span className="text-gray-800">Best weekend ever with my guy! ❤️ #blessed #soulmate</span>
            </div>

            {/* Specific Interaction Box */}
            <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-300"></div>
              <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                Your Intrusion Thought:
              </div>
              <p className="text-rose-900 text-sm italic font-serif font-medium leading-relaxed">
                "When's the last time David looked at me like that? We look like happy people on the outside, but we haven't spoken in days."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoomScrollSection;
