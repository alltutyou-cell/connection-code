
import React, { useState, useEffect } from 'react';
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

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah T.", age: 38, location: "Pittsburgh, PA", marriedYears: 12,
      title: "He actually APOLOGIZED for being distant...",
      content: "I tried your 'vulnerability without pressure' script from Chapter 5, and I'm not kidding — within 20 minutes he opened up about work stress he's been carrying for months. He actually CRIED and apologized for being distant. We talked for 2 hours. I can't remember the last time we talked for 2 hours about anything besides the kids' schedules.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Jennifer M.", age: 34, location: "Austin, TX", marriedYears: 9,
      title: "From 3 texts per week to 15+ daily conversations",
      content: "I was ready to call a lawyer. I felt completely invisible. I started using the SPARK appreciation scripts from Chapter 4, and I'm actually crying writing this — he started texting me throughout the day just to share random thoughts. Yesterday he sent me a funny meme and said 'this made me think of you.' It's been 19 days and we've gone from maybe 3 meaningful exchanges per WEEK to 15+ actual conversations DAILY. I have my best friend back.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Amanda K.", age: 41, location: "Denver, CO", marriedYears: 14,
      title: "My 8-year-old noticed the change...",
      content: "The playful scripts in Chapter 6 felt silly at first, but I tried them anyway because I was desperate. Within a week, my husband started actually laughing again. Last night my daughter said 'You and daddy are being weird and giggly again like you used to be.' My EIGHT-YEAR-OLD noticed we're happy again. If that's not proof this works, I don't know what is.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Lisa R.", age: 36, location: "Miami, FL", marriedYears: 11,
      title: "After $8,000 in failed marriage counseling...",
      content: "We spent $8,000 on marriage therapy over 18 months. My husband hated every session. We quit therapy and I was ready to quit the marriage. Then I found The Connection Code. The conflict resolution scripts in Chapter 7 gave me the exact words I needed. We solved a 3-year-running argument about his mother in ONE 15-minute conversation. I'm simultaneously furious that a $19 book did what $8,000 of therapy couldn't... and incredibly grateful that it exists.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
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
          <a href="#order" className="coral-button text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
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
      <header className="pt-24 md:pt-32 pb-12 px-6 bg-gradient-to-b from-white to-[#FAF9F6] text-center overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-left md:pr-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#E67E7E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100">
              <Sparkles className="w-4 h-4" />
              New Research-Based Method
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl serif font-bold leading-[1.1] mb-6 text-gray-900">
              The 'Backwards' Texting Method That Made My Distant Husband <span className="italic text-[#E67E7E] relative">
                Fall In Love With Me Again
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span>... In 19 Days
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6 leading-relaxed font-light">
              The exact word-for-word scripts that transformed my cold, one-word-text marriage into the passionate connection I thought was gone forever.
              <span className="block mt-2 text-sm md:text-base text-gray-500 italic">(Even after therapy, date nights, and romance books all failed)</span>
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#order" className="coral-button text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl w-full sm:w-auto text-center hover:scale-105 transition-transform flex items-center justify-center gap-2">
                GET INSTANT ACCESS - JUST $19 <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm h-full py-4 px-2 w-full sm:w-auto">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Abstract blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-rose-100/40 to-blue-50/40 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
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
          <p className="font-bold">It's the terrifying thought that this is just what marriage becomes — and you have 40 more years of this ahead of you.</p>
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

      {/* Module 5: Origin Story */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <div className="bg-rose-100 text-[#E67E7E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">My Story</div>
            <h2 className="text-3xl md:text-5xl serif mb-6 font-bold">How I Accidentally Discovered The "Backwards" Method</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>Seven years ago, I was convinced I was completely broken when it came to love. I had just ended a six-year relationship where emotional conversations always ended in defensiveness or silence. I blamed myself.</p>
              <p>Then I met my now-husband. Three months in, he made a comment that hit a nerve. In my past, I would have fought or shut down. Instead, I paused and tried something different. A different set of words. A different tone.</p>
              <p className="text-xl font-serif italic text-gray-900 border-l-4 border-[#E67E7E] pl-4 py-2">Instead of "You don't support my dreams," I said: "When you said that, I felt small. Help me understand what you meant."</p>
              <p>His whole body language changed. Instead of getting defensive, <span className="font-bold text-[#E67E7E]">he leaned in.</span></p>
              <p>That conversation taught us both how to navigate every difficult moment since. We've been together for seven years now, thriving not because we are "lucky", but because we communicate systematically.</p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="bg-white p-4 rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-all duration-500">
              {/* Placeholder for Jul's image */}
              <div className="w-72 h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm font-medium relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="z-10">[Jul Tabacu Photo]</span>
              </div>
            </div>
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

        <div className="mt-16 bg-rose-50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why SPARK works when therapy fails:</h3>
          <p className="text-lg text-gray-700 italic">
            "It works WITH male psychology instead of fighting against it. It creates safety instead of triggering defensive responses. It makes him feel like the hero, not the problem."
          </p>
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
                  <p className="text-gray-600">He walks through the door. His face lights up when he sees you. He pulls you into a real, full-body hug—not the obligatory side-hug. Your daughter says "Eww you guys are being gross," but she's smiling.</p>
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
            <a href="#order" className="coral-button text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl inline-block hover:shadow-2xl transition-all hover:-translate-y-1">
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
            why: 'It triggers his "Defensive Nervous System." He hears failure, not a request for love.'
          }}
          after={{
            label: "The SPARK Script (The Connection)",
            text: "I want us to figure something out together. I'd love more help with dinners this week. I know you've been swamped at work lately. Would you prefer to cook on Tue/Thu, or handle meal planning for next week? Let me know what sounds doable.",
            why: "It creates safety. It gives him options. It makes him a collaborator instead of a defendant."
          }}
        />

        <ScriptComparison
          situation="Situation 2: When You Want Physical Intimacy"
          before={{
            label: "What You're Sending Now (The Trigger)",
            text: "We never have sex anymore. It's been three weeks. Is there something wrong with me? Why don't you want me?",
            why: 'It creates pressure and guilt. Obligation destroys desire.'
          }}
          after={{
            label: "The SPARK Script (The Connection)",
            text: "I want to talk about something with zero pressure... I miss being physically close with you. I know we've both been stressed. Would you be interested in some kind of physical connection tonight? Even just cuddling sounds perfect.",
            why: "It removes the fear of failure. It offers a low-pressure step (cuddling) that often leads to more naturally."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E67E7E] uppercase tracking-widest">Part I: The Foundation</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">01</span>
                  <p className="text-gray-700">Why Traditional Advice Keeps You Stuck (The Neuroscience Truth)</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">02</span>
                  <p className="text-gray-700">The 5 Communication Mistakes That Push Him Away</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">03</span>
                  <p className="text-gray-700">The SPARK Framework: Your New Blueprint</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#E67E7E] uppercase tracking-widest">Part II: The Scripts (87 Total)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">04</span>
                  <p className="text-gray-700">Appreciation Scripts That Make Him Feel Like A Hero</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">05</span>
                  <p className="text-gray-700">Vulnerability Scripts That Deepen Your Bond</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">06</span>
                  <p className="text-gray-700">Playful Scripts That Reignite Attraction</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">07</span>
                  <p className="text-gray-700">Conflict Resolution Scripts (No More Fighting)</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-300">08</span>
                  <p className="text-gray-700">Intimacy Scripts That Bring Back Passion</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 11: Value Stack */}
      <Section id="order" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-rose-50 p-8 md:p-16 rounded-[3rem] border-2 border-rose-100 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-4 bg-[#E67E7E] text-white font-bold rounded-bl-3xl text-sm z-10 shadow-md">BEST VALUE</div>

            <h2 className="text-3xl md:text-6xl serif mb-4 italic font-bold text-gray-900">Everything You Get Today</h2>
            <p className="text-gray-500 mb-12 font-medium">In total, 87 different scripts. If you tried to learn this through therapy, you'd spend $2,000+.</p>

            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              {/* Left: Product Image */}
              <div className="flex-1 w-full flex justify-center">
                <div className="transform scale-110">
                  <BookMockup />
                </div>
              </div>

              {/* Right: Stack List */}
              <div className="flex-1 space-y-4 text-left w-full bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-white/50">
                {[
                  { n: 'The Connection Code Main Book', v: '$47' },
                  { n: 'Bonus: Reading His Responses Decoded', v: '$27' },
                  { n: 'Bonus: Personality Type Adaptation', v: '$37' },
                  { n: 'Bonus: Advanced Relationship Repair', v: '$47' },
                  { n: 'Bonus: Quick Reference Script Cards', v: '$27' },
                  { n: 'Bonus: 30-Day Implementation Plan', v: '$67' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-rose-100 last:border-0">
                    <span className="font-bold text-gray-800 flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item.n}
                    </span>
                    <span className="text-gray-400 line-through text-xs md:text-sm font-mono bg-white px-2 py-1 rounded shadow-sm">{item.v}</span>
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

            <a href="#" className="coral-button text-white px-10 py-6 rounded-2xl font-bold text-xl md:text-3xl shadow-2xl w-full block mb-6 animate-pulse-slow hover:scale-[1.02] transition-transform">
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

          <a href="#order" className="coral-button text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 block md:inline-block w-full md:w-auto">
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
            answer="Learning a new language to express your real feelings isn't manipulative—it's strategic. You're still you, and your feelings are real. You're just learning to express them in a language he can actually hear."
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
            answer="It's a digital PDF system. You get instant access immediately after purchase. You can read it on your phone, tablet, computer, or print it out."
          />
          <AccordionItem
            question="What if we have really serious problems?"
            answer="This works for 80% of struggling marriages (communication breakdown). However, if there is active abuse, addiction, or unrepentant infidelity, please seek professional intervention. The book covers how to know the difference."
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
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Member Login</a>
          </div>

          <div className="text-xs text-gray-600 space-y-4 max-w-2xl mx-auto leading-relaxed border-t border-gray-800 pt-8">
            <p>© 2024 The Connection Code by Jul Tabacu. All rights reserved.</p>
            <p>DISCLAIMER: The results stated on this page are not typical. The average person who buys any "how-to" information gets little to no results. I am using these references for example purposes only. Your results will vary and depend on many factors including your background, experience, and work ethic.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
