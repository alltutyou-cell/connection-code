
import React, { useState } from 'react';
import {
  ChevronDown,
  ShieldCheck,
  Star,
  Heart,
  CheckCircle2,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import DoomScrollSection from './DoomScrollSection';
import BookMockup from './BookMockup';

// --- Types ---

interface Testimonial {
  name: string;
  age: number;
  location: string;
  marriedYears: number;
  title: string;
  content: string;
  image: string; // Placeholder or random user image
}

// --- Components ---

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 px-6 max-w-5xl mx-auto ${className}`}>
    {children}
  </section>
);

const ChatBubble: React.FC<{ text: string; isUser?: boolean }> = ({ text, isUser }) => (
  <div className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'} animate-fade-in`}>
    <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${isUser
        ? 'bg-blue-500 text-white rounded-tr-none'
        : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200'
      }`}>
      {text}
    </div>
  </div>
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
  const testimonials: Testimonial[] = [
    {
      name: "Sarah T.", age: 38, location: "Pittsburgh, PA", marriedYears: 12,
      title: "He actually APOLOGIZED for being distant...",
      content: "I tried your 'vulnerability without pressure' script, and I'm not kidding — within 20 minutes he opened up about work stress he's been carrying for months. He actually CRIED and apologized for being distant. We talked for 2 hours.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Jennifer M.", age: 34, location: "Austin, TX", marriedYears: 9,
      title: "From 3 texts per week to 15+ daily",
      content: "I was ready to call a lawyer. I felt completely invisible. I started using the SPARK appreciation scripts, and yesterday he sent me a funny meme and said 'this made me think of you.' I have my best friend back.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Amanda K.", age: 41, location: "Denver, CO", marriedYears: 14,
      title: "My 8-year-old noticed the change...",
      content: "Last night my daughter said 'You and daddy are being weird and giggly again like you used to be.' My EIGHT-YEAR-OLD noticed we're happy again. If that's not proof this works, I don't know what is.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michelle S.", age: 39, location: "Portland, OR", marriedYears: 15,
      title: "He planned a date night WITHOUT me asking...",
      content: "I haven't felt desired by my husband in probably 5 years. I used the intimacy scripts and almost immediately he started initiating physical touch again. Last week he PLANNED A DATE NIGHT without me asking.",
      image: "https://randomuser.me/api/portraits/women/90.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#1a1a1a]">
      {/* Sticky Header CTA */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 py-3 px-6 hidden md:flex justify-between items-center transition-all duration-300 shadow-sm">
        <div className="flex items-center gap-2">
          <Heart className="text-[#E67E7E] w-5 h-5 fill-current" />
          <span className="font-bold tracking-tight text-lg serif italic">The Connection Code</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-gray-500">Only $19</span>
          <a href="#order" className="coral-button text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            TRANSFORM MY MARRIAGE
          </a>
        </div>
      </nav>

      {/* Module 1: Hero */}
      <header className="pt-24 md:pt-32 pb-12 px-6 bg-gradient-to-b from-white to-[#FAF9F6] text-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left md:pr-8">
            <div className="inline-flex items-center gap-2 bg-rose-50 text-[#E67E7E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              New Research-Based Method
            </div>
            <h1 className="text-4xl md:text-6xl serif font-bold leading-[1.1] mb-6 text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              The 'Backwards' Texting Method That Made My Distant Husband <span className="italic text-[#E67E7E]">Fall In Love With Me Again</span>... In 19 Days
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The exact word-for-word scripts that transformed my cold, one-word-text marriage into the passionate connection I thought was gone forever.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#order" className="coral-button text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl w-full sm:w-auto text-center">
                GET INSTANT ACCESS - JUST $19
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm h-full py-4 px-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>60-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Abstract blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-rose-100/40 to-blue-50/40 rounded-full blur-3xl -z-10"></div>
            <BookMockup />
          </div>
        </div>
      </header>

      {/* Module 2: Problem Amplification */}
      <Section id="pain" className="bg-white">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl serif mb-10 text-center font-bold">Does This Sound Painfully Familiar?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
            <p className="font-medium text-xl italic text-gray-900">You wake up at 2:47 AM... again.</p>
            <p>Your husband is sleeping peacefully beside you, but you've never felt more alone in your life. You grab your phone and do what you've done every night this week: You scroll through your text messages with him, looking for... something.</p>
            <p>But all you find are logistics:</p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 my-6 shadow-inner font-mono text-sm md:text-base">
              <div className="text-gray-500 mb-2 text-xs uppercase tracking-wider">Yesterday</div>
              <div className="flex flex-col gap-3">
                <div className="self-end bg-rose-100 text-rose-900 px-4 py-2 rounded-2xl rounded-tr-sm">Can you pick up milk?</div>
                <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm">Running late.</div>
                <div className="self-start bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm">K.</div>
              </div>
            </div>
            <p>One word. That's what your marriage has become. One-word responses from a man who used to send you paragraphs about his day.</p>
            <p>You're facing the question that terrifies you most: <span className="font-bold text-gray-900 border-b-2 border-[#E67E7E]/30">Am I too boring for my own husband?</span></p>
          </div>
        </div>

        {/* Doom Scroll Visual Component */}
        <DoomScrollSection />

        <div className="max-w-3xl mx-auto mt-16 text-lg text-gray-700 leading-relaxed font-light">
          <p className="mb-6">It's not just the cold texts. It's the crushing realization that you're becoming roommates who happen to share a bed. It's the fear that he's one bad day away from deciding this marriage isn't worth the effort.</p>
          <p className="font-medium text-xl text-center italic text-gray-900 border-l-4 border-[#E67E7E] pl-6 py-2 my-8">
            "Do you waste the rest of your life like this? Or do you finally give up and become another divorce statistic?"
          </p>
        </div>
      </Section>

      {/* Module 3: False Solutions */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl serif mb-6 italic">Why Everything You've Tried Has Failed</h2>
            <p className="text-lg text-gray-600">(And Why That's Not Your Fault)</p>
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
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Expert Advice</div>
              <p className="text-gray-900 font-bold text-xl mb-4">"Show him appreciation."</p>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <p className="text-gray-600 italic">The Reality: You tried. He said "thanks" like you were the housekeeping staff.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-red-400 mb-4 font-bold uppercase tracking-widest text-xs">The Truth</div>
              <p className="text-gray-900 font-bold text-xl mb-4">The Missing Link</p>
              <div className="w-full h-px bg-gray-100 mb-4"></div>
              <p className="text-gray-600 italic">All that advice assumes your husband processes emotional information the same way you do. He doesn't.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 4: Hidden Obstacle */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif mb-10 text-center font-bold">The Hidden Truth About Why Your Husband Shuts Down</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>I need to tell you something that might make you angry at first.</p>
            <p className="font-bold text-gray-900">Your marriage problems aren't actually relationship problems. They're communication problems disguised as compatibility issues.</p>
            <p>When you share your feelings the way that feels natural to you, his brain literally interprets it as a threat or a problem to escape from. Not because he doesn't love you. But because you're accidentally speaking a language his nervous system can't process without shutting down.</p>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-8">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2"><MessageCircle className="w-5 h-5" /> The Translation Gap</h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <span className="flex-1 font-medium text-gray-800">You say: "I miss feeling connected to you"</span>
                  <span className="opacity-50 hidden md:block">→</span>
                  <span className="flex-1 italic text-gray-600">He hears: "You're failing as a husband."</span>
                </div>
                <div className="w-full h-px bg-blue-200/50"></div>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <span className="flex-1 font-medium text-gray-800">You say: "We need to talk about us"</span>
                  <span className="opacity-50 hidden md:block">→</span>
                  <span className="flex-1 italic text-gray-600">He hears: "Emergency. Prepare for criticism. Escape."</span>
                </div>
              </div>
            </div>

            <p>But what if you could communicate the exact same needs... but in a language that makes his brain feel safe instead of threatened?</p>
          </div>
        </div>
      </Section>

      {/* Module 5: Origin Story */}
      <Section className="bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl serif mb-6 font-bold">How I Accidentally Discovered The "Backwards" Method</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Seven years ago, I was convinced I was completely broken when it came to love. I had just ended a six-year relationship where emotional conversations always ended in defensiveness or silence.</p>
              <p>Then I met my now-husband. Three months in, he made a comment that hit a nerve. In my past, I would have fought or shut down. Instead, I paused and tried something different. A different set of words. A different tone.</p>
              <p>Instead of getting defensive, <span className="font-bold text-[#E67E7E]">he leaned in.</span></p>
              <p>That ten-minute conversation taught us both how to navigate every difficult moment since. We've been together for seven years now, thriving not because we are "lucky", but because we communicate systematically.</p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="bg-white p-4 rounded-3xl shadow-xl rotate-2">
              {/* Placeholder for Jul's image or story image */}
              <div className="w-64 h-80 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm font-medium">
                [Couple/Author Image]
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 6: SPARK Framework */}
      <Section id="framework" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl serif mb-6 italic font-bold tracking-tight">The SPARK Framework</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">The 5-Step System That Turns Any Conversation Into Connection (And works with his nervous system, not against it)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { l: 'S', n: 'Set Temperature', d: 'Create safety first. "I want to share something..."' },
            { l: 'P', n: 'Present One Point', d: 'Keep it clear. One specific thing.' },
            { l: 'A', n: 'Acknowledge Him', d: 'Validating his view prevents defensiveness.' },
            { l: 'R', n: 'Request Action', d: 'Specific, doable, time-bound requests.' },
            { l: 'K', n: 'Keep Door Open', d: 'No pressure. Give him agency to choose.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-rose-50/50 rounded-2xl border border-rose-100 text-center hover:bg-rose-50 transition-colors">
              <span className="text-5xl font-black text-[#E67E7E] mb-4 opacity-50 font-serif">{item.l}</span>
              <h4 className="font-bold text-gray-900 mb-2">{item.n}</h4>
              <p className="text-sm text-gray-600">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
            "Once I started using SPARK, my husband went from one-word answers to 15+ messages a day. He felt safe, so he finally opened up."
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
      </Section>

      {/* Module 8: Transformation Path (Visualization) */}
      <Section className="bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl serif text-center mb-12 font-bold">Imagine Waking Up 30 Days From Now...</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="bg-rose-50 p-4 rounded-full text-[#E67E7E] font-bold shrink-0">07:00 AM</div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Morning Text</h3>
                <p className="text-gray-600">Your phone buzzes. Instead of dread, you smile. It's him: "Already missing you. Have an amazing day." Your heart does that little flutter thing it hasn't done in years.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="bg-rose-50 p-4 rounded-full text-[#E67E7E] font-bold shrink-0">06:30 PM</div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Homecoming</h3>
                <p className="text-gray-600">He walks through the door. His face lights up. He pulls you into a real, full-body hug—not the obligatory side-hug. Your daughter says "Eww you guys are being gross," but she's smiling.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="bg-rose-50 p-4 rounded-full text-[#E67E7E] font-bold shrink-0">10:00 PM</div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Connection</h3>
                <p className="text-gray-600">You're lying in bed, talking. Really talking. He reaches for your hand and says "I love you" first. And he means it. You sleep peacefully for the first time in months.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl font-serif italic text-gray-800 mb-8">This isn't fantasy. This is what happens when you stop fighting his nervous system and start working with it.</p>
            <a href="#order" className="coral-button text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl inline-block hover:shadow-2xl transition-all hover:-translate-y-1">
              YES, I WANT THIS FUTURE
            </a>
          </div>
        </div>
      </Section>

      {/* Module 9: Inside Look */}
      <Section className="bg-gray-900 text-white rounded-[3rem] my-12 overflow-hidden mx-4 md:mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl serif italic mb-4">A Peek Inside The Scripts</h2>
            <p className="text-gray-400">I'm giving you 3 complete scripts right here. Because I want you to see exactly how simple and powerful these are.</p>
          </div>

          <div className="space-y-20">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                When You Need Help Around The House
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="opacity-60 grayscale p-6 border border-white/10 rounded-2xl">
                  <p className="text-sm uppercase tracking-widest text-rose-400 mb-4 font-bold">The Old Way:</p>
                  <p className="text-sm italic mb-4">"You never help! It's not fair!"</p>
                  <div className="bg-gray-800 p-3 rounded-lg text-xs text-gray-400">Result: He gets defensive. You get frustrated.</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-green-500/30 shadow-2xl">
                  <p className="text-sm uppercase tracking-widest text-green-400 mb-4 font-bold">The SPARK Way:</p>
                  <p className="mb-4 leading-relaxed font-medium">"I want us to figure something out together. I'd love more help with dinners this week... Would you prefer to cook on Tue/Thu, or handle meal planning? Let me know what sounds doable."</p>
                  <div className="bg-green-500/10 text-green-300 p-3 rounded-lg text-xs">Result: He picks one because it feels like collaboration, not criticism.</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Reigniting Physical Intimacy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="opacity-60 grayscale p-6 border border-white/10 rounded-2xl">
                  <p className="text-sm uppercase tracking-widest text-rose-400 mb-4 font-bold">The Old Way:</p>
                  <p className="text-sm italic mb-4">"We never have sex anymore. Is something wrong with me?"</p>
                  <div className="bg-gray-800 p-3 rounded-lg text-xs text-gray-400">Result: He feels pressured and guilty. Desire dies.</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-green-500/30 shadow-2xl">
                  <p className="text-sm uppercase tracking-widest text-green-400 mb-4 font-bold">The SPARK Way:</p>
                  <p className="mb-4 leading-relaxed font-medium">"I want to talk about something with zero pressure... I miss being physically close. Would you be interested in connection tonight? Even just cuddling sounds perfect."</p>
                  <div className="bg-green-500/10 text-green-300 p-3 rounded-lg text-xs">Result: He feels safe to say yes because you removed the fear of failure.</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-6">You're getting 50+ more just like these.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 10 & 11: Value Stack */}
      <Section id="order" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-rose-50 p-8 md:p-12 rounded-[3rem] border-2 border-rose-100 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-4 bg-[#E67E7E] text-white font-bold rounded-bl-3xl text-sm z-10">BEST VALUE</div>

            <h2 className="text-3xl md:text-5xl serif mb-2 italic font-bold text-gray-900">Everything You Get Today</h2>
            <p className="text-gray-500 mb-10">Total Value: $252</p>

            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              {/* Left: Product Image */}
              <div className="flex-1">
                <BookMockup />
              </div>

              {/* Right: Stack List */}
              <div className="flex-1 space-y-4 text-left w-full">
                {[
                  { n: 'The Connection Code Main Book', v: '$47' },
                  { n: 'Bonus: Reading His Responses Decoded', v: '$27' },
                  { n: 'Bonus: Personality Type Adaptation System', v: '$37' },
                  { n: 'Bonus: Advanced Relationship Repair', v: '$47' },
                  { n: 'Bonus: Quick Reference Script Cards', v: '$27' },
                  { n: 'Bonus: 30-Day Implementation Plan', v: '$67' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-rose-200/50 last:border-0">
                    <span className="font-medium text-gray-800 flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item.n}
                    </span>
                    <span className="text-gray-400 line-through text-xs md:text-sm font-mono bg-white px-2 py-1 rounded">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10 bg-white/50 p-6 rounded-2xl border border-rose-100/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-4">
                <span className="text-gray-500 line-through text-xl">$252 Value</span>
                <span className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight">$19</span>
              </div>
              <p className="text-gray-600 font-medium">One-time payment. Instant Access. No Hidden Fees.</p>
            </div>

            <a href="#" className="coral-button text-white px-10 py-6 rounded-2xl font-bold text-xl md:text-2xl shadow-2xl w-full block mb-6 animate-pulse-slow hover:scale-[1.02] transition-transform">
              GET INSTANT ACCESS NOW
            </a>

            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale mix-blend-multiply">
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
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex-shrink-0 bg-rose-50 p-6 rounded-full">
            <ShieldCheck className="w-16 h-16 text-[#E67E7E]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 italic serif text-gray-900">My "Keep Everything Free" Guarantee</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Try The Connection Code for 60 full days. If you don't see a noticeable improvement in your marriage... If your husband doesn't start responding differently...
            </p>
            <p className="font-bold text-gray-800 border-l-4 border-[#E67E7E] pl-4">
              Email me and I'll refund every single penny. And you can KEEP EVERYTHING.
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
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 opacity-70">
              <h3 className="font-bold text-gray-500 mb-4 uppercase tracking-widest text-sm">Path One: Do Nothing</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✗ Distance grows wider</li>
                <li>✗ Resentment deepens</li>
                <li>✗ Risk of divorce increases</li>
                <li>✗ Regret wondering "what if"</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100 ring-2 ring-rose-100 ring-offset-2">
              <h3 className="font-bold text-[#E67E7E] mb-4 uppercase tracking-widest text-sm">Path Two: Invest $19</h3>
              <ul className="space-y-3 text-gray-800 font-medium">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Sweet texts throughout the day</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Deep, real conversations</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Feeling desired and cherished</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Proud of your marriage</li>
              </ul>
            </div>
          </div>

          <a href="#order" className="coral-button text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all">
            TRANSFORM MY MARRIAGE FOR $19
          </a>
        </div>
      </Section>

      {/* Module 15: FAQ */}
      <Section id="faq" className="bg-[#FAF9F6]">
        <h2 className="text-4xl md:text-5xl serif text-center mb-16 font-bold tracking-tight italic">Your Questions Answered</h2>
        <div className="max-w-3xl mx-auto bg-white px-8 py-4 rounded-3xl shadow-sm border border-gray-100">
          <AccordionItem
            question="Will this work if my husband isn't trying at all?"
            answer="Yes. The entire SPARK system is designed to work unilaterally. You change your communication, which triggers a different neurological response in him. most successful users started with husbands who were checked out."
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
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-8 h-8 text-[#E67E7E] mx-auto mb-6 fill-current" />
          <h2 className="text-2xl serif mb-8 italic">The Connection Code</h2>
          <div className="text-sm text-gray-500 space-y-4 italic opacity-60">
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <p>© 2024 The Connection Code by Jul Tabacu. All rights reserved.</p>
            <p className="text-xs max-w-lg mx-auto leading-relaxed">DISCLAIMER: The results stated on this page are not typical. The average person who buys any "how-to" information gets little to no results. I am using these references for example purposes only. Your results will vary and depend on many factors including your background, experience, and work ethic.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
