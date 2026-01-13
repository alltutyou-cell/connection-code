
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ShieldCheck,
  Star,
  Heart,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import DoomScrollSection from './DoomScrollSection';
import BookMockup from './BookMockup';
import ScriptComparison from './ScriptComparison';

// --- Types ---

interface Testimonial {
  name: string;
  age: number;
  location: string;
  marriedYears: number;
  title: string;
  content: string;
  image: string;
}

// --- Components ---

const FadeInLeft: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0s' }) => {
  return (
    <div className="animate-slide-in-left" style={{ animationDelay: delay }}>{children}</div>
  )
}

const FadeInRight: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0s' }) => {
  return (
    <div className="animate-slide-in-right" style={{ animationDelay: delay }}>{children}</div>
  )
}


const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 px-6 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#E67E7E] transition-colors"
      >
        <span className="font-semibold text-lg pr-4 text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}>
        <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">{answer}</div>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false);
  };

  const testimonials: Testimonial[] = [
    {
      name: "Sarah T.", age: 38, location: "Pittsburgh, PA", marriedYears: 12,
      title: "He actually APOLOGIZED for being distant...",
      content: "I tried one of the vulnerability scripts, and I'm not kidding , within 20 minutes he opened up about work stress he's been carrying for months. He actually CRIED and apologized for being distant. We talked for 2 hours. I can't remember the last time we talked for 2 hours about anything besides the kids' schedules.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Jennifer M.", age: 34, location: "Austin, TX", marriedYears: 9,
      title: "From 3 texts per week to 15+ daily conversations",
      content: "I was ready to call a lawyer. I felt completely invisible. I started using the SPARK appreciation scripts from Chapter 4, and I'm actually crying writing this , he started texting me throughout the day just to share random thoughts. Yesterday he sent me a funny meme and said 'this made me think of you.' It's been 19 days and we've gone from maybe 3 meaningful exchanges per WEEK to 15+ actual conversations DAILY. I have my best friend back.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Amanda K.", age: 41, location: "Denver, CO", marriedYears: 14,
      title: "My 8-year-old noticed the change...",
      content: "The playful scripts felt silly at first, but I tried them anyway because I was desperate. Within a week, my husband started actually laughing again. Last night my daughter said 'You and daddy are being weird and giggly again like you used to be.' My EIGHT-YEAR-OLD noticed we're happy again. If that's not proof this works, I don't know what is.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Lisa R.", age: 36, location: "Miami, FL", marriedYears: 11,
      title: "After $8,000 in failed marriage counseling...",
      content: "We spent $8,000 on marriage therapy over 18 months. My husband hated every session. We quit therapy and I was ready to quit the marriage. Then I found The Connection Code. The conflict resolution scripts in Chapter 7 gave me the exact words I needed. We solved a 3-year-running argument about his mother in ONE 15-minute conversation. I'm simultaneously furious that a $19 book did what $8,000 of therapy couldn't... and incredibly grateful that it exists.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Michelle S.", age: 39, location: "Portland, OR", marriedYears: 15,
      title: "He planned a date night WITHOUT me asking...",
      content: "I haven't felt desired by my husband in probably 5 years. Sex was obligatory. Affection was nonexistent. I used the intimacy scripts and almost immediately he started initiating physical touch again. Not even sexual , just touching my back when he walks by, holding my hand while we watch TV. Last week he PLANNED A DATE NIGHT without me asking or suggesting. He hasn't done that in literally 7 years. I cried happy tears in the restaurant bathroom.",
      image: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
      name: "Rebecca N.", age: 33, location: "Chicago, IL", marriedYears: 8,
      title: "His friends noticed and asked what changed...",
      content: "My husband's best friend pulled me aside at a party and said 'What did you do to Dave? He won't shut up about how happy he is.' I almost laughed because I was thinking the same thing! The appreciation scripts made such a dramatic difference that OTHER PEOPLE noticed. Dave went from barely acknowledging my existence to texting me during his lunch breaks to tell me he's thinking about me. In 6 weeks. Six weeks.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Melissa W.", age: 42, location: "Nashville, TN", marriedYears: 16,
      title: "We were 2 weeks from separation papers...",
      content: "I had already consulted with a divorce attorney. We were DONE. I was planning how to tell the kids. I bought this book as a last-ditch 'nothing left to lose' attempt. I figured worst case, I waste $19. Best case, maybe we could be civil co-parents. I didn't expect my marriage to actually transform. But that's exactly what happened. The 30-Day Action Plan in Chapter 10 gave me a roadmap. We're now 90 days in and I can honestly say I'm more in love with him than I was on our wedding day.",
      image: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
      name: "Katherine L.", age: 44, location: "Seattle WA", marriedYears: 15,
      title: "I was planning my exit strategy... now I'm planning our anniversary trip",
      content: "I had already started looking at apartments. I was done. Fifteen years of marriage and I felt like I was living with a stranger who occasionally grunted responses at me. I downloaded this book thinking 'one last attempt before I call it quits.' I used one of the vulnerability scripts and for the first time in YEARS he actually opened up about how stressed and overwhelmed he's been feeling. We talked for over an hour - real talking, not logistics. Three weeks in and he's already suggested we plan a special trip for our anniversary next month. I literally had one foot out the door and now I'm excited about our future together again.",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#1a1a1a] overflow-x-hidden">
      {/* Sticky Header CTA */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 py-3 px-6 flex justify-between items-center transition-all duration-300 shadow-sm">
        <div className="flex items-center gap-2">
          <Heart className="text-[#E67E7E] w-5 h-5 fill-current" />
          <span className="font-bold tracking-tight text-lg serif italic">The Connection Code</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm font-medium text-gray-500">Only $19</span>
          <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
            TRANSFORM MY MARRIAGE
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <a href="#order" onClick={() => setIsNavOpen(false)} className="block w-full text-center bg-[#E67E7E] text-white py-4 rounded-xl font-bold text-lg mb-4">Get Instant Access</a>
          <a href="#pain" onClick={() => setIsNavOpen(false)} className="block py-4 border-b border-gray-100 text-lg">Does This Sound Familiar?</a>
          <a href="#framework" onClick={() => setIsNavOpen(false)} className="block py-4 border-b border-gray-100 text-lg">The Framework</a>
          <a href="#testimonials" onClick={() => setIsNavOpen(false)} className="block py-4 border-b border-gray-100 text-lg">Success Stories</a>
          <a href="#faq" onClick={() => setIsNavOpen(false)} className="block py-4 text-lg">FAQ</a>
        </div>
      )}

      {/* Module 1: Hero */}
      {/* Module 1: Hero */}
      <header className="pt-24 pb-8 px-6 bg-gradient-to-b from-white to-[#FAF9F6] text-center overflow-hidden flex items-center min-h-screen md:min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-12 text-left">
          <div className="flex-1 md:pr-4 animate-fade-in-up md:mt-0">
            {/* Trust Strip */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Trusted by 500+ wives</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#E67E7E] px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 border border-rose-100">
              <Sparkles className="w-3 h-3" />
              New Method
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl serif font-bold leading-[1.1] mb-3 text-gray-900 tracking-tight">
              The 'SPARK' Texting Method That Made My Distant Husband <span className="italic text-[#E67E7E] relative whitespace-nowrap">
                Fall In Love With Me Again
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-rose-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>... In 19 Days
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mb-6 leading-relaxed font-light max-w-xl">
              The exact word-for-word scripts that transformed my cold, one-word-text marriage into the passionate connection I thought was gone forever.
              <span className="block mt-1 text-xs md:text-sm text-gray-400 italic">(Even after therapy, date nights, and romance books all failed)</span>
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-6 py-3 rounded-lg font-bold text-base shadow-lg w-full sm:w-auto text-center hover:scale-105 transition-transform flex items-center justify-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
                GET INSTANT ACCESS - JUST $19 <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-xs h-full py-3 px-2 w-full sm:w-auto">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative animate-fade-in-up scale-75 md:scale-100 origin-top md:origin-center -mt-8 md:mt-0" style={{ animationDelay: '0.2s' }}>
            {/* Abstract blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-rose-100/40 to-blue-50/40 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <BookMockup />
          </div>
        </div>
      </header>

      {/* Module 2: Problem Amplification */}
      <Section id="pain" className="bg-white">
        <DoomScrollSection />

        <div className="max-w-3xl mx-auto mt-20 text-lg text-gray-700 leading-relaxed font-light space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Here's what's really keeping you awake:</h3>
          <p>It's not just the cold texts or the lack of conversation.</p>
          <p>It's the crushing realization that you're becoming roommates who happen to share a bed.</p>
          <p>It's the fear that he's one bad day away from deciding this marriage isn't worth the effort.</p>
          <p>It's watching your 8-year-old daughter notice that Daddy never hugs Mommy anymore.</p>
          <p className="font-bold">It's the terrifying thought that this is just what marriage becomes , and you have 40 more years of this ahead of you.</p>
        </div>
      </Section>

      {/* Module 3: False Solutions */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl serif mb-6 italic font-bold">Why Everything You've Tried Has Failed</h2>
            <p className="text-xl text-gray-600">(And Why That's Not Your Fault)</p>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10">You've done the work. You've read The 5 Love Languages. You've listened to marriage podcasts. So why isn't it working?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Expert Advice</div>
              <p className="text-gray-900 font-bold text-xl mb-4">"Just communicate your needs clearly."</p>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <p className="text-gray-600 italic">The Reality: You did. He responded with "okay" and nothing changed.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Expert Advice</div>
              <p className="text-gray-900 font-bold text-xl mb-4">"Schedule quality time together."</p>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <p className="text-gray-600 italic">The Reality: You sat across from each other in forced silence at expensive restaurants.</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-10 rounded-3xl border-2 border-rose-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#E67E7E]"></div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Truth They Won't Tell You:</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              All that advice assumes your husband processes emotional information the same way you do. But research shows men's brains process emotion differently. When you share feelings the way that feels natural to you...
              <span className="font-bold text-[#E67E7E] block mt-2 text-xl">His brain literally interprets it as a threat or a problem to escape from.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Module 4: Hidden Obstacle */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif mb-10 text-center font-bold italic">The Hidden Truth</h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-light">
            <p>I need to tell you something that might make you angry at first.</p>
            <p className="font-bold text-gray-900 text-xl">Your marriage problems aren't actually relationship problems. They're communication problems disguised as compatibility issues.</p>
            <p>Dr. John Gottman can predict divorce with 94% accuracy just by listening to a couple communicate for 5 minutes. It's not about being smarter or more compatible.</p>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-8 shadow-inner">
              <h3 className="font-bold text-blue-900 mb-6 flex items-center gap-2 text-xl"><MessageCircle className="w-6 h-6" /> The Translation Gap</h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <span className="flex-1 font-medium text-gray-800 bg-white p-3 rounded-lg shadow-sm border border-blue-100">You say: "I miss feeling connected to you"</span>
                  <ArrowRight className="text-blue-300 hidden md:block" />
                  <span className="flex-1 italic text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-blue-100">He hears: "You're failing as a husband and I'm about to list all the ways"</span>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <span className="flex-1 font-medium text-gray-800 bg-white p-3 rounded-lg shadow-sm border border-blue-100">You say: "We need to talk about us"</span>
                  <ArrowRight className="text-blue-300 hidden md:block" />
                  <span className="flex-1 italic text-gray-600 bg-white p-3 rounded-lg shadow-sm border border-blue-100">He hears: "Emergency. Prepare for criticism. Escape if possible."</span>
                </div>
              </div>
            </div>

            <p>It's not that he doesn't care. It's that the way you're communicating triggers his defensive nervous system response. And once his body floods with stress hormones, his capacity for empathy shuts down.</p>
            <p className="font-medium text-gray-900">But what if you could communicate the exact same needs... but in a language that makes his brain feel safe instead of threatened?</p>
          </div>
        </div>
      </Section>



      {/* Module 6: SPARK Framework */}
      <Section id="framework" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl serif mb-6 italic font-bold tracking-tight">The SPARK Framework</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">The 5-Step System That Turns Any Conversation Into Connection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { l: 'S', n: 'Set Temperature', d: 'Create safety first. "I want to share something and get your thoughts..."' },
            { l: 'P', n: 'Present One Point', d: 'Keep it clear. One specific thing. No laundry lists.' },
            { l: 'A', n: 'Acknowledge Him', d: 'Validating his view prevents defensiveness. "I know you\'re working hard..."' },
            { l: 'R', n: 'Request Action', d: 'Specific, doable, time-bound requests. "Would you be willing to..."' },
            { l: 'K', n: 'Keep Door Open', d: 'No pressure. Give him agency to choose. "Let me know what you think."' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white rounded-3xl border border-gray-100 text-center hover:bg-rose-50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                <span className="text-3xl font-black text-[#E67E7E] font-serif">{item.l}</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.n}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <h3 className="font-bold text-red-800 mb-4 border-b border-red-200 pb-2">❌ THE TRADITIONAL APPROACH</h3>
            <p className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2">Triggers Defensive Response</p>
            <p className="italic text-gray-600 mb-4">"We need to talk. I've been feeling really disconnected from you lately, especially since you started working longer hours... which reminds me of when my dad was never around. I know you're working hard but I miss us. I don't want to end up like my parents. I need you to understand how this affects me."</p>
            <div className="bg-white p-4 rounded-xl text-sm text-gray-500 border border-red-100">
              <span className="font-bold block mb-1">What Happens In His Brain:</span>
              Stress hormones flood his system. He feels criticized for his character. His nervous system screams "ESCAPE". He shuts down.
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
            <h3 className="font-bold text-green-800 mb-4 border-b border-green-200 pb-2">✅ THE SPARK APPROACH</h3>
            <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Creates Safety & Connection</p>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium mb-1"><span className="font-extrabold text-green-700">S - Set the Temperature:</span> "I want to share something with you and get your thoughts."</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide bg-green-100/50 inline-block px-2 py-0.5 rounded ml-6">His Brain: "Okay, this is safe. She values my input."</p>
              </div>

              <div>
                <p className="font-medium mb-1"><span className="font-extrabold text-green-700">P - Present One Point:</span> "I miss our connection time together."</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide bg-green-100/50 inline-block px-2 py-0.5 rounded ml-6">His Brain: "One specific thing. I can process this."</p>
              </div>

              <div>
                <p className="font-medium mb-1"><span className="font-extrabold text-green-700">A - Acknowledge His Perspective:</span> "I know you're working hard for our future, and I appreciate that."</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide bg-green-100/50 inline-block px-2 py-0.5 rounded ml-6">His Brain: "She sees me as good. This isn't criticism."</p>
              </div>

              <div>
                <p className="font-medium mb-1"><span className="font-extrabold text-green-700">R - Request Specific Action:</span> "Would you be willing to go for a 30-minute walk with me on Sunday mornings?"</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide bg-green-100/50 inline-block px-2 py-0.5 rounded ml-6">His Brain: "Clear request. I can say yes or no. I can succeed at this."</p>
              </div>

              <div>
                <p className="font-medium mb-1"><span className="font-extrabold text-green-700">K - Keep Door Open:</span> "Thanks for listening. Let me know what you think."</p>
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide bg-green-100/50 inline-block px-2 py-0.5 rounded ml-6">His Brain: "No pressure for immediate response. I have agency here."</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl text-sm text-gray-600 border border-green-100 mt-8 shadow-sm">
              <span className="font-bold block mb-3 text-base text-green-800">What Happens In His Brain:</span>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start"><span className="text-green-500 font-bold">→</span> His nervous system stays calm and receptive</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 font-bold">→</span> He understands exactly what you need</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 font-bold">→</span> He feels respected and valued, not criticized</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 font-bold">→</span> His problem-solving abilities activate (instead of shutting down)</li>
                <li className="flex gap-2 items-start"><span className="text-green-500 font-bold">→</span> He actually wants to help because it feels good to do so</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto space-y-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">See the difference?</h3>
            <p className="text-2xl text-gray-700 italic font-serif">Same need. Same desire for connection.<br />Completely different neurological response.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-rose-50 p-8 md:p-10 rounded-[2.5rem] border border-rose-100 shadow-lg">
              <h4 className="font-bold text-xl mb-8 text-gray-900">This is why SPARK works when therapy, books, and date nights have failed:</h4>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start"><div className="bg-[#E67E7E] rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-3 h-3 text-white" /></div> <span className="text-gray-800 font-medium">SPARK works CONSTRUCTIVELY with male psychology instead of fighting against it</span></li>
                <li className="flex gap-4 items-start"><div className="bg-[#E67E7E] rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-3 h-3 text-white" /></div> <span className="text-gray-800 font-medium">SPARK creates safety instead of triggering defensive responses</span></li>
                <li className="flex gap-4 items-start"><div className="bg-[#E67E7E] rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-3 h-3 text-white" /></div> <span className="text-gray-800 font-medium">SPARK is specific and actionable instead of vague and overwhelming</span></li>
                <li className="flex gap-4 items-start"><div className="bg-[#E67E7E] rounded-full p-1 mt-1 shrink-0"><CheckCircle2 className="w-3 h-3 text-white" /></div> <span className="text-gray-800 font-medium">SPARK makes him feel like the hero instead of the problem</span></li>
              </ul>
            </div>

            <div className="bg-[#FAF9F6] p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-md">
              <h4 className="font-bold text-xl mb-6 text-gray-900">And here's the best part:</h4>
              <p className="mb-6 text-gray-600 font-medium">Once you understand the framework, you can apply it to <span className="italic font-bold text-gray-900">ANY</span> situation:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3 items-center"><span className="text-[#E67E7E] font-bold text-xl">→</span> When you need more help around the house</li>
                <li className="flex gap-3 items-center"><span className="text-[#E67E7E] font-bold text-xl">→</span> When you're craving physical intimacy</li>
                <li className="flex gap-3 items-center"><span className="text-[#E67E7E] font-bold text-xl">→</span> When you want deeper emotional connection</li>
                <li className="flex gap-3 items-center"><span className="text-[#E67E7E] font-bold text-xl">→</span> When you need to resolve conflict</li>
                <li className="flex gap-3 items-center"><span className="text-[#E67E7E] font-bold text-xl">→</span> When you just want to feel appreciated and seen</li>
              </ul>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl text-white shadow-xl">
            <p className="text-xl font-medium mb-3">The scripts I'm about to share with you are based on this exact framework.</p>
            <p className="text-lg text-gray-300">Word-for-word conversations that work with his nervous system instead of against it. <span className="text-[#E67E7E] font-bold">And they work fast.</span></p>
          </div>
        </div>
      </Section>

      {/* Module 7: Proof Avalanche */}
      <Section id="testimonials" className="bg-[#FAF9F6]">
        <h2 className="text-3xl md:text-5xl serif text-center mb-16 font-bold tracking-tight">What Happened When Real Women Used These Scripts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                <Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" />
              </div>
              <h4 className="text-xl font-bold mb-4 font-serif text-gray-900">"{t.title}"</h4>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-rose-50" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}, {t.age}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t.location} • Married {t.marriedYears} years</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-4">Common Threads:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-700">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">✓ Fast results (2-3 weeks)</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">✓ Works unilaterally</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">✓ No expensive therapy</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">✓ Sustainable</span>
          </div>
        </div>
      </Section>

      {/* Module 8: Transformation Path (Visualization) */}
      <Section className="bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl serif mb-6 font-bold">Imagine Waking Up 30 Days From Now...</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-rose-100 hidden md:block"></div>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-start relative group">
                <div className="bg-rose-50 p-3 rounded-full text-[#E67E7E] font-bold shrink-0 z-10 border-4 border-white shadow-sm w-max md:w-auto">07:00 AM</div>
                <div className="bg-[#FAF9F6] p-6 rounded-2xl flex-grow hover:bg-rose-50 transition-colors">
                  <h3 className="text-xl font-bold mb-2">The Morning Text</h3>
                  <p className="text-gray-600">Your phone buzzes. Instead of that familiar dread wondering if it's another one-word response... You actually smile. It's him: "Already missing you. Have an amazing day." Your heart does that little flutter thing it hasn't done in years.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start relative group">
                <div className="bg-rose-50 p-3 rounded-full text-[#E67E7E] font-bold shrink-0 z-10 border-4 border-white shadow-sm w-max md:w-auto">06:30 PM</div>
                <div className="bg-[#FAF9F6] p-6 rounded-2xl flex-grow hover:bg-rose-50 transition-colors">
                  <h3 className="text-xl font-bold mb-2">The Homecoming</h3>
                  <p className="text-gray-600">He walks through the door. His face lights up when he sees you. He pulls you into a real, full-body hug,not the obligatory side-hug. Your daughter says "Eww you guys are being gross," but she's smiling.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start relative group">
                <div className="bg-rose-50 p-3 rounded-full text-[#E67E7E] font-bold shrink-0 z-10 border-4 border-white shadow-sm w-max md:w-auto">10:00 PM</div>
                <div className="bg-[#FAF9F6] p-6 rounded-2xl flex-grow hover:bg-rose-50 transition-colors">
                  <h3 className="text-xl font-bold mb-2">The Connection</h3>
                  <p className="text-gray-600">You're lying in bed, really talking. He reaches for your hand and says "I love you" first. And he means it. You sleep peacefully for the first time in months.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl font-serif italic text-gray-800 mb-8 max-w-2xl mx-auto">This isn't fantasy. This is what happens when you stop fighting his nervous system and start working with it.</p>
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl inline-block hover:shadow-2xl transition-all hover:-translate-y-1" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              YES, I WANT THIS FUTURE
            </a>
          </div>
        </div>
      </Section>

      {/* Module 9: Inside Look (New Component Design) */}
      <Section className="bg-[#FAF9F6] rounded-[3rem] my-12 overflow-hidden mx-4 md:mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif italic mb-6 font-bold">A Peek Inside The Scripts</h2>
          <p className="text-lg text-gray-600">I'm going to give you 3 complete scripts right here. Because I want you to see exactly how simple and powerful these are.</p>
        </div>

        <ScriptComparison
          situation="Situation 1: When You Need Help Around The House"
          before={{
            label: "What You're Sending Now (The Trigger)",
            text: "You never help with dinner anymore! I'm doing everything while you just sit there. It's not fair.",
            why: 'It triggers his "Defensive Nervous System." He hears failure, not a request for love.',
            time: "6:15 PM"
          }}
          after={{
            label: "The SPARK Script (The Connection)",
            text: "I want us to figure something out together. I'd love more help with dinners this week. I know you've been swamped at work lately. Would you prefer to cook on Tue/Thu, or handle meal planning for next week? Let me know what sounds doable.",
            why: "It creates safety. It gives him options. It makes him a collaborator instead of a defendant.",
            time: "6:20 PM"
          }}
        />

        <ScriptComparison
          situation="Situation 2: When You're Feeling Disconnected And Need Emotional Intimacy"
          before={{
            label: "What You're Sending Now (The Trigger)",
            text: "I feel like we're just roommates. We never talk anymore. You're always on your phone or watching TV. I miss when we used to have real conversations. I feel so alone even though we're in the same room.",
            why: 'He feels criticized, shuts down, or says "I don\'t know what you want from me."',
            time: "8:30 PM"
          }}
          after={{
            label: "The SPARK Script (The Connection)",
            text: "I want to share something with you and I want you to know we're okay. I miss having deeper conversations with you. I know you show love in lots of ways, and I appreciate that. Would you be willing to spend 20 minutes tonight just talking? No phones, just us. What do you think?",
            why: "Reassurance first. Specific feeling. You see him positively. Clear request. He has input.",
            time: "8:32 PM"
          }}
        />

        <ScriptComparison
          situation="Situation 3: When You Want Physical Intimacy"
          before={{
            label: "What You're Sending Now (The Trigger)",
            text: "We never have sex anymore. It's been three weeks. Is there something wrong with me? Why don't you want me?",
            why: 'It creates pressure and guilt. Obligation destroys desire.',
            time: "10:15 PM"
          }}
          after={{
            label: "The SPARK Script (The Connection)",
            text: "I want to talk about something with zero pressure... I miss being physically close with you. I know we've both been stressed. Would you be interested in some kind of physical connection tonight? Even just cuddling sounds perfect.",
            why: "It removes the fear of failure. It offers a low-pressure step (cuddling) that often leads to more naturally.",
            time: "10:18 PM"
          }}
        />

        <div className="text-center mt-12 mb-8">
          <p className="text-xl text-gray-700 font-bold mb-6">You're getting 87 more just like these.</p>
        </div>
      </Section>

      {/* Module 10: Complete Module Breakdown */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif text-center mb-12 font-bold">Everything Inside The Connection Code</h2>

          <div className="space-y-12 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E67E7E] uppercase tracking-widest border-b border-gray-100 pb-2">Part I: The Foundation</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">01</span>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Why Traditional Advice Keeps You Stuck</p>
                    <p className="text-gray-600">The neuroscience truth about male vs. female communication and why "emotional labor" is destroying your connection.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">02</span>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">The 5 Communication Mistakes That Push Him Away</p>
                    <p className="text-gray-600">Why "processing out loud" backfires and why "I feel" statements often shut him down.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">03</span>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">The SPARK Framework: Your New Blueprint</p>
                    <p className="text-gray-600">The complete 5-step system that works with male psychology to create safety and connection.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E67E7E] uppercase tracking-widest border-b border-gray-100 pb-2">Part II: The Scripts (87 Total)</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">04</span>
                  <div>
                    <p className="font-bold text-gray-900">Appreciation Scripts</p>
                    <p className="text-sm text-gray-600">Make him feel like a hero again.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">05</span>
                  <div>
                    <p className="font-bold text-gray-900">Vulnerability Scripts</p>
                    <p className="text-sm text-gray-600">Share fears without overwhelming him.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">06</span>
                  <div>
                    <p className="font-bold text-gray-900">Playful Scripts</p>
                    <p className="text-sm text-gray-600">Reignite attraction and fun.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">07</span>
                  <div>
                    <p className="font-bold text-gray-900">Conflict Resolution Scripts</p>
                    <p className="text-sm text-gray-600">Solve problems without fighting.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">08</span>
                  <div>
                    <p className="font-bold text-gray-900">Intimacy Scripts</p>
                    <p className="text-sm text-gray-600">Reignite physical connection without pressure.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E67E7E] uppercase tracking-widest border-b border-gray-100 pb-2">Part III: The Implementation</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">09</span>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Handling His Initial Resistance</p>
                    <p className="text-gray-600">What to do when he's skeptical and the "consistency strategy" that builds trust.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-gray-300 text-xl">10</span>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Your 30-Day Marriage Revival Action Plan</p>
                    <p className="text-gray-600">Day-by-day guide: Week 1 Foundation, Week 2 Vulnerability, Week 3 Playfulness, Week 4 Integration.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
              <h3 className="text-xl font-bold mb-4 text-[#E67E7E] uppercase tracking-widest">🎁 Included Bonuses</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-800"><span className="font-bold">Bonus 1: Reading His Responses.</span> Decode what he really means vs what he says.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-800"><span className="font-bold">Bonus 2: Personality Type Adaptation.</span> Customize scripts for the Analyst, Supporter, Achiever, or Connector.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-gray-800"><span className="font-bold">Bonus 3: Advanced Relationship Repair.</span> When to seek professional help (addiction, betrayal, etc).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 11: Value Stack */}
      <Section id="order" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-rose-50 px-6 py-12 pt-20 md:p-16 rounded-[3rem] border-2 border-rose-100 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 py-2 px-6 md:p-4 bg-[#E67E7E] text-white font-bold rounded-bl-3xl text-xs md:text-sm z-10 shadow-md">BEST VALUE</div>

            <h2 className="text-3xl md:text-6xl serif mb-4 italic font-bold text-gray-900">Everything You Get Today</h2>
            <p className="text-gray-500 mb-12 font-medium">In total, 87 different scripts. If you tried to learn this through therapy, you'd spend $2,000+.</p>

            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              {/* Left: Product Image */}
              <div className="flex-1 w-full flex justify-center sticky top-8">
                <div className="transform scale-100 md:scale-110 transition-transform hover:scale-105 duration-500">
                  <BookMockup />
                  <div className="mt-8 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white max-w-xs mx-auto text-sm text-gray-500 font-medium shadow-sm">
                    "I expected a PDF, but this feels like a masterclass."
                  </div>
                </div>
              </div>

              {/* Right: Stack List */}
              <div className="flex-1 w-full space-y-3">
                {[
                  { n: 'The Connection Code Main Book', v: '$47', sub: 'The complete SPARK framework & 87 scripts' },
                  { n: 'Bonus: Reading His Responses Decoded', v: '$27', sub: 'Stop guessing what he really means' },
                  { n: 'Bonus: Personality Type Adaptation', v: '$37', sub: 'Customize for his specific personality' },
                  { n: 'Bonus: Advanced Relationship Repair', v: '$47', sub: 'For crisis moments & deep wounds' },
                  { n: 'Bonus: Quick Reference Script Cards', v: '$27', sub: 'Keep these on your phone for emergencies' },
                  { n: 'Bonus: 30-Day Implementation Plan', v: '$67', sub: 'Your daily roadmap to connection' }
                ].map((item, i) => (
                  <div key={i} className="group flex justify-between items-center p-4 bg-white rounded-xl border border-rose-100 shadow-sm hover:shadow-md hover:border-rose-200 transition-all hover:scale-[1.01] cursor-default">
                    <div className="flex items-start gap-4 text-left">
                      <div className="bg-rose-100 p-2 rounded-full mt-1 group-hover:bg-[#E67E7E] group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-[#E67E7E] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm md:text-base leading-tight group-hover:text-[#E67E7E] transition-colors">{item.n}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                      </div>
                    </div>
                    <span className="text-gray-300 line-through text-xs md:text-sm font-mono bg-gray-50 px-2 py-1 rounded ml-4">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10 bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-2">
                <span className="text-gray-400 line-through text-xl font-semibold">Total Value: $252</span>
                <span className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight">$19</span>
              </div>
              <p className="text-gray-500 font-medium">One-time payment. Instant Access.</p>
            </div>

            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-10 py-6 rounded-2xl font-bold text-xl md:text-3xl shadow-2xl w-full block mb-6 animate-pulse-slow hover:scale-[1.02] transition-transform" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              TRANSFORM MY MARRIAGE NOW
            </a>

            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale mix-blend-multiply">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-8" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-8" />
            </div>

            <p className="mt-6 text-xs text-gray-400 max-w-lg mx-auto">Secure 256-bit SSL encryption. Your personal information is safe.</p>
          </div>
        </div>
      </Section>

      {/* Module 12: Guarantee */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#E67E7E]"></div>
          <div className="flex-shrink-0 bg-rose-50 p-8 rounded-full">
            <ShieldCheck className="w-20 h-20 text-[#E67E7E]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 italic serif text-gray-900">My "Keep Everything Free" Guarantee</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Try The Connection Code for 60 full days. If you don't see a noticeable improvement in your marriage... If your husband doesn't start responding differently...
            </p>
            <p className="font-bold text-gray-900 text-lg border-l-4 border-[#E67E7E] pl-4 italic">
              Email me and I'll refund every single penny. And you can KEEP EVERYTHING. The book, the scripts, the bonuses. All of it. FREE.
            </p>
          </div>
        </div>
      </Section>

      {/* Module 13 & 16: Urgency & Final Close */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl serif mb-10 font-bold">What's The Real Cost Of Waiting Another Day?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Every day you wait, the communication patterns get more entrenched. Every cold text builds another brick in the wall. You have a choice right now. You can continue down the path of distance and resentment, or you can choose the path of connection and love.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="font-bold text-gray-500 mb-4 uppercase tracking-widest text-sm border-b border-gray-200 pb-2">Path One: Do Nothing</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✗ Distance grows wider</li>
                <li>✗ Resentment deepens</li>
                <li>✗ Risk of divorce increases</li>
                <li>✗ Regret wondering "what if"</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 ring-2 ring-rose-100 ring-offset-2 shadow-lg transform scale-105">
              <h3 className="font-bold text-[#E67E7E] mb-4 uppercase tracking-widest text-sm border-b border-rose-200 pb-2">Path Two: Invest $19</h3>
              <ul className="space-y-3 text-gray-800 font-medium">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 fill-current bg-white rounded-full" /> Sweet texts throughout the day</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 fill-current bg-white rounded-full" /> Deep, real conversations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 fill-current bg-white rounded-full" /> Feeling desired and cherished</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 fill-current bg-white rounded-full" /> Proud of your marriage again</li>
              </ul>
            </div>
          </div>

          <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 block md:inline-block w-full md:w-auto" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
            TRANSFORM MY MARRIAGE FOR $19
          </a>
          <p className="mt-4 text-sm text-gray-500">Instant Digital Download. Start in 2 minutes.</p>
        </div>
      </Section>

      {/* Module 15: FAQ */}
      <Section id="faq" className="bg-[#FAF9F6]">
        <h2 className="text-4xl md:text-5xl serif text-center mb-16 font-bold tracking-tight italic">Your Questions Answered</h2>
        <div className="max-w-3xl mx-auto bg-white px-8 py-4 rounded-3xl shadow-sm border border-gray-100">
          <AccordionItem
            question="Will this work if my husband isn't trying at all?"
            answer="Yes. The entire SPARK system is designed to work unilaterally. You change your communication, which triggers a different neurological response in him. Most successful users started with husbands who were completely checked out."
          />
          <AccordionItem
            question="What if it feels fake or manipulative?"
            answer="Learning a new language to express your real feelings isn't manipulative,it's strategic. You're still you, and your feelings are real. You're just learning to express them in a language he can actually hear."
          />
          <AccordionItem
            question="What if he asks why I'm suddenly communicating differently?"
            answer='Great question. You can be honest: "I learned that I was accidentally communicating in ways that made you defensive, even when I didn t mean to. I m trying to get better at this." He will almost always appreciate the effort.'
          />
          <AccordionItem
            question="Is this just for texting or in-person too?"
            answer="The framework works for ALL communication. We call it Texting Scripts because that's where modern tension often starts, but the neuroscience applies whether you're texting or talking face-to-face."
          />
          <AccordionItem
            question="How long does it take to see results?"
            answer="Most women report noticeable changes within 2-3 weeks. Some see shifts in the first few days. The 60-day guarantee ensures you have plenty of time to know if it works for you."
          />
          <AccordionItem
            question="What format is this in?"
            answer="It's a digital PDF system ('The Connection Code' ebook). You get instant access immediately after purchase. You can read it on your phone, tablet, computer, or print it out."
          />
          <AccordionItem
            question="Can I share this with friends?"
            answer="The Connection Code is licensed for individual use. Because every marriage is unique, they'll need the complete system (including all bonuses) to get the best results."
          />
          <AccordionItem
            question="What if we have really serious problems?"
            answer="This works for 80% of struggling marriages (communication breakdown). However, if there is active abuse, addiction, or unrepentant infidelity, please seek professional intervention. The book covers how to know the difference."
          />
          <AccordionItem
            question="What if my husband finds this?"
            answer="Most husbands, if they read this, would say 'I wish she'd learned this years ago.' You can be transparent: 'I'm learning how to communicate in ways that work better for both of us.'"
          />
          <AccordionItem
            question="Is there a physical book?"
            answer="Currently, it is digital-only to provide instant access and keep the price at $19 (vs $35+ for print). You can print the Quick Reference Cards to keep on hand."
          />
          <AccordionItem
            question="What if I'm not tech-savvy?"
            answer="If you can check email, you can access this. You'll receive a download link immediately after purchase. Just click it to open the PDF."
          />
          <AccordionItem
            question="What makes you qualified to teach this?"
            answer="I'm not a PhD researcher. I'm a woman who failed at a 6-year relationship, then spent years testing and refining these techniques to save my own marriage. My qualification is results: my thriving 7-year marriage and hundreds of success stories from women just like you."
          />
          <AccordionItem
            question="Okay, I'm convinced. What's my next step?"
            answer="Click the button below. Complete the simple checkout. Get instant access. Start using the scripts tonight."
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-8 h-8 text-[#E67E7E] mx-auto mb-6 fill-current animate-pulse" />
          <h2 className="text-3xl serif mb-2 italic">The Connection Code</h2>
          <p className="text-gray-500 mb-8">Texting Scripts That Save Marriages</p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-sm text-gray-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/support" className="hover:text-white transition-colors">Support</Link>
          </div>

          <div className="text-xs text-gray-600 space-y-4 max-w-2xl mx-auto leading-relaxed border-t border-gray-800 pt-8">
            <p>© 2026 The Connection Code by Jul Tabacu. All rights reserved.</p>
            <p>DISCLAIMER: The results stated on this page are not typical. The average person who buys any "how-to" information gets little to no results. I am using these references for example purposes only. Your results will vary and depend on many factors including your background, experience, and work ethic.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA Bar */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 transition-transform duration-300 z-50 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Text (Hidden on small mobile to save space) */}
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-gray-900 text-sm">The Connection Code™</span>
            <span className="text-xs text-green-600 font-medium">Instant Digital Access</span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col items-end md:hidden">
              <span className="text-[10px] text-gray-500 line-through">$252</span>
              <span className="font-bold text-gray-900 text-xl leading-none">$19</span>
            </div>

            <div className="hidden md:block text-right mr-2">
              <span className="block text-xs text-gray-400 line-through">$252</span>
              <span className="block font-black text-2xl text-gray-900 leading-none">$19</span>
            </div>

            <a
              href="#order"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('order');
              }}
              className="coral-button text-white px-6 py-3 rounded-xl font-bold text-base md:text-lg shadow-lg flex-grow md:flex-grow-0 text-center animate-pulse-slow whitespace-nowrap"
            >
              Transform My Marriage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
