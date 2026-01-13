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
          <div className="flex justify-center items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="font-bold text-sm tracking-widest uppercase text-gray-500 mb-6">TRUSTED BY 500+ WIVES</p>

          <h1 className="text-3xl md:text-5xl font-bold serif leading-tight mb-8">
            The 87 Scripts That Made Him Feel Like "We're On The Same Team Again"
          </h1>
        </div>

        {/* Intro Body */}
        <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed">
          <p>Look, I'm not going to promise this will make your husband "fall in love with you again" or whatever.</p>
          <p>That's not how this works.</p>
          <p>What these scripts actually do is translate what you're trying to say into words his brain can actually process without triggering his whole defensive shutdown thing.</p>
          <p>Same meaning. Different structure. He finally hears you.</p>

          <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-[#E67E7E] my-8 shadow-sm">
            <p className="font-bold text-[#E67E7E] m-0">
              And yeah, it works even if therapy failed. Even if he "doesn't do feelings." Even if you've been having the same fight for three years.
            </p>
          </div>

          <div className="my-8 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS - $19 <ArrowRight className="w-5 h-5" />
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

          <p>Sarah sent one text.</p>
          <p>Script #34 from the vulnerability chapter.</p>
          <p>Her husband had been distant for months. One-word answers. Came home, ate dinner in silence, went to his office.</p>
          <p>She'd tried everything. Date nights where they sat across from each other with nothing to say. Therapy sessions he hated. Those "I feel" statements that just made him more defensive.</p>
          <p>Then she used the script.</p>
          <p>Within 20 minutes he was telling her about work stress he'd been carrying since March. Stuff he'd never mentioned. He cried. Actually cried.</p>
          <p>They talked for two hours.</p>
          <p>Next day he texted her: "I feel like we're on the same team again."</p>

          <hr className="my-12 border-gray-200" />

          <p>Here's the thing about that text Sarah sent.</p>
          <p>It wasn't magic. It wasn't manipulation.</p>
          <p>She said the exact same thing she'd been trying to say for months.</p>
          <p>She just structured it differently.</p>
          <p>And his brain stayed calm enough to actually hear her.</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Why Everything You've Tried Hasn't Worked (And Why That's Not Your Fault)</h2>

          <p>You know what every marriage therapist, relationship book, and well-meaning friend told you?</p>
          <p className="font-bold italic text-lg text-center my-6">"Just communicate your needs clearly."</p>
          <p>Cool. You did that.</p>
          <p>He said "okay" and nothing changed.</p>
          <p>Or he got defensive. Or he walked away. Or he gave you that blank stare like you were speaking a language he doesn't understand.</p>
          <p>Because (and I'm sorry no one told you this earlier) he kind of... isn't understanding you.</p>
          <p>Not because he's dumb. Not because he doesn't care.</p>
          <p>Because men's brains process emotional information completely differently than women's brains do.</p>
          <p>Dr. John Gottman spent 40 years studying thousands of couples. He can predict divorce with 94% accuracy just by listening to how couples talk to each other for 15 minutes.</p>
          <p>And one of the biggest things he found?</p>
          <p>When women express feelings the way that feels natural to us, men's brains interpret it as a threat.</p>
          <p>Their amygdala (the fight-or-flight part) activates. Stress hormones flood their system. The part of their brain that processes empathy literally goes offline.</p>
          <p>They can't access the part that helps them understand you.</p>
          <p>So they do what any threatened animal does. Freeze. Fight. Flee.</p>
          <p>That's why he goes silent. Gets defensive. Leaves the room.</p>
          <p>His body thinks he's being attacked.</p>

          <hr className="my-12 border-gray-200" />

          <p>But when you restructure the same message using specific patterns that keep his nervous system calm?</p>
          <p>He can actually hear you.</p>
          <p>Wild, right?</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Let Me Show You What I Mean</h2>

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
              <div className="flex flex-col gap-1 my-4">
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[95%] shadow-sm text-sm">
                  <p>"I want to share something with you and get your thoughts. I know you're working hard for us. I miss our connection time together. Would you be willing to spend 20 min tonight just talking?"</p>
                </div>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[95%] shadow-sm text-sm">
                  <p>"No pressure - let me know what you think."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Read 4:12 PM</p>
              </div>

              <div className="border-t border-green-200 pt-4 mt-2">
                <p className="font-bold text-gray-900 text-sm">His response:</p>
                <p className="font-medium text-green-900">"Yeah, I'd like that. Give me 10 to finish this and I'm all yours."</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-12 text-sm">
            <p className="font-bold mb-2">Why Script #34 works:</p>
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
                  <p className="text-xs text-gray-500">Married 12 years</p>
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
                  <p className="text-xs text-gray-500">Married 9 years</p>
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
                  <p className="text-xs text-gray-500">Married 11 years</p>
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
                  <p className="text-xs text-gray-500">Married 15 years</p>
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
                  <p className="text-xs text-gray-500">Married 13 years</p>
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

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">So What's Actually In This Thing?</h2>

          <p>87 scripts. Organized by the situation you're in.</p>
          <p>Daily connection stuff. How to start difficult conversations. Intimacy recovery when that's been dead for months. Conflict resolution that doesn't turn into World War 3. Getting him to open up about what's actually wrong. Setting boundaries without sounding like his mom. Emergency scripts for when things are falling apart right now.</p>
          <p>I'm going to walk through each section so you know what you're getting.</p>

          <hr className="my-8 border-gray-200" />

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 1: Daily Connection Scripts (1-12)</h3>
              <p className="italic text-gray-600 mb-4">The texts that keep him engaged during the day without being needy or annoying.</p>
              <p>These scripts actually work because they give him something specific to respond to. And they make him feel appreciated instead of interrogated.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <p className="text-xs text-gray-400 text-center mb-1">Today 2:30 PM</p>
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #4: "I was thinking about how you [specific action] earlier. That really meant a lot to me. Thank you."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: It's specific, it's about something that already happened (so you're not asking for anything), and it's just acknowledgment.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 2: Conversation Starter Scripts (13-24)</h3>
              <p className="italic text-gray-600 mb-4">How to bring up something important without triggering his "oh god what did I do now" panic.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #18: "I want to share something with you and get your thoughts. No pressure, just curious what you think about this."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: "Get your thoughts" activates his problem-solver brain. "No pressure" is a safety signal.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 3: Intimacy Recovery Scripts (25-38)</h3>
              <p className="italic text-gray-600 mb-4">For when the physical connection has been... yeah.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #31: "I miss being close to you. Not in a 'you're doing something wrong' way. I genuinely just miss US."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: "I miss" is about your feeling, not his failure. You're preemptively addressing his biggest fear (that you're mad at him).</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 4: Conflict Resolution Scripts (39-54)</h3>
              <p className="italic text-gray-600 mb-4">How to address actual problems without starting World War 3.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #47: "I need your help figuring something out. You're really good at [skill]. Can I get 10 minutes of your brain?"</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: "Need your help" activates his hero mode. Acknowledging his competence makes him feel valued instead of attacked.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 5: Vulnerability Scripts (55-68)</h3>
              <p className="italic text-gray-600 mb-4">Getting him to actually tell you what's wrong instead of saying "I'm fine."</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #62: "I know you've got a lot on your plate. I'm here if you want to talk about it. And also totally fine if you don't. Just want you to know I'm on your side."</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: You're offering support without demanding he take it. And "on your side" positions you as teammate, not opponent.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 6: Boundary Scripts (69-78)</h3>
              <p className="italic text-gray-600 mb-4">How to ask for what you need without starting a fight.</p>

              <div className="flex flex-col gap-1 my-6 max-w-sm mx-auto">
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
                <div className="bg-[#007AFF] text-white p-3 rounded-2xl rounded-tr-sm self-end max-w-[90%] shadow-sm text-sm">
                  <p>Script #84: "I don't want to fight. I want to understand you. Can we start over?"</p>
                </div>
                <p className="text-[10px] text-gray-400 text-right pr-2">Delivered</p>
              </div>

              <p>Why this works: States what you DO want (not what you don't). "Understand you" makes it about him, not you. "Start over" offers hope.</p>
            </div>
          </div>

          <div className="my-12 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS - $19 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Here's What Makes This Different From Everything Else You've Tried</h2>

          <p>Marriage counseling told you to "communicate better."</p>
          <p>You did. He still shut down.</p>
          <p>Therapy told you to use "I feel" statements.</p>
          <p>You tried. He got defensive.</p>
          <p>Self-help books told you to "schedule quality time."</p>
          <p>You sat across from each other at expensive restaurants in awkward silence.</p>
          <p>Your friends told you "men just don't communicate like we do, accept it."</p>
          <p>But you've SEEN other couples actually enjoy talking to each other. So you know it's possible.</p>

          <hr className="my-8 border-gray-200" />

          <h3 className="font-bold text-lg mt-6 mb-2">They're based on actual neuroscience</h3>
          <p>Dr. Gottman studied 3,000+ couples over 40 years. He identified the exact language patterns that keep marriages strong vs those that predict divorce.</p>
          <p>These scripts use the patterns that work.</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They speak to how his brain actually processes information</h3>
          <p>Men process emotional information more slowly than women. They need things to be specific (not vague), one point at a time (not multiple issues), clear requests (not implied expectations).</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They're plug-and-play</h3>
          <p>You don't need to understand attachment theory. Process your childhood trauma. Get him to read a book. Convince him therapy is important. Wait until he's "ready to work on things."</p>
          <p>You just copy the script. Send it. Watch what happens.</p>


          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Questions You Probably Have</h2>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg">"Will he know I'm using scripts?"</p>
              <p>No. These read like normal texts.</p>
              <p>The "science" part is invisible to him. He just experiences you as easier to talk to.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"What if he just doesn't care anymore?"</p>
              <p>If he's still responding to your texts at all, there's something to work with.</p>
              <p>These scripts are specifically designed for men who seem checked out. They create safety first, then connection.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"Isn't this just manipulation?"</p>
              <p>No. Manipulation is getting someone to do what YOU want by being dishonest.</p>
              <p>These scripts help you express what you ACTUALLY mean in a way his brain can ACTUALLY process.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"What if I've already tried everything?"</p>
              <p>Good news: these scripts work especially well for recovering from past fights.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"Do I have to use these forever?"</p>
              <p>No. Once he experiences you as "safe to open up to," his brain starts to relax around you naturally.</p>
            </div>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">What Actually Happens After You Get This</h2>

          <div className="space-y-4">
            <p><span className="font-bold">Minute 1:</span> You download the PDF (sent instantly to your email)</p>
            <p><span className="font-bold">Minute 5:</span> You're scanning through looking for scripts that match your situation</p>
            <p><span className="font-bold">Minute 15:</span> You copy-paste your first script and send it (probably feeling skeptical)</p>
            <p><span className="font-bold">Hour 1:</span> He responds differently than usual (maybe just a little, but you notice)</p>
            <p><span className="font-bold">Day 3:</span> You've used a few scripts and conversations feel easier somehow</p>
            <p><span className="font-bold">Week 2:</span> He's initiating conversations. Texting you first. Asking about your day and actually listening.</p>
            <p><span className="font-bold">Month 1:</span> You haven't had a fight in weeks.</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="w-16 h-16 text-[#E67E7E]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Our "It Works Or It's Free" Guarantee</h2>
            <p>Get the 87 scripts. Try them for 60 days.</p>
            <p>If you don't see your husband responding differently - if conversations don't get easier - if things don't start to feel better...</p>
            <p>Email us. We'll refund every penny. No questions asked.</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6 text-center">Get All 87 Scripts For $19</h2>
          <p className="text-center mb-8">Here's what you're getting:</p>

          <BookMockup />

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100 max-w-xl mx-auto">
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>All 87 word-for-word texting scripts organized by situation</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 1: Daily Connection Scripts (1-12)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 2: Conversation Starter Scripts (13-24)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 3: Intimacy Recovery Scripts (25-38)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 4: Conflict Resolution Scripts (39-54)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 5: Vulnerability Scripts (55-68)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 6: Boundary Scripts (69-78)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Chapter 7: Emergency Scripts (79-87)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>BONUS Chapter 8: The science behind why this works</span></li>
            </ul>

            <div className="text-center mb-6">
              <p className="text-gray-400 line-through text-lg">Total Value: $197</p>
              <p className="text-4xl font-bold text-gray-900">Your Price Today: $19</p>
            </div>

            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg w-full px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex justify-center items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS NOW - $19 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-4 text-center">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">One Last Thing</h2>
          <p>You've seen other couples actually enjoy talking to each other. You know it's possible.</p>
          <p>The husbands in those testimonials above seemed just as checked out. Just as defensive. Just as "not capable of emotional connection."</p>
          <p>Until their wives started speaking a language their brains could actually process.</p>

          <div className="my-8 bg-rose-50 p-6 rounded-lg text-center">
            <p className="font-bold text-xl">$19. 87 scripts. 60-day guarantee.</p>
            <p className="font-bold text-xl mt-2">What do you actually have to lose?</p>
          </div>

          <div className="text-center mb-12">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET THE SCRIPTS - $19 <ArrowRight className="w-5 h-5" />
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
      </main>
    </div>
  );
};

export default LandingPage;
