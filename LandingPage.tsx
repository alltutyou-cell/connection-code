import React, { useEffect, useState } from 'react';
import { Star, ArrowRight, Menu, X, Check, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import BookMockup from './BookMockup';

const LandingPage: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Initialize checkout overlay
  useEffect(() => {
    // Determine if the script is already loaded
    const scriptId = 'checkout-page-overlay-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.checkoutpage.com/overlay.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 py-3 px-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight serif italic text-[#E67E7E]">The Connection Code</div>
        <div className="hidden md:flex items-center gap-6">
          <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
            GET THE SCRIPTS
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="block w-full text-center bg-[#E67E7E] text-white py-4 rounded-xl font-bold text-lg mb-4" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">Get All 87 Scripts</a>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-1 mb-4 scale-110">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="font-bold text-sm tracking-widest uppercase text-gray-500 mb-6 text-lg">TRUSTED BY 500+ WIVES</p>

          <h1 className="text-3xl md:text-5xl font-bold serif leading-tight mb-6">
            The 87 Scripts That Made Him Feel Like "We're On The Same Team Again"
          </h1>

          <div className="bg-blue-50 inline-block px-6 py-3 rounded-xl border border-blue-100 mb-8 max-w-lg mx-auto shadow-sm">
            <p className="font-bold text-sm text-blue-700 uppercase tracking-widest mb-2 flex justify-center items-center gap-2">✨ INSTANT DIGITAL DOWNLOAD ✨</p>
            <div className="text-xs md:text-sm text-gray-600 space-y-1">
              <p>87 Copy-Paste Text Message Scripts • Available on your phone in 2 minutes</p>
              <p className="text-gray-500">No shipping. No waiting. No apps to download.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
            When He Finally Hears You (Without Another Exhausting Fight), Everything Changes - Get All 87 Word-for-Word Scripts That Make Him WANT to Reconnect
          </p>

          <div className="mt-8 mb-4">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              SAVE MY MARRIAGE - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">💳 Secure checkout • 🔒 60-day guarantee • 📱 Instant access</p>
          </div>

          <div className="mt-8 mb-4 transform scale-90 md:scale-100">
            <BookMockup />

            <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-left grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">📱 DELIVERED AS:</p>
                <ul className="space-y-2 text-sm text-gray-700 font-medium">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <span>PDF (works on any device)</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <span>Quick Reference Cards</span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> <span>30-Day Action Plan</span></li>
                </ul>
              </div>
              <div className="opacity-75">
                <p className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">❌ NOT:</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-start gap-2"><span>Physical book (no shipping)</span></li>
                  <li className="flex items-start gap-2"><span>Video course (no watching)</span></li>
                  <li className="flex items-start gap-2"><span>Coaching (no calls/zooms)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* About Author Section - Trust Gap Fix */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 my-10 flex flex-col md:flex-row gap-8 items-center max-w-2xl mx-auto">
          <div className="shrink-0 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img src="https://ui-avatars.com/api/?name=Jul+Tabacu&size=256&background=E67E7E&color=fff" alt="Jul Tabacu" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm z-20 transform rotate-12">Author</div>
          </div>
          <div className="text-left">
            <h3 className="font-bold text-2xl mb-3 font-serif text-gray-900">Hi, I'm Jul.</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Six years ago, my marriage was dead. One-word texts. Cold shoulders. Sleeping in separate rooms.</p>
              <p>I tried everything. Therapy failed. Date nights felt forced. Romance books made it worse.</p>
              <p>Then I discovered what actually works: <span className="font-bold text-[#E67E7E]">the exact neurological triggers that make men WANT to reconnect.</span></p>
              <p className="font-bold text-gray-900">I saved my marriage. Then I helped 500+ other wives do the same. Now I'm sharing the exact scripts...</p>
            </div>
          </div>
        </div>

        {/* Intro Body */}
        <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed">
          <p>Look, I'm not going to promise this will make your husband "fall in love with you again" or whatever.</p>
          <p>That's not how this works.</p>
          <p>What these scripts actually do is <span className="font-bold bg-yellow-100/50 px-1">translate what you're trying to say</span> into words his brain can actually process <span className="font-bold">without triggering his whole defensive shutdown thing.</span></p>
          <p className="font-medium text-xl">Same meaning. Different structure. <span className="text-[#E67E7E] font-bold">He finally hears you.</span></p>

          <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-[#E67E7E] my-8 shadow-sm">
            <p className="font-bold text-[#E67E7E] text-lg mb-2">And yeah, it works even if:</p>
            <ul className="list-disc pl-5 space-y-1 font-medium text-gray-700">
              <li>Therapy has failed</li>
              <li>He "doesn't do feelings"</li>
              <li>You've been having the same fight for three years</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg my-6 border-l-4 border-gray-300">
            <p className="italic text-gray-600 text-sm">
              "Sarah sent one text using Script #34. <span className="font-bold text-gray-800">Her husband opened up about work stress he'd been carrying for months.</span> They talked for two hours."
            </p>
          </div>

          <div className="my-8 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              I Want Him to Finally Hear Me - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* Story Section */}
          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">This Is What Happens When You Stop Trying To Get Him To "Communicate Better"</h2>

          <div className="my-10 flex justify-center">
            <div className="max-w-[320px] w-full shadow-2xl rounded-[3rem] overflow-hidden border-8 border-gray-900 bg-black">
              <img src="/phone-conversation-only.png" alt="Text message screenshot on iPhone" className="w-full h-auto block" />
            </div>
          </div>

          <p><span className="font-bold">Sarah sent one text.</span></p>
          <p>Script #34 from the vulnerability chapter.</p>
          <p>Her husband had been distant for months. One-word answers. Came home, ate dinner in silence, went to his office.</p>
          <p>She'd tried everything. Date nights where they sat across from each other with nothing to say. Therapy sessions he hated. Those "I feel" statements that just made him more defensive.</p>
          <p><span className="font-bold text-lg">Then she used the script.</span></p>
          <p>Within 20 minutes he was telling her about work stress he'd been carrying since March. Stuff he'd never mentioned. <span className="font-bold bg-yellow-100/50 px-1">He cried. Actually cried.</span></p>
          <p>They talked for two hours.</p>
          <p>Next day he texted her: <span className="italic font-medium">"I feel like we're on the same team again."</span></p>

          <hr className="my-12 border-gray-200" />

          <p>Here's the thing about that text Sarah sent.</p>
          <p>It wasn't magic. It wasn't manipulation.</p>
          <p>She said the <span className="font-bold">exact same thing</span> she'd been trying to say for months.</p>
          <p>She just structured it differently.</p>
          <p><span className="font-bold text-[#E67E7E]">And his brain stayed calm enough to actually hear her.</span></p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Why Everything You've Tried Hasn't Worked (And Why That's Not Your Fault)</h2>

          <p>You know what every marriage therapist, relationship book, and well-meaning friend told you?</p>
          <p className="font-bold italic text-lg text-center my-6">"Just communicate your needs clearly."</p>
          <p>Cool. You did that.</p>
          <p>He said "okay" and nothing changed.</p>
          <p>Or he got defensive. Or he walked away. Or he gave you that blank stare like you were speaking a language he doesn't understand.</p>
          <p>Because (and I'm sorry no one told you this earlier) he kind of... isn't understanding you.</p>
          <p>Not because he's dumb. Not because he doesn't care.</p>
          <p>Because <span className="font-bold bg-yellow-100/50 px-1">men's brains process emotional information completely differently</span> than women's brains do.</p>
          <p>Dr. John Gottman spent 40 years studying thousands of couples. He can predict divorce with 94% accuracy just by listening to how couples talk to each other for 15 minutes.</p>
          <p>And one of the biggest things he found?</p>
          <p>When women express feelings the way that feels natural to us, <span className="font-bold">men's brains interpret it as a threat.</span></p>
          <p>Their amygdala (the fight-or-flight part) activates. Stress hormones flood their system. The part of their brain that processes empathy literally goes offline.</p>
          <p>They can't access the part that helps them understand you.</p>
          <p>So they do what any threatened animal does. <span className="font-bold">Freeze. Fight. Flee.</span></p>
          <p>That's why he goes silent. Gets defensive. Leaves the room.</p>
          <p>His body thinks he's being attacked.</p>

          <hr className="my-12 border-gray-200" />

          <p>But when you <span className="font-bold">restructure the same message</span> using specific patterns that keep his nervous system calm?</p>
          <p>He can actually hear you.</p>
          <p>Wild, right?</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6 uppercase tracking-wider text-[#E67E7E]">📱 Sneak Peek: Script #23</h2>
          <p className="text-xl font-medium text-gray-600 mb-8">"When He's Emotionally Distant"</p>

          <div className="grid md:grid-cols-2 gap-8 items-center my-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative">
              <div className="absolute -top-3 left-6 bg-gray-100 text-gray-600 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full">Old Way</div>
              <p className="font-bold text-[#E67E7E] mb-2">What you naturally want to say:</p>
              <p className="italic mb-4 text-gray-600">"I feel really disconnected from you lately. I miss us. I need you to understand how this affects me."</p>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <p className="font-bold text-gray-900 text-sm">What his brain hears:</p>
                <p className="italic mb-2 text-sm text-gray-600">"You're failing as a husband and I'm about to list all the ways."</p>
                <p className="font-bold text-gray-900 text-sm mt-3">His response:</p>
                <p className="text-sm">Shuts down. "I don't know what you want from me." Walks away.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-md relative transform md:-rotate-1">
              <div className="absolute -top-3 left-6 bg-green-200 text-green-800 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full">New Way</div>
              <p className="font-bold text-green-700 mb-2">Same need, different structure:</p>

              {/* Chat Bubble Visual */}
              <div className="my-6">
                <p className="text-xs text-gray-500 mb-2 italic">Script #23 (The "Connection Opener"):</p>
                <div className="flex flex-col gap-1">
                  <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[95%] shadow-sm text-sm">
                    <p>"I want to share something with you and get your thoughts. I know you're working hard for us. I miss our connection time together. Would you be willing to spend 20 min tonight just talking?"</p>
                  </div>
                  <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[95%] shadow-sm text-sm">
                    <p>"No pressure - let me know what you think."</p>
                  </div>
                  <p className="text-[10px] text-gray-400 text-right pr-2">Read 4:12 PM</p>
                </div>
              </div>

              <div className="border-t border-green-200 pt-4 mt-2">
                <p className="font-bold text-gray-900 text-sm">His response:</p>
                <p className="font-medium text-green-900">"Yeah, I'd like that. Give me 10 to finish this and I'm all yours."</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-12 text-sm">
            <div className="text-center mb-4">
              <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="text-[#E67E7E] font-bold hover:underline inline-flex items-center gap-1">
                You get 86 more scripts like this inside <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="font-bold mb-2">Why Script #23 works:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 shrink-0" /> <span><span className="font-bold">"Get your thoughts"</span> = activates his problem-solver mode (he's good at that)</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 shrink-0" /> <span><span className="font-bold">"I know you're working hard"</span> = acknowledgment, not criticism</span></li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-1 shrink-0" /> <span><span className="font-bold">"No pressure"</span> = safety signal, keeps him calm</span></li>
            </ul>
          </div>

          <p className="font-bold text-xl text-center my-8">Same. Exact. Need.</p>
          <p className="font-bold text-xl text-center my-8">Different words.</p>
          <p className="font-bold text-xl text-center my-8">Completely different outcome.</p>

          <p>That's what all 87 of these scripts do.</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-8 text-center">What Women Are Saying</h2>

          <div className="space-y-6">

            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="shrink-0 flex md:flex-col items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah T." className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm">Sarah T.</p>

                </div>
              </div>
              <div>
                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">"Within 20 minutes he opened up..."</h3>
                <p className="text-gray-700 text-sm">"I tried Script #62... within 20 minutes he opened up about work stress he'd been carrying for MONTHS. He actually cried and apologized for being distant. We talked for 2 hours."</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="shrink-0 flex md:flex-col items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Jennifer M." className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm">Jennifer M.</p>


                </div>
              </div>
              <div>
                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">"I have my best friend back"</h3>
                <p className="text-gray-700 text-sm">"I was ready to call a lawyer. I felt completely invisible. I started using the appreciation scripts... We've gone from maybe 3 meaningful exchanges per WEEK to 15+ actual conversations DAILY."</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="shrink-0 flex md:flex-col items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Lisa R." className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm">Lisa R.</p>

                </div>
              </div>
              <div>
                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">"Better than $8,000 of therapy"</h3>
                <p className="text-gray-700 text-sm">"We spent $8,000 on marriage therapy over 18 months. My husband hated every session... The conflict resolution scripts in Chapter 4 gave me the exact words I needed. We solved a 3-year-running argument in ONE 15-minute conversation."</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="shrink-0 flex md:flex-col items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Amanda K." className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm">Amanda K.</p>

                </div>
              </div>
              <div>
                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">"He initiated sex for the first time in 8 months..."</h3>
                <p className="text-gray-700 text-sm">"I used Script #31 from the intimacy chapter... He actually TALKED to me for 45 minutes before anything physical happened. Then HE initiated. For the first time in 8 months. I cried."</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="shrink-0 flex md:flex-col items-center gap-3">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Rebecca S." className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div className="text-center md:text-left">
                  <p className="font-bold text-sm">Rebecca S.</p>

                </div>
              </div>
              <div>
                <div className="flex text-yellow-500 gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <h3 className="font-bold text-lg mb-2">"Words I've been waiting 6 years to hear"</h3>
                <p className="text-gray-700 text-sm">"I used Script #84 during what was shaping up to be our worst fight ever. He stopped mid-sentence. Then said: 'I don't want to fight either... I want to try.' We didn't solve everything that night. But he was actually PRESENT."</p>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-4 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              I Want This for My Marriage Too - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">So What's Actually In This Thing?</h2>

          <p>87 scripts. Organized by the situation you're in.</p>
          <p>Daily connection stuff. How to start difficult conversations. Intimacy recovery <span className="font-bold">when that's been dead for months.</span> Conflict resolution that doesn't turn into World War 3. Getting him to open up about what's actually wrong. Setting boundaries without sounding like his mom. Emergency scripts for when things are falling apart right now.</p>
          <p>I'm going to walk through each section so you know what you're getting.</p>

          <div className="my-8 border-4 border-gray-100 rounded-xl overflow-hidden shadow-lg">
            <img src="/table-of-contents.png" alt="Table of Contents The Connection Code" className="w-full h-auto" />
          </div>

          <hr className="my-8 border-gray-200" />

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 1: Daily Connection Scripts (1-12)</h3>
              <p className="italic text-gray-600 mb-4">The texts that keep him engaged during the day without being needy or annoying.</p>
              <p>These scripts actually work because they give him something specific to respond to. And they make him feel appreciated instead of interrogated.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">Jennifer M. sent this when she felt like she was invisible to him:</p>
                <p className="text-xs text-gray-400 text-center mb-1">Today 2:30 PM</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #4: "I was thinking about how you [specific action] earlier. That really meant a lot to me. Thank you."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg italic border-l-4 border-green-500">
                "I have my best friend back. You guys, we went from 3 meaningless texts a week to <span className="font-bold">15+ daily conversations.</span>" — Jennifer M.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 2: Conversation Starter Scripts (13-24)</h3>
              <p className="italic text-gray-600 mb-4">How to bring up something important without triggering his "oh god what did I do now" panic.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">When you need to talk but he usually shuts down:</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #18: "I want to share something with you and get your thoughts. No pressure, just curious what you think about this."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: "Get your thoughts" activates his <span className="font-bold">problem-solver brain</span>. "No pressure" is a safety signal.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 3: Intimacy Recovery Scripts (25-38)</h3>
              <p className="italic text-gray-600 mb-4">For when the physical connection has been... yeah.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">Amanda sent this after an 8-month dry spell:</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #31: "I miss being close to you. Not in a 'you're doing something wrong' way. I genuinely just miss US."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg italic border-l-4 border-green-500">
                "We've had sex 4 times this week. <span className="font-bold">FOUR TIMES.</span> We haven't done that since our honeymoon." — Amanda K.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 4: Conflict Resolution Scripts (39-54)</h3>
              <p className="italic text-gray-600 mb-4">How to address actual problems without starting World War 3.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">Lisa used this to resolve a 3-year argument about his mother:</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #47: "I need your help figuring something out. You're really good at [skill]. Can I get 10 minutes of your brain?"</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg italic border-l-4 border-green-500">
                "We solved a 3-year-running argument in <span className="font-bold">ONE 15-minute conversation.</span> I'm furious a $19 book did what $8,000 of therapy couldn't." — Lisa R.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 5: Vulnerability Scripts (55-68)</h3>
              <p className="italic text-gray-600 mb-4">Getting him to actually tell you what's wrong instead of saying "I'm fine."</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">Sarah sent this when he was being distant and grumpy:</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #62: "I know you've got a lot on your plate. I'm here if you want to talk about it. And also totally fine if you don't. Just want you to know I'm on your side."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p className="text-sm bg-gray-50 p-4 rounded-lg italic border-l-4 border-green-500">
                "Within 20 minutes he opened up about work stress he'd been carrying for months. <span className="font-bold">He actually cried.</span>" — Sarah T.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 6: Boundary Scripts (69-78)</h3>
              <p className="italic text-gray-600 mb-4">How to ask for what you need without starting a fight.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">When asking for help usually causes a fight:</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #73: "Would you be willing to [specific action]? It would really help me with [specific outcome]."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: "Would you be willing" respects his agency. No guilt. No score-keeping. Just a clear request.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 7: Emergency Scripts (79-87)</h3>
              <p className="italic text-gray-600 mb-4">When things are at breaking point and you need something that works right now.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-500 italic mb-1">Rebecca sent this during their "worst fight ever":</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #84: "I don't want to fight. I want to understand you. Can we start over?"</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>
              <p className="text-sm bg-gray-50 p-4 rounded-lg italic border-l-4 border-green-500">
                "He stopped mid-sentence. Got quiet. Then said: 'I don't want to fight either. I'm sorry.' Those are the words I've been waiting <span className="font-bold">6 YEARS to hear.</span>" — Rebecca S.
              </p>
            </div>
          </div>

          <div className="my-12 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              Get Instant Access to All 87 Scripts - $19 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6 mt-16 text-center">See For Yourself: Actual Pages From The Book</h2>
          <p className="text-center mb-8 text-gray-600">This isn't vague advice. These are copy-paste scripts.</p>

          <div className="relative my-8 py-12 bg-[#F2F0E9] rounded-3xl overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative flex flex-col md:flex-row justify-center items-center -space-y-12 md:space-y-0 md:-space-x-20 px-4 pt-4">
              {/* Page 1 (Rotated Left) */}
              <div className="bg-white shadow-2xl transform rotate-[-6deg] md:rotate-[-12deg] z-10 w-full max-w-[220px] md:max-w-[260px] aspect-[8.5/11] border border-gray-200 overflow-hidden">
                <img src="/appreciation-scripts.png" alt="Appreciation Scripts" className="w-full h-full object-cover" />
              </div>

              {/* Page 2 (Center - Featured) */}
              <div className="bg-white shadow-2xl z-20 w-full max-w-[240px] md:max-w-[300px] aspect-[8.5/11] border border-gray-200 transform scale-110 overflow-hidden">
                <img src="/conflict-scripts.png" alt="Conflict Scripts" className="w-full h-full object-cover" />
              </div>

              {/* Page 3 (Rotated Right) */}
              <div className="bg-white shadow-2xl transform rotate-[6deg] md:rotate-[12deg] z-10 w-full max-w-[220px] md:max-w-[260px] aspect-[8.5/11] border border-gray-200 overflow-hidden">
                <img src="/intimacy-scripts.png" alt="Intimacy Scripts" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="relative text-center mt-12">
              <p className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-200 shadow-sm">
                Preview of actual book pages
              </p>
            </div>
          </div>

          <div className="mt-8 mb-4 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              I Want All 87 Scripts Like These - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Here's What Makes This Different From Everything Else You've Tried</h2>

          <p>Marriage counseling told you to "communicate better."</p>
          <p className="font-bold pl-4 border-l-2 border-red-500 mb-4">You did. He still shut down.</p>
          <p>Therapy told you to use "I feel" statements.</p>
          <p className="font-bold pl-4 border-l-2 border-red-500 mb-4">You tried. He got defensive.</p>
          <p>Self-help books told you to "schedule quality time."</p>
          <p className="font-bold pl-4 border-l-2 border-red-500 mb-4">You sat across from each other at expensive restaurants in awkward silence.</p>
          <p>Your friends told you "men just don't communicate like we do, accept it."</p>
          <p className="mt-4">But you've <span className="font-bold text-[#E67E7E]">SEEN other couples actually enjoy talking to each other.</span> So you know it's possible.</p>

          <hr className="my-8 border-gray-200" />

          <h3 className="font-bold text-lg mt-6 mb-2">They're based on actual neuroscience</h3>
          <p>Dr. Gottman studied 3,000+ couples over 40 years. He identified the <span className="font-bold bg-yellow-100/50 px-1">exact language patterns</span> that keep marriages strong vs those that predict divorce.</p>
          <p>These scripts use the patterns that work.</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They speak to how his brain actually processes information</h3>
          <p>Men process emotional information more slowly than women. They need things to be specific (not vague), one point at a time (not multiple issues), clear requests (not implied expectations).</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They're plug-and-play</h3>
          <p>You don't need to understand attachment theory. Process your childhood trauma. Get him to read a book. Convince him therapy is important. Wait until he's "ready to work on things."</p>
          <p><span className="font-bold">You just copy the script. Send it. Watch what happens.</span></p>


          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Questions You Probably Have</h2>

          <div className="space-y-4">
            <FAQItem
              question="Will he know I'm using scripts?"
              answer="No. These read like normal texts. The 'science' part is invisible to him. He just experiences you as easier to talk to."
            />
            <FAQItem
              question="What if he just doesn't care anymore?"
              answer="If he's still responding to your texts at all, there's something to work with. These scripts are specifically designed for men who seem checked out. They create safety first, then connection."
            />
            <FAQItem
              question="What if he finds out I'm using scripts and gets mad?"
              answer="These aren't manipulative 'tricks.' They're translations. You're saying what you actually mean, just in a way his brain can process. Most women report their husbands actually THANKING them for 'communicating better' without ever knowing why it suddenly got easier."
            />
            <FAQItem
              question="Isn't this just manipulation?"
              answer="No. Manipulation is getting someone to do what YOU want by being dishonest. These scripts help you express what you ACTUALLY mean in a way his brain can ACTUALLY process."
            />
            <FAQItem
              question="What if I've already tried everything?"
              answer="Good news: these scripts work especially well for recovering from past fights. They bypass the usual defensive triggers that past arguments have created."
            />
            <FAQItem
              question="Do I have to keep doing this forever?"
              answer="Most women report needing the scripts less after 30-60 days because the dynamic shifts. Once he experiences you as 'safe to open up to,' his brain relaxes around you naturally. You're essentially retraining how he responds to you."
            />
          </div>

          <div className="mt-8 mb-4 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              My Questions Are Answered - Send The Scripts - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">What Actually Happens After You Get This</h2>

          <div className="space-y-4">
            <p><span className="font-bold text-[#E67E7E]">Minute 1:</span> You download the PDF (sent instantly to your email)</p>
            <p><span className="font-bold text-[#E67E7E]">Minute 5:</span> You're scanning through looking for scripts that match your situation</p>
            <p><span className="font-bold text-[#E67E7E]">Minute 15:</span> You copy-paste your first script and send it (probably feeling skeptical)</p>
            <p><span className="font-bold text-[#E67E7E]">Hour 1:</span> He responds differently than usual (maybe just a little, but you notice)</p>
            <p><span className="font-bold text-[#E67E7E]">Day 3:</span> You've used a few scripts and conversations feel easier somehow</p>
            <p><span className="font-bold text-[#E67E7E]">Week 2:</span> He's initiating conversations. Texting you first. Asking about your day and actually listening.</p>
            <p><span className="font-bold text-[#E67E7E]">Month 1:</span> You haven't had a fight in weeks.</p>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* Enhanced Guarantee Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="w-16 h-16 text-[#E67E7E]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Our "It Works Or It's Free" Guarantee</h2>
            <p className="font-bold text-lg mb-4">Get the 87 scripts. Try them for 60 days.</p>
            <p className="mb-4">If you don't see your husband responding differently — if conversations don't get easier — if things don't start to feel better...</p>
            <p className="mb-4">Email us. We'll refund every penny. No questions asked.</p>
            <p className="mb-6">You can even keep the guide.</p>
            <p className="font-bold mb-2">Why would we do this?</p>
            <p>Because these scripts work. And we know once you see your husband actually HEAR you for the first time in months (maybe years), you're not going to ask for a refund.</p>
          </div>

          <div className="mt-8 mb-4 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              Try All 87 Scripts Risk-Free - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold serif mb-8 text-center">Compare Your Options</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Option 1: Counseling */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 opacity-80">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-6 h-6 text-red-400" />
                  <h3 className="font-bold text-lg text-gray-700">Traditional Counseling</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>💰</span> <span>$150-300 per session</span></li>
                  <li className="flex gap-2"><span>📅</span> <span>Need 8-12 sessions minimum</span></li>
                  <li className="flex gap-2"><span>📉</span> <span>Total: $1,200 - $3,600</span></li>
                  <li className="flex gap-2"><span>🕰️</span> <span>Takes 3-6 months</span></li>
                  <li className="flex gap-2"><span>❓</span> <span>May not even work</span></li>
                </ul>
              </div>

              {/* Option 2: Retreat */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 opacity-80">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-6 h-6 text-red-400" />
                  <h3 className="font-bold text-lg text-gray-700">Marriage Retreat</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><span>💰</span> <span>$2,000 - $5,000 per couple</span></li>
                  <li className="flex gap-2"><span>✈️</span> <span>Must travel / take time off</span></li>
                  <li className="flex gap-2"><span>😬</span> <span>Awkward group settings</span></li>
                  <li className="flex gap-2"><span>👋</span> <span>One weekend then alone</span></li>
                </ul>
              </div>

              {/* Option 3: Connection Code */}
              <div className="bg-white p-6 rounded-xl border-2 border-[#E67E7E] shadow-xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#E67E7E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Best Value
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-lg text-gray-900">The Connection Code</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-800 font-medium">
                  <li className="flex gap-2"><span>💰</span> <span className="text-xl font-bold text-black">$37 One-Time</span></li>
                  <li className="flex gap-2"><span>✅</span> <span>87 proven scripts instant access</span></li>
                  <li className="flex gap-2"><span>📱</span> <span>Use anytime, anywhere</span></li>
                  <li className="flex gap-2"><span>🚀</span> <span>Results in days, not months</span></li>
                  <li className="flex gap-2"><span>♾️</span> <span>Keep forever, use whenever</span></li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6 text-center">Get All 87 Scripts For $37</h2>
          <p className="text-center mb-8">Here's what you're getting:</p>

          <BookMockup />

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100 max-w-xl mx-auto">
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">The Connection Code System</span> <span className="text-gray-500 text-sm block">The complete SPARK framework & neuroscience breakdown (Value: $67)</span></div>
              </li>
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">87 Copy-Paste Scripts</span> <span className="text-gray-500 text-sm block">Word-for-word texts for every situation (Value: $97)</span></div>
              </li>
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">30-Day Action Plan</span> <span className="text-gray-500 text-sm block">Daily roadmap to reconnection (Value: $47)</span></div>
              </li>
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">Quick Reference Script Cards</span> <span className="text-gray-500 text-sm block">Save to your phone for emergencies (Value: $27)</span></div>
              </li>
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">Reading His Responses Guide</span> <span className="text-gray-500 text-sm block">Decode what he really means (Value: $37)</span></div>
              </li>
              <li className="flex gap-3">
                <Check className="text-green-500 shrink-0 mt-1" />
                <div><span className="font-bold">Personality Type Adaptation</span> <span className="text-gray-500 text-sm block">Customize scripts for his type (Value: $47)</span></div>
              </li>
            </ul>

            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-lg">Total Value: $322</p>
              <p className="text-4xl font-bold text-gray-900">Your Price Today: $37</p>
            </div>

            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg w-full px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex justify-center items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              SAVE MY MARRIAGE - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4 text-center">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">One Last Thing</h2>
          <p>You've been trying to get him to hear you for how long now?</p>
          <p className="font-bold">Months? Years?</p>
          <p className="mt-4">You've probably thought "maybe this is just how marriage is supposed to be" or "maybe I'm expecting too much" or "maybe he's just not capable of this kind of connection."</p>
          <p className="mt-4">The husbands in those testimonials above seemed just as checked out. Just as defensive. Just as "not capable of emotional connection."</p>
          <p className="mt-4">Until their wives started speaking a language their brains could actually process.</p>
          <p className="font-bold mt-4">Then everything changed.</p>
          <p className="mt-4">Not overnight. But fast enough that these women knew something was different within days.</p>

          <div className="my-8 bg-rose-50 p-6 rounded-lg text-center">
            <p className="font-medium text-lg mb-4">You can keep trying the same approach and hoping for different results.</p>
            <p className="font-medium text-lg mb-4">Or you can try something that's already worked for 500+ other women in your exact situation.</p>
            <p className="font-bold text-xl">$37. 87 scripts. 60-day guarantee.</p>
            <p className="font-bold text-xl mt-2">What do you actually have to lose?</p>
          </div>

          <div className="text-center mb-12">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              Yes, I Want to Save My Marriage - Get The Scripts - $37 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8 mt-12 pb-24">
          <div className="flex justify-center items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="font-bold mb-4">Trusted by 500+ wives</p>
          <p>🔒 Secure checkout • Instant access • Money-back guarantee</p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="/terms" className="hover:text-gray-900 underline">Terms of Service</a>
            <a href="/privacy" className="hover:text-gray-900 underline">Privacy Policy</a>
            <a href="/support" className="hover:text-gray-900 underline">Support</a>
          </div>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
          <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white w-full py-4 rounded-xl font-bold shadow-2xl flex justify-center items-center gap-2 px-6" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
            Get All 87 Scripts - $37 <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        className="w-full text-left p-4 font-bold flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-gray-100 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
