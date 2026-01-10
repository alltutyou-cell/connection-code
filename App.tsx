
import React, { useState } from 'react';
import {
  ChevronDown,
  MessageSquare,
  ShieldCheck,
  Star,
  Heart,
  Lock,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import DoomScrollSection from './DoomScrollSection';

// --- Types ---

interface Testimonial {
  name: string;
  age: number;
  location: string;
  timeMarried: number;
  title: string;
  content: string;
  image: string;
}

// --- Components ---

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 px-6 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const ChatBubble: React.FC<{ text: string; isUser?: boolean; delay?: string }> = ({ text, isUser, delay }) => (
  <div className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'} animate-fade-in`}>
    <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${isUser
        ? 'bg-blue-500 text-white rounded-tr-none'
        : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
      }`}>
      {text}
    </div>
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#E67E7E] transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{answer}</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah T.", age: 38, location: "Pittsburgh, PA", timeMarried: 12,
      title: "He actually APOLOGIZED for being distant...",
      content: "I tried your 'vulnerability without pressure' script, and I'm not kidding — within 20 minutes he opened up about work stress he's been carrying for months. He actually CRIED and apologized for being distant.",
      image: "https://picsum.photos/seed/sarah/200/200"
    },
    {
      name: "Jennifer M.", age: 34, location: "Austin, TX", timeMarried: 9,
      title: "From 3 texts per week to 15+ daily conversations",
      content: "I was ready to call a lawyer. I felt completely invisible. Yesterday he sent me a funny meme and said 'this made me think of you.' I have my best friend back.",
      image: "https://picsum.photos/seed/jenn/200/200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky Header CTA */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 py-3 px-6 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="text-[#E67E7E] w-5 h-5 fill-current" />
          <span className="font-bold tracking-tight text-lg serif italic">The Connection Code</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-500">Only $19</span>
          <a href="#order" className="coral-button text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            TRANSFORM MY MARRIAGE
          </a>
        </div>
      </nav>

      {/* Module 1: Hero */}
      <header className="pt-32 pb-20 px-6 bg-[#FAF9F6] text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-50 text-[#E67E7E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-rose-100">
            <Sparkles className="w-4 h-4" />
            New Research-Based Method
          </div>
          <h1 className="text-4xl md:text-7xl serif font-bold leading-[1.1] mb-8">
            The 'Backwards' Texting Method That Made My Distant Husband <span className="italic">Fall In Love With Me Again</span>... In 19 Days
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The exact word-for-word scripts that transformed my cold, one-word-text marriage into the passionate connection I thought was gone forever.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#order" className="coral-button text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl w-full max-w-md">
              GET INSTANT ACCESS - JUST $19
            </a>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>60-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </header>

      {/* Module 2: Problem Amplification */}
      <Section id="pain" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif mb-12 text-center">Does This Sound Painfully Familiar?</h2>
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="font-medium text-xl italic">You wake up at 2:47 AM... again.</p>
            <p>Your husband is sleeping peacefully beside you, but you've never felt more alone in your life. You scroll through your text messages with him, looking for... <span className="underline decoration-[#E67E7E] decoration-2">something</span>.</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 my-8">
              <ChatBubble text="Can you pick up milk?" isUser={false} />
              <ChatBubble text="Running late." isUser={false} />
              <ChatBubble text="K." isUser={false} />
            </div>
            <p>One word. That's what your marriage has become. One-word responses from a man who used to send you paragraphs about his day.</p>
            <p>You're facing the question that terrifies you most: <span className="font-bold">Am I too boring for my own husband?</span></p>
          </div>
        </div>
      </Section>

      {/* New Module: Doom Scroll Trauma */}
      <DoomScrollSection />

      {/* Module 3: False Solutions */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl serif mb-8 italic">Why Everything You've Tried Has Failed</h2>
          <p className="text-lg mb-12 text-gray-600">You've done the work. You read the books. You suggested the date nights. So why isn't it working?</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Expert Advice:</div>
              <p className="text-gray-800 font-semibold mb-2">"Just communicate your needs clearly."</p>
              <p className="text-gray-500 text-sm italic">The Reality: You did. He responded with "okay" and nothing changed.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Expert Advice:</div>
              <p className="text-gray-800 font-semibold mb-2">"Schedule quality time together."</p>
              <p className="text-gray-500 text-sm italic">The Reality: You sat across from each other in forced silence at expensive restaurants.</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-10 rounded-3xl border-2 border-rose-100 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">The Truth They Won't Tell You:</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Men's brains process emotional information differently. When you share feelings the way that feels natural to you...
              <span className="font-bold text-[#E67E7E]"> his brain interprets it as a threat or a problem to escape from.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Module 6: SPARK Framework */}
      <Section id="framework" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl serif mb-6 italic font-bold tracking-tight">The SPARK Framework</h2>
          <p className="text-xl text-gray-500">The 5-Step System That Turns Any Conversation Into Connection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { l: 'S', n: 'Set Temperature', d: 'Create safety first' },
            { l: 'P', n: 'Present One Point', d: 'Keep it clear' },
            { l: 'A', n: 'Acknowledge Him', d: 'Validating his view' },
            { l: 'R', n: 'Request Action', d: 'Specific and doable' },
            { l: 'K', n: 'Keep Door Open', d: 'No pressure' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-rose-50/50 rounded-2xl border border-rose-100 text-center">
              <span className="text-5xl font-black text-[#E67E7E] mb-4 opacity-50">{item.l}</span>
              <h4 className="font-bold text-gray-800 mb-2">{item.n}</h4>
              <p className="text-sm text-gray-500">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Module 9: Inside Look (Script Samples) */}
      <Section className="bg-gray-900 text-white rounded-[3rem] my-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-5xl serif text-center mb-16 italic">A Peek Inside The Scripts</h2>

          <div className="space-y-20">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                When You Need Help Around The House
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="opacity-60 grayscale">
                  <p className="text-sm uppercase tracking-widest text-rose-400 mb-4 font-bold">The Old Way:</p>
                  <ChatBubble text="You never help with dinner anymore! I'm doing everything while you sit on the couch. This isn't fair!" isUser={true} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-green-400 mb-4 font-bold">The SPARK Way:</p>
                  <ChatBubble text="I want us to figure something out together. I'd love more help with dinners this week. I know you've been swamped at work lately. Would you prefer to cook on Tue/Thu, or handle meal planning for next week? Let me know what sounds doable." isUser={true} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Reigniting Physical Intimacy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="opacity-60 grayscale">
                  <p className="text-sm uppercase tracking-widest text-rose-400 mb-4 font-bold">The Old Way:</p>
                  <ChatBubble text="We never have sex anymore. Is there something wrong with me? Why don't you want me?" isUser={true} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-green-400 mb-4 font-bold">The SPARK Way:</p>
                  <ChatBubble text="I want to talk about something with zero pressure. I miss being physically close with you. I know we've both been stressed lately. Would you be interested in some kind of physical connection tonight? Even just cuddling sounds perfect. No pressure at all." isUser={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 7: Testimonials */}
      <Section id="testimonials" className="bg-[#FAF9F6]">
        <h2 className="text-4xl md:text-5xl serif text-center mb-16 font-bold tracking-tight italic">What Happened When Real Women Used These Scripts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                <Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold mb-4 italic">"{t.title}"</h4>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-rose-50" />
                <div>
                  <p className="font-bold text-gray-900">{t.name}, {t.age}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{t.location} • Married {t.timeMarried} years</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Module 11: Value Stack & Order */}
      <Section id="order" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-rose-50 p-8 md:p-12 rounded-[3rem] border-2 border-rose-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-[#E67E7E] text-white font-bold rounded-bl-3xl text-sm">BEST VALUE</div>
            <h2 className="text-3xl md:text-5xl serif mb-6 italic font-bold">Everything You Get Today</h2>
            <div className="space-y-4 text-left max-w-2xl mx-auto mb-10">
              {[
                { n: 'The Complete Connection Code Book', v: '$47' },
                { n: 'Bonus: Reading His Responses Decoded', v: '$27' },
                { n: 'Bonus: Personality Type Adaptation System', v: '$37' },
                { n: 'Bonus: Advanced Relationship Repair', v: '$47' },
                { n: 'Bonus: Quick Reference Script Cards', v: '$27' },
                { n: 'Bonus: 30-Day Implementation Plan', v: '$67' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-rose-200/50">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item.n}
                  </span>
                  <span className="text-gray-400 line-through text-sm">{item.v}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-2">Total Value: $252</p>
              <div className="text-6xl md:text-8xl font-black text-gray-900 mb-2">$19</div>
              <p className="text-gray-500 font-medium">One-time payment. Instant Access.</p>
            </div>

            <a href="#" className="coral-button text-white px-10 py-6 rounded-2xl font-bold text-2xl shadow-2xl w-full block mb-6 animate-pulse">
              TRANSFORM MY MARRIAGE NOW
            </a>

            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-8" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-8" />
            </div>
          </div>
        </div>
      </Section>

      {/* Module 12: Guarantee */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex-shrink-0">
            <ShieldCheck className="w-32 h-32 text-[#E67E7E]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 italic serif">My "Keep Everything Free" Guarantee</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Try The Connection Code for 60 full days. If you don't see a noticeable improvement in your marriage... If your husband doesn't start responding differently...
            </p>
            <p className="font-bold text-gray-800 italic underline decoration-rose-300 decoration-2">
              Then email me and I'll refund every single penny. And you can KEEP EVERYTHING.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Module */}
      <Section id="faq">
        <h2 className="text-4xl md:text-5xl serif text-center mb-16 font-bold tracking-tight italic">Your Questions Answered</h2>
        <div className="max-w-3xl mx-auto bg-white px-8 rounded-3xl shadow-sm">
          <AccordionItem
            question="Will this work if my husband isn't trying at all?"
            answer="Yes. The SPARK system is designed to work unilaterally. You change your communication, which triggers a different neurological response in him. Most successful users started with husbands who were completely checked out."
          />
          <AccordionItem
            question="What if it feels fake or manipulative?"
            answer="Learning a new language to express your real feelings isn't manipulative—it's strategic. You're already using 'scripts' now, but your current ones accidentally trigger defensiveness. These ones create safety."
          />
          <AccordionItem
            question="Is this just for texting or in-person too?"
            answer="The framework works for ALL communication. We call it Texting Scripts because that's where modern tension often starts, but the neuroscience applies whether you're texting or talking face-to-face."
          />
          <AccordionItem
            question="What format is this in?"
            answer="It's a digital PDF system. You get instant access immediately after purchase. You can read it on your phone, tablet, computer, or print it out."
          />
        </div>
      </Section>

      {/* Final Urgency Close */}
      <footer className="bg-gray-900 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl serif mb-12 italic font-bold">This Is Your Moment.</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Six months from now, you'll look back at this moment. Either you'll think: "That was the day everything changed." Or you'll think: "Why didn't I just try?"
          </p>
          <a href="#order" className="coral-button text-white px-10 py-6 rounded-2xl font-bold text-2xl shadow-2xl inline-block mb-10 w-full max-w-md">
            SAVE MY MARRIAGE FOR $19
          </a>
          <div className="text-sm text-gray-500 space-y-2 italic opacity-60">
            <p>© 2024 The Connection Code by Jul Tabacu. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy | Support: help@theconnectioncode.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
