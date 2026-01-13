import React, { useEffect, useState } from 'react';
import { Star, ArrowRight, Menu, X, Check, ShieldCheck } from 'lucide-react';

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

          <p className="font-bold bg-rose-50 p-4 rounded-lg border-l-4 border-[#E67E7E] my-8">
            And yeah, it works even if therapy failed. Even if he "doesn't do feelings." Even if you've been having the same fight for three years.
          </p>

          <div className="my-8 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS - $19 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          {/* Story Section */}
          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">This Is What Happens When You Stop Trying To Get Him To "Communicate Better"</h2>

          <div className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img src="/winning-ad-screenshot.jpg" alt="Text message screenshot showing husband connecting with friend" className="w-full h-auto" />
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
          <p className="font-bold italic">"Just communicate your needs clearly."</p>
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

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
            <p className="font-bold text-[#E67E7E]">What you naturally want to say:</p>
            <p className="italic mb-4">"I feel really disconnected from you lately. I miss us. I need you to understand how this affects me."</p>

            <p className="font-bold text-gray-900">What his brain hears:</p>
            <p className="italic mb-2">"You're failing as a husband and I'm about to list all the ways."</p>
            <p className="text-sm text-gray-500 mb-4">(Even though that's not what you said. That's just how his threat-detection system interprets it.)</p>

            <p className="font-bold text-gray-900">His response:</p>
            <p>Shuts down. "I don't know what you want from me." Walks away.</p>
          </div>

          <div className="flex justify-center mb-8">
            <ArrowRight className="text-gray-300 w-8 h-8 rotate-90 md:rotate-0" />
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm mb-8">
            <p className="font-bold text-green-700">Same need, different structure (Script #34):</p>
            <p className="italic mb-4 bg-white p-4 rounded-lg border border-green-100">"I want to share something with you and get your thoughts. I know you're working hard for us. I miss our connection time together. Would you be willing to spend 20 min tonight just talking? No pressure - let me know what you think."</p>

            <p className="font-bold text-gray-900">What his brain processes:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-sm">
              <li><span className="font-bold">"Get your thoughts"</span> = activates his problem-solver mode (he's good at that)</li>
              <li><span className="font-bold">"I know you're working hard"</span> = acknowledgment, not criticism</li>
              <li><span className="font-bold">"Our connection time"</span> = shared thing we both want, not "you're failing me"</li>
              <li><span className="font-bold">"20 min"</span> = specific, manageable, not open-ended emotional demand</li>
              <li><span className="font-bold">"No pressure"</span> = safety signal, nervous system stays calm</li>
            </ul>

            <p className="font-bold text-gray-900">His response:</p>
            <p className="font-medium">"Yeah, I'd like that. Give me 10 to finish this and I'm all yours."</p>
          </div>

          <p className="font-bold text-xl text-center my-8">Same. Exact. Need.</p>
          <p className="font-bold text-xl text-center my-8">Different words.</p>
          <p className="font-bold text-xl text-center my-8">Completely different outcome.</p>

          <p>That's what all 87 of these scripts do.</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">What Women Are Saying After Using These</h2>
          <p className="italic mb-8">(And I'm just going to share these straight because they're better than anything I could say about how this works.)</p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">"Within 20 minutes he opened up about work stress he's been carrying for months..."</h3>
              <p className="text-gray-700 mb-4">"I tried Script #62 from Chapter 5. I'm not kidding, within 20 minutes he opened up about work stress he'd been carrying for MONTHS. He actually cried and apologized for being distant. We talked for 2 hours. I can't remember the last time we talked for 2 hours about anything besides the kids' schedules."</p>
              <p className="text-sm font-bold text-gray-500">— Sarah T., 38 • Pittsburgh, PA • Married 12 years</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">"From 3 texts per week to 15+ daily conversations..."</h3>
              <p className="text-gray-700 mb-4">"I was ready to call a lawyer. I felt completely invisible. I started using the appreciation scripts from Chapter 1. He started texting me throughout the day just to share random thoughts. Yesterday he sent me a funny meme and said 'this made me think of you.' We've gone from maybe 3 meaningful exchanges per WEEK to 15+ actual conversations DAILY. I have my best friend back."</p>
              <p className="text-sm font-bold text-gray-500">— Jennifer M., 34 • Austin, TX • Married 9 years</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">"After $8,000 in failed marriage counseling..."</h3>
              <p className="text-gray-700 mb-4">"We spent $8,000 on marriage therapy over 18 months. My husband hated every session. We quit therapy and I was ready to quit the marriage. The conflict resolution scripts in Chapter 4 gave me the exact words I needed. We solved a 3-year-running argument about his mother in ONE 15-minute conversation. I'm simultaneously furious that a $19 book did what $8,000 of therapy couldn't and incredibly grateful it exists."</p>
              <p className="text-sm font-bold text-gray-500">— Lisa R., 36 • Miami, FL • Married 11 years</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">"He initiated sex for the first time in 8 months..."</h3>
              <p className="text-gray-700 mb-4">"I used Script #31 from the intimacy chapter. Just sent it. Didn't expect much. He came home early from work. Actually TALKED to me for 45 minutes before anything physical happened. Then HE initiated. For the first time in 8 months. I cried. He asked if he did something wrong. I said 'no, you did everything right.' We've had sex 4 times this week. FOUR TIMES. We haven't done that since our honeymoon."</p>
              <p className="text-sm font-bold text-gray-500">— Amanda K., 41 • Denver, CO • Married 15 years</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2">"He said the words I've been waiting 6 years to hear..."</h3>
              <p className="text-gray-700 mb-4">"I used Script #84 during what was shaping up to be our worst fight ever. He stopped mid-sentence. Got quiet. Then said: 'I don't want to fight either. I'm sorry. I know I've been checked out. I don't know how to fix it but I want to try.' Those are the words I've been waiting 6 YEARS to hear. We didn't solve everything that night. But he was actually PRESENT. That's all I wanted."</p>
              <p className="text-sm font-bold text-gray-500">— Rebecca S., 39 • Portland, OR • Married 13 years</p>
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
              <p>Because here's what happens when you text him "how's your day going?" for the 47th time.</p>
              <p>He feels obligated to respond. But he doesn't know what you actually want. So he says "fine" and goes back to work feeling vaguely guilty that he's a bad husband.</p>
              <p>Great. Now you're both frustrated.</p>
              <p>These scripts actually work because they give him something specific to respond to. And they make him feel appreciated instead of interrogated.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #4 (The Appreciation Anchor):</p>
                <p className="italic">"I was thinking about [specific thing he did] earlier. That really meant a lot to me. Thank you."</p>
              </div>

              <p>Why this works: It's specific (not generic "thanks for everything"), it's about something that already happened (so you're not asking for anything), and it's just acknowledgment. No bigger conversation required.</p>
              <p>He reads it. Feels good. Texts back something nice. You both feel connected.</p>
              <p>Done.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 2: Conversation Starter Scripts (13-24)</h3>
              <p className="italic text-gray-600 mb-4">How to bring up something important without triggering his "oh god what did I do now" panic.</p>
              <p>You know that look he gets when you say "we need to talk"?</p>
              <p>That's his nervous system flooding with cortisol because his brain thinks he's about to get criticized.</p>
              <p>Even if you're not criticizing him. Even if you just want to discuss something normal.</p>
              <p>His body doesn't know that. It just knows "we need to talk" = danger.</p>
              <p>These scripts bypass that whole reaction.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #18 (The Safe Entry):</p>
                <p className="italic">"I want to share something with you and get your thoughts. No pressure, just curious what you think about this."</p>
              </div>

              <p>Why this works: "Get your thoughts" activates his problem-solver brain (the part that actually functions well). "No pressure" is a safety signal. "Share something" feels like you're bringing him into something, not confronting him about something.</p>
              <p>His defenses stay down. You can actually have the conversation.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 3: Intimacy Recovery Scripts (25-38)</h3>
              <p className="italic text-gray-600 mb-4">For when the physical connection has been... yeah.</p>
              <p>This is the section women tell me they were most skeptical about.</p>
              <p>Because how is a text going to fix months (years?) of rejected advances, duty sex, or complete physical disconnect?</p>
              <p>Fair question.</p>
              <p>These scripts don't magically make him want to jump you.</p>
              <p>What they do is remove the performance anxiety, pressure, and resentment that's been killing intimacy in the first place.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #31 (The Desire Signal):</p>
                <p className="italic">"I miss being close to you. Not in a 'you're doing something wrong' way. I genuinely just miss US."</p>
              </div>

              <p>Why this works: "I miss" is about your feeling, not his failure. "Being close" is about connection, not sex (removes pressure). You're preemptively addressing his biggest fear (that you're mad at him). "US" makes it a shared thing you both want, not something he's supposed to provide.</p>
              <p>Amanda (the woman who'd had sex 4 times in a week after sending this) said her husband's whole face changed when he read it.</p>
              <p>He'd been avoiding her because he thought she was angry. Turns out he missed her too.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 4: Conflict Resolution Scripts (39-54)</h3>
              <p className="italic text-gray-600 mb-4">How to address actual problems without starting World War 3.</p>
              <p>Small disagreements shouldn't become massive fights.</p>
              <p>But they do. Because the way we naturally bring up problems triggers defensiveness.</p>
              <p>And once he's defensive, his capacity for reason is gone. Now you're both just trying to win instead of solve anything.</p>
              <p>These scripts keep his brain in problem-solving mode instead of defense mode.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #47 (The Problem-Solving Invite):</p>
                <p className="italic">"I need your help figuring something out. You're really good at [relevant skill]. Can I get 10 minutes of your brain?"</p>
              </div>

              <p>Why this works: "Need your help" activates his hero mode. Acknowledging his competence makes him feel valued instead of attacked. Specific timeframe (10 minutes) makes it manageable. "Your brain" frames it as intellectual problem-solving, not emotional processing.</p>
              <p>Lisa (the one who spent $8k on therapy) used a version of this to finally resolve the mother-in-law thing.</p>
              <p>15 minutes. Three years of fighting. Done.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 5: Vulnerability Scripts (55-68)</h3>
              <p className="italic text-gray-600 mb-4">Getting him to actually tell you what's wrong instead of saying "I'm fine."</p>
              <p>Men don't share what's bothering them because they've learned that sharing feelings often makes things worse.</p>
              <p>Either you try to fix it (which makes them feel incompetent). Or you get upset that they're upset (now they're managing your emotions on top of their own). Or you don't understand the problem (so they feel more alone).</p>
              <p>So they just... don't share.</p>
              <p>These scripts create actual safety. The kind where he knows you're not going to freak out or try to solve it or make it about you.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #62 (The Emotional Safety Net):</p>
                <p className="italic">"I know you've got a lot on your plate. I'm here if you want to talk about it. And also totally fine if you don't. Just want you to know I'm on your side."</p>
              </div>

              <p>Why this works: You're acknowledging his reality without making him explain it. You're offering support without demanding he take it. You're giving him agency to choose. And "on your side" positions you as teammate, not opponent.</p>
              <p>Sarah's husband (the one who cried about work stress) said later that he'd been wanting to talk about it for months but didn't know how to bring it up without it becoming a whole thing.</p>
              <p>This script made it safe.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 6: Boundary Scripts (69-78)</h3>
              <p className="italic text-gray-600 mb-4">How to ask for what you need without starting a fight.</p>
              <p>Asking for help shouldn't feel like pulling teeth.</p>
              <p>Setting boundaries around his mom/friends/work shouldn't make you the bad guy.</p>
              <p>But it does. Because the way we naturally make requests sounds like criticism or demands.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #73 (The Clean Request):</p>
                <p className="italic">"Would you be willing to [specific action]? It would really help me with [specific outcome]."</p>
              </div>

              <p>Why this works: "Would you be willing" respects his agency (he can choose). Being specific means he knows exactly what you're asking for. Explaining the outcome helps him understand why it matters.</p>
              <p>No guilt. No score-keeping. Just a clear request.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Chapter 7: Emergency Scripts (79-87)</h3>
              <p className="italic text-gray-600 mb-4">When things are at breaking point and you need something that works right now.</p>
              <p>Not next week after you've both calmed down.</p>
              <p>Not after you've processed it in therapy.</p>
              <p>Now.</p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-bold">Script #84 (The Reset Button):</p>
                <p className="italic">"I don't want to fight. I want to understand you. Can we start over?"</p>
              </div>

              <p>Why this works: States what you DO want (not what you don't). "Understand you" makes it about him, not you. "Start over" offers hope instead of blame. And it's short (when emotions are high, fewer words work better).</p>
              <p>Rebecca used this during their worst fight in 6 years.</p>
              <p>He stopped mid-sentence. Apologized. Said he didn't know how to fix things but wanted to try.</p>
              <p>They're still married. That was 2 years ago.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">BONUS: Chapter 8 - Understanding His Brain</h3>
              <p className="italic text-gray-600 mb-4">The science behind why this actually works.</p>
              <p>Gottman's research on how men process emotions differently. Why "I feel" statements backfire. The phrases that trigger his defensive mode. How his nervous system works when he feels criticized vs supported. When to have important conversations vs when to wait.</p>
              <p>You'll finally understand WHY he reacts the way he does.</p>
              <p>And how to work with his biology instead of fighting against it.</p>
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

          <p>The problem with all that advice?</p>
          <p>It assumes your husband processes emotional information the same way you do.</p>
          <p>He doesn't.</p>
          <p>So when you express yourself naturally, his brain interprets it as criticism. His nervous system floods with stress hormones. His capacity for empathy shuts down.</p>
          <p>But when you restructure the same message using these scripts?</p>
          <p>His brain stays calm. He actually hears you. He wants to help.</p>
          <p className="font-bold text-lg my-4" >Same meaning. Different words. He finally responds.</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Why This Works (Even When Everything Else Failed)</h2>
          <p>You've probably tried a lot of things.</p>
          <p>Marriage counseling. Date nights. Reading The 5 Love Languages (alone, because he refused). Trying to be "less emotional." Giving him space. Being more direct. Planning weekend getaways. Asking his friends for advice. Praying about it. Accepting that "this is just how marriage is."</p>
          <p>You're still here reading this.</p>
          <p>So none of it worked.</p>
          <p>Here's why.</p>

          <hr className="my-8 border-gray-200" />

          <p>Every piece of advice told you to communicate BETTER.</p>
          <p>No one told you to communicate DIFFERENTLY.</p>
          <p>There's a difference.</p>
          <p>Communicating better = saying the same thing more clearly.</p>
          <p>Communicating differently = restructuring the message so his brain can process it.</p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-bold underline mb-2">Example:</p>
            <div className="mb-4">
              <p className="font-semibold">Communicating BETTER:</p>
              <p className="italic">"I feel lonely in this marriage. I need more emotional connection from you."</p>
              <p className="text-sm text-gray-600">(Clearer. More direct. Still triggers his defensive response.)</p>
            </div>
            <div>
              <p className="font-semibold">Communicating DIFFERENTLY:</p>
              <p className="italic">"I miss our connection time. Would you be willing to spend 20 minutes tonight just talking? No pressure, I just miss us."</p>
              <p className="text-sm text-gray-600">(Same need. Different structure. His brain stays calm enough to hear you.)</p>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          <p>These scripts work because:</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They're based on actual neuroscience</h3>
          <p>Dr. Gottman studied 3,000+ couples over 40 years. He identified the exact language patterns that keep marriages strong vs those that predict divorce.</p>
          <p>These scripts use the patterns that work.</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They speak to how his brain actually processes information</h3>
          <p>Men process emotional information more slowly than women. They need things to be specific (not vague), one point at a time (not multiple issues), clear requests (not implied expectations), and safety signals (so their nervous system doesn't trigger fight-or-flight).</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They're plug-and-play</h3>
          <p>You don't need to understand attachment theory. Process your childhood trauma. Get him to read a book. Convince him therapy is important. Wait until he's "ready to work on things."</p>
          <p>You just copy the script. Send it. Watch what happens.</p>

          <h3 className="font-bold text-lg mt-6 mb-2">They work even if he's not trying</h3>
          <p>These scripts are designed to bypass his defensiveness.</p>
          <p>So even if he's checked out, exhausted, or convinced the marriage is fine "the way it is," the right words still get through.</p>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6">Questions You Probably Have</h2>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg">"Will he know I'm using scripts?"</p>
              <p>No. These read like normal texts.</p>
              <p>The "science" part is invisible to him. He just experiences you as easier to talk to.</p>
              <p>(Several women reported their husbands saying "you've been different lately" or "I like how we've been talking" without knowing why.)</p>
            </div>

            <div>
              <p className="font-bold text-lg">"What if he just doesn't care anymore?"</p>
              <p>If he's still responding to your texts at all, there's something to work with.</p>
              <p>These scripts are specifically designed for men who seem checked out. They create safety first, then connection.</p>
              <p>One woman used Script #84 during what she thought was their final fight before divorce papers.</p>
              <p>He stopped mid-argument and said "I don't want to fight either. I'm sorry."</p>
              <p>They're still married. That was 2 years ago.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"Isn't this just manipulation?"</p>
              <p>No.</p>
              <p>Manipulation is getting someone to do what YOU want by being dishonest.</p>
              <p>These scripts help you express what you ACTUALLY mean in a way his brain can ACTUALLY process.</p>
              <p>You're not changing your message. You're translating it.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"What if I've already tried everything and screwed things up?"</p>
              <p>Good news: these scripts work especially well for recovering from past fights.</p>
              <p>Chapter 7 has specific "reset" scripts designed for when things feel broken.</p>
              <p>Multiple women reported these working even after separations, affairs, or years of built-up resentment.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"Do I have to use these forever?"</p>
              <p>No.</p>
              <p>Once he experiences you as "safe to open up to," his brain starts to relax around you naturally.</p>
              <p>Most women report needing the scripts less after 30-60 days because the dynamic has shifted.</p>
              <p>But you'll probably keep using them anyway because they work so well.</p>
            </div>

            <div>
              <p className="font-bold text-lg">"What if my situation is different/worse/more complicated?"</p>
              <p>The 87 scripts cover different personality types, different conflict styles, different levels of disconnect (from "distant" to "ready to divorce"), and different specific issues (intimacy, parenting, in-laws, money).</p>
              <p>Chances are high there's a script for your exact situation.</p>
              <p>And if not, Chapter 8 teaches you the formula so you can create your own.</p>
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
            <p><span className="font-bold">Month 1:</span> You haven't had a fight in weeks (not because you're avoiding conflict, because you're addressing things before they escalate)</p>
            <p><span className="font-bold">Month 3:</span> Your friends ask what changed. You can't quite explain it. Things just feel good again.</p>
          </div>

          <div className="my-12 text-center">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS - $19 <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 mt-2">60-Day Money-Back Guarantee</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="w-16 h-16 text-[#E67E7E]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold serif mb-6 text-center">Our "It Works Or It's Free" Guarantee</h2>
            <p>Get the 87 scripts. Try them for 60 days.</p>
            <p>If you don't see your husband responding differently - if conversations don't get easier - if things don't start to feel better...</p>
            <p>Email us. We'll refund every penny. No questions asked.</p>
            <p>You can even keep the guide.</p>
            <p>Why would we do this?</p>
            <p>Because these scripts work.</p>
            <p>And we know once you see your husband actually HEAR you for the first time in months (maybe years), you're not going to ask for a refund.</p>
          </div>

          <hr className="my-12 border-gray-200" />

          <h2 className="text-2xl md:text-3xl font-bold serif mb-6 text-center">Get All 87 Scripts For $19</h2>
          <p className="text-center mb-8">Here's what you're getting:</p>

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
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>BONUS Chapter 8: The science behind why this works (so you can create your own scripts)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>Instant digital access (PDF download sent to your email immediately)</span></li>
              <li className="flex gap-2"><Check className="text-green-500 shrink-0" /> <span>60-day money-back guarantee (it works or it's free)</span></li>
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
          <p>You've been trying to get him to hear you for how long now?</p>
          <p>Months? Years?</p>
          <p>You've probably thought "maybe this is just how marriage is supposed to be" or "maybe I'm expecting too much" or "maybe he's just not capable of this kind of connection."</p>
          <p>The husbands in those testimonials above seemed just as checked out. Just as defensive. Just as "not capable of emotional connection."</p>
          <p>Until their wives started speaking a language their brains could actually process.</p>
          <p>Then everything changed.</p>
          <p>Not overnight. But fast enough that these women knew something was different within days.</p>

          <div className="my-8 bg-rose-50 p-6 rounded-lg text-center">
            <p className="font-medium text-lg mb-4">You can keep trying the same approach and hoping for different results.</p>
            <p className="font-medium text-lg mb-4">Or you can try something that's already worked for 500+ other women in your exact situation.</p>
            <p className="font-bold text-xl">$19. 87 scripts. 60-day guarantee.</p>
            <p className="font-bold text-xl mt-2">What do you actually have to lose?</p>
          </div>

          <div className="text-center mb-12">
            <a href="https://connectioncode.checkoutpage.com/the-connection-code" className="coral-button text-white text-lg px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" data-checkout="https://connectioncode.checkoutpage.com/the-connection-code">
              GET ALL 87 SCRIPTS NOW - $19 <ArrowRight className="w-5 h-5" />
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
