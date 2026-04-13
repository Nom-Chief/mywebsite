'use client';

import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// ─── Human content ────────────────────────────────────────────────────────────

const workProjects = [
  {
    name: "Clean Your Room",
    description: "Clean Your Room is an AI-powered iOS app that gives you a personalized, step-by-step plan to tackle the overwhelming task of cleaning your room. Instead of staring at the mess not knowing where to start, the app uses AI to break it down into simple, manageable steps based on what you're actually dealing with. Set customizable goals, work through them one task at a time, and make real progress without the paralysis."
  },
  {
    name: "Dusty Psalms",
    description: "It's time to dust off our Psalms and dedicate a few minutes a day to prayer. After going through all the currently available Psalm apps on the App Store nothing was a simple straight forward Psalm app with all the features I wanted. Focus on 1 Psalms a day. Ability to easily save and share passages. Multi Language Support. Track your trends and build healthy habits. That's why I built Dusty Psalms. Hope you enjoy!"
  },
  {
    name: "MeetLink",
    description: "MeetLink is an online meeting link generator tool that helps simplify meeting schedules using personalized URL (Landing Page) to track all your meetings and appointments. It provides you a customizable landing page to share when meeting online for all your calendar meetings with personal info, time, scheduling, and links. This leads to one-of-a-kind branding experience. Bid farewell to link chaos, save time, and make a lasting impact with your personal meeting oasis."
  },
  {
    name: "Cliq Fit",
    description: "CliqFit is a fun fitness bingo app where you earn squares by exercising. You can play on your own or challenge your friends to see who can complete their board first. It's a cool way to stay active, stay motivated, and turn workouts into a game!"
  },
  {
    name: "FRM",
    description: "FRM (Fundraiser Relationship Manager) is your fundraising brain — built specifically for fundraisers and nonprofit teams who want to raise more money through relationships. Unlike traditional CRMs that just store donor data, FRM helps you take action. It tells you who to follow up with, when, and why, and even helps you write personalized messages with the help of AI — without ever losing your human touch."
  },
  {
    name: "Nom.Space",
    description: "Nom.space, a name routing service on the Celo blockchain. Was the featured dApp on the chain with over 60,000 names reserved for over 150,000 years. Launched a complimentary NFT selling out 6000 Nomstronauts in 4 minutes. The largest NFT launch on the Celo blockchain."
  },
  {
    name: "The Kosher App",
    description: "The Kosher App, an app that used computer vision and machine learning to identify Kosher symbols and tell the user if they were cRc approved. Created a viral video to promote it resulting in 30,000 views and converted to 7,000 downloads in its first week."
  }
];

const experiments = [
  { name: "Hebrew Flash Cards", url: "https://hebrewflash.cards/" },
  { name: "InPoster", url: "https://chromewebstore.google.com/detail/inposter/kegpeingogjkabmihjgmkoclebkfdihd" },
  { name: "Israel Car Inspection", url: "https://www.israelcarinspection.com/" }
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chaimg/", icon: FaLinkedin },
  { name: "X", url: "https://x.com/runchaimrun", icon: FaXTwitter },
  { name: "Email", url: "mailto:chaim.y.gross@gmail.com", icon: FaEnvelope }
];

// ─── Gen Z content ────────────────────────────────────────────────────────────

const genZWorkProjects = [
  {
    name: "Clean Your Room 🧹✨🛏️",
    url: "https://apps.apple.com/us/app/clean-your-room-step-by-step/id6756962683",
    description: "okay so 😭 we have ALL been there — staring at the MESS not knowing where to even START 💀🫠 this app is AI-powered 🤖✨ and gives u a PERSONALIZED step by step cleaning plan based on YOUR specific disaster zone 🏠💥 set customizable goals 🎯✨, knock them out one by one 📋💪, and actually make progress without the paralysis 🧠🔥 no more doom scrolling instead of cleaning bestie 📱➡️🧹 we're SO back fr fr 👑💫"
  },
  {
    name: "Dusty Psalms 🙏✨🕯️",
    url: "/dusty-psalms-privacy",
    description: "okay so 😭 i literally could not find a psalm app that wasn't mid 💀 so i just built one myself no cap 🤌✨ one psalm a day 📖🌟, super easy saving and sharing 🔗💫, multi language support 🌍🌎🌏, and habit tracking 📈🔥 bc we're out here growing fr fr 🙏💪✨ hope u enjoy bestie 💕"
  },
  {
    name: "MeetLink 🔗💅✨",
    url: "https://meetlink.co/",
    description: "bro 😭😭 why are people still sending like five different zoom links in ONE email 💀💀 MeetLink is literally ur personal meeting page 🌐✨ — one link 🔗, all ur stuff 💼, actually slay branding 👑💅 bid farewell to link chaos 🫡💀, save time ⏰✨, and make a lasting impact 🌟🔥 it's giving meeting oasis vibes fr 🏝️💫"
  },
  {
    name: "Cliq Fit 🏋️🎯🔥",
    url: "https://cliqfitapp.com/",
    description: "FITNESS BINGO 🎉🏆 but make it actually fun 😭✨ you earn squares by actually working out 💪🔥🏃 you can go solo or drag ur friends into it and watch them suffer too 😈😂💀 it's a VIBE 🌊✨ stay active 🏃‍♀️, stay motivated 🔥💪, turn workouts into a whole game 🎮🏆 lowkey the most fun way to not be a couch gremlin ngl 🛋️💀"
  },
  {
    name: "FRM 🧠💰🎯",
    url: "https://getfrm.com/",
    description: "okay so 👀 it's a CRM but like... it actually DOES stuff?? 🤯✨ it literally tells you who to follow up with 📋, when ⏰, and why 🧠💡 and it helps you WRITE personalized messages with AI 🤖✨ without ever losing ur human touch 🤝💕 fundraising girlies AND guys 🙌 this one's 4 u fr fr 🔥💸 the old way is so cooked 💀🗑️"
  },
  {
    name: "Nom.Space 🚀⛓️👑",
    url: "https://nom.space/#/",
    description: "name routing on the CELO BLOCKCHAIN 🔗✨ and it absolutely ATE 🍽️👑💅 featured dApp on the chain 🌟, over 60,000 names reserved 🤯🎉, for over 150,000 YEARS 😭😭 launched a complimentary NFT 🖼️✨ and sold out 6000 Nomstronauts 🚀👨‍🚀 in FOUR MINUTES 💀🔥 biggest NFT launch on celo blockchain PERIODT 👑🌍"
  },
  {
    name: "The Kosher App 👀📷✡️",
    url: "https://www.youtube.com/watch?v=9oQqiWw2esg",
    description: "used computer vision 👁️🤖 AND machine learning 🧠💻 to identify kosher symbols 🔍✡️ and tell u if it's cRc approved 📋✅ then i made a VIRAL VIDEO 🎬🔥 30,000 VIEWS 😭🤯 and converted to 7,000 downloads 📲💥 in the FIRST WEEK 🗓️🚀 the algorithm said yes bestie ✨🙏"
  }
];

const genZExperiments = [
  { name: "Hebrew Flash Cards 🔤✨", url: "https://hebrewflash.cards/" },
  { name: "InPoster 📌🔥", url: "https://chromewebstore.google.com/detail/inposter/kegpeingogjkabmihjgmkoclebkfdihd" },
  { name: "Israel Car Inspection 🚗💨", url: "https://www.israelcarinspection.com/" }
];

const genZSocialLinks = [
  { name: "LinkedIn 💼✨", url: "https://www.linkedin.com/in/chaimg/", icon: FaLinkedin },
  { name: "X / Twitter 🐦🔥", url: "https://x.com/runchaimrun", icon: FaXTwitter },
  { name: "Email 📬💌", url: "mailto:chaim.y.gross@gmail.com", icon: FaEnvelope }
];

// ─── Robots View ──────────────────────────────────────────────────────────────

const T = ({ c }: { c: string }) => <span style={{ color: '#569CD6' }}>{c}</span>;
const A = ({ c }: { c: string }) => <span style={{ color: '#9CDCFE' }}>{c}</span>;
const V = ({ c }: { c: string }) => <span style={{ color: '#CE9178' }}>{c}</span>;
const K = ({ c }: { c: string }) => <span style={{ color: '#C586C0' }}>{c}</span>;
const Cm = ({ c }: { c: string }) => <span style={{ color: '#6A9955' }}>{c}</span>;

function RobotsView() {
  return (
    <div style={{ backgroundColor: '#1e1e1e', minHeight: '100vh', padding: '2rem 2.5rem' }}>
      <pre style={{ fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace', fontSize: '13px', lineHeight: '1.7', color: '#D4D4D4', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
        <K c={'<!DOCTYPE html>'} />{'\n'}
        <T c="<html" /> <A c="lang" />=<V c={'"en"'} /><T c=">" />{'\n'}
        {'  '}<T c="<head>" />{'\n'}
        {'    '}<T c="<meta" /> <A c="charset" />=<V c={'"UTF-8"'} /> <T c="/>" />{'\n'}
        {'    '}<T c="<meta" /> <A c="name" />=<V c={'"viewport"'} /> <A c="content" />=<V c={'"width=device-width, initial-scale=1.0"'} /> <T c="/>" />{'\n'}
        {'    '}<T c="<title" />{'>'}Chaim Gross — Portfolio{'<'}<T c="/title>" />{'\n'}
        {'    '}<Cm c="<!-- Product-focused entrepreneur, 10+ years building digital products -->" />{'\n'}
        {'  '}<T c="</head>" />{'\n'}
        {'\n'}
        {'  '}<T c="<body>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ HEADER ══════════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<header>" />{'\n'}
        {'      '}<T c="<img" /> <A c="src" />=<V c={'"//CG_image.PNG"'} /> <A c="alt" />=<V c={'"Chaim Gross Profile"'} /> <T c="/>" />{'\n'}
        {'      '}<T c="<h1" /><T c=">" />Chaim Gross<T c="</h1>" />{'\n'}
        {'    '}<T c="</header>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ ABOUT ════════════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<section" /> <A c="id" />=<V c={'"about"'} /><T c=">" />{'\n'}
        {'      '}<T c="<h2" /><T c=">" />About<T c="</h2>" />{'\n'}
        {'      '}<T c="<p>" />{'\n'}
        {'        '}I am currently working at{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://zenomedia.com"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Zeno Media<T c="</a>" />,{'\n'}
        {'        '}an international streaming and podcasting company,{'\n'}
        {'        '}with a background in computer science and design.{'\n'}
        {'        '}My passion is to build and grow digital products and businesses{'\n'}
        {'        '}that millions of users use and love. I have over 10 years of{'\n'}
        {'        '}experience working on my own ideas and others, taking them from{'\n'}
        {'        '}the back of a napkin, launch, growth, and then{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://www.prnewswire.com/..."'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />success<T c="</a>" />.{'\n'}
        {'        '}Let&apos;s see how we can work together.{'\n'}
        {'      '}<T c="</p>" />{'\n'}
        {'    '}<T c="</section>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ ZENO MEDIA ══════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<section" /> <A c="id" />=<V c={'"zeno-media"'} /><T c=">" />{'\n'}
        {'      '}<T c="<h2" /><T c=">" />Zeno Media<T c="</h2>" />{'\n'}
        {'      '}<T c="<p>" />{'\n'}
        {'        '}Currently leading multiple product initiatives at Zeno Media,{'\n'}
        {'        '}with a focus on{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://zenoplus.co"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Zeno Plus<T c="</a>" />,{'\n'}
        {'        '}a suite of smart tools designed to help broadcasters produce,{'\n'}
        {'        '}edit, distribute, and monetize their radio stations with ease.{'\n'}
        {'        '}Being hired as employee number 5 I have led product and growth{'\n'}
        {'        '}taking us from 10,000 listeners to now 40 million MAU listeners,{'\n'}
        {'        '}43,000 radio stations and a top 10 streaming company worldwide.{'\n'}
        {'        '}I have lead initiatives including{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://zeno.fm"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Zeno.FM<T c="</a>" />,{'\n'}
        {'        '}Podcast by Phone, and{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://audioclips.ai"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Audioclips.ai<T c="</a>" />{'\n'}
        {'        '}our AI audio generation tool for broadcasters and podcasters.{'\n'}
        {'      '}<T c="</p>" />{'\n'}
        {'    '}<T c="</section>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ PROJECTS ════════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<section" /> <A c="id" />=<V c={'"projects"'} /><T c=">" />{'\n'}
        {'      '}<T c="<h2" /><T c=">" />Projects<T c="</h2>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"clean-your-room"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />Clean Your Room<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"productivity"'} /> <A c="data-platform" />=<V c={'"ios"'} /> <A c="data-ai" />=<V c={'"true"'} /> <A c="data-url" />=<V c={'"https://apps.apple.com/us/app/clean-your-room-step-by-step/id6756962683"'} /><T c=">" />{'\n'}
        {'          Clean Your Room is an AI-powered iOS app that gives you a personalized,'}{'\n'}
        {'          step-by-step plan to tackle the overwhelming task of cleaning your room.'}{'\n'}
        {'          Instead of staring at the mess not knowing where to start, the app uses'}{'\n'}
        {'          AI to break it down into simple, manageable steps based on what you\'re'}{'\n'}
        {'          actually dealing with. Set customizable goals, work through them one task'}{'\n'}
        {'          at a time, and make real progress without the paralysis.'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"dusty-psalms"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />Dusty Psalms<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"prayer-app"'} /> <A c="data-platform" />=<V c={'"ios"'} /><T c=">" />{'\n'}
        {"          It's time to dust off our Psalms and dedicate a few minutes a day to prayer."}{'\n'}
        {'          After going through all the currently available Psalm apps on the App Store'}{'\n'}
        {'          nothing was a simple straight forward Psalm app with all the features I wanted.'}{'\n'}
        {'          Focus on 1 Psalm a day. Ability to easily save and share passages.'}{'\n'}
        {'          Multi Language Support. Track your trends and build healthy habits.'}{'\n'}
        {"          That's why I built Dusty Psalms. Hope you enjoy!"}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"meetlink"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />MeetLink<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"productivity"'} /> <A c="data-url" />=<V c={'"https://meetlink.co/"'} /><T c=">" />{'\n'}
        {'          MeetLink is an online meeting link generator tool that helps simplify'}{'\n'}
        {'          meeting schedules using personalized URL (Landing Page) to track all your'}{'\n'}
        {'          meetings and appointments. It provides you a customizable landing page to'}{'\n'}
        {'          share when meeting online for all your calendar meetings with personal info,'}{'\n'}
        {'          time, scheduling, and links. This leads to one-of-a-kind branding experience.'}{'\n'}
        {'          Bid farewell to link chaos, save time, and make a lasting impact with your'}{'\n'}
        {'          personal meeting oasis.'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"cliq-fit"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />Cliq Fit<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"fitness"'} /> <A c="data-url" />=<V c={'"https://cliqfitapp.com/"'} /><T c=">" />{'\n'}
        {'          CliqFit is a fun fitness bingo app where you earn squares by exercising.'}{'\n'}
        {'          You can play on your own or challenge your friends to see who can complete'}{'\n'}
        {"          their board first. It's a cool way to stay active, stay motivated,"}{'\n'}
        {'          and turn workouts into a game!'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"frm"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />FRM<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"saas"'} /> <A c="data-url" />=<V c={'"https://getfrm.com/"'} /><T c=">" />{'\n'}
        {'          FRM (Fundraiser Relationship Manager) is your fundraising brain — built'}{'\n'}
        {'          specifically for fundraisers and nonprofit teams who want to raise more money'}{'\n'}
        {'          through relationships. Unlike traditional CRMs that just store donor data,'}{'\n'}
        {'          FRM helps you take action. It tells you who to follow up with, when, and why,'}{'\n'}
        {'          and even helps you write personalized messages with the help of AI —'}{'\n'}
        {'          without ever losing your human touch.'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"nom-space"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />Nom.Space<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"web3"'} /> <A c="data-blockchain" />=<V c={'"celo"'} /> <A c="data-url" />=<V c={'"https://nom.space/"'} /><T c=">" />{'\n'}
        {'          Nom.space, a name routing service on the Celo blockchain.'}{'\n'}
        {'          Was the featured dApp on the chain with over 60,000 names reserved'}{'\n'}
        {'          for over 150,000 years. Launched a complimentary NFT selling out'}{'\n'}
        {'          6000 Nomstronauts in 4 minutes. The largest NFT launch on the Celo blockchain.'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'      '}<T c="<article" /> <A c="id" />=<V c={'"the-kosher-app"'} /><T c=">" />{'\n'}
        {'        '}<T c="<h3" /><T c=">" />The Kosher App<T c="</h3>" />{'\n'}
        {'        '}<T c="<p" /> <A c="data-category" />=<V c={'"ml-cv"'} /> <A c="data-downloads" />=<V c={'"7000"'} /> <A c="data-timeframe" />=<V c={'"week-1"'} /><T c=">" />{'\n'}
        {'          The Kosher App, an app that used computer vision and machine learning'}{'\n'}
        {'          to identify Kosher symbols and tell the user if they were cRc approved.'}{'\n'}
        {'          Created a viral video to promote it resulting in 30,000 views and'}{'\n'}
        {'          converted to 7,000 downloads in its first week.'}{'\n'}
        {'        '}<T c="</p>" />{'\n'}
        {'      '}<T c="</article>" />{'\n'}
        {'\n'}
        {'    '}<T c="</section>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ OTHER STUFF ═════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<section" /> <A c="id" />=<V c={'"other-stuff"'} /><T c=">" />{'\n'}
        {'      '}<T c="<h2" /><T c=">" />Other Stuff<T c="</h2>" />{'\n'}
        {'      '}<T c="<ul" /> <A c="data-type" />=<V c={'"experiments"'} /><T c=">" />{'\n'}
        {'        '}<T c="<li>" /><T c="<a" /> <A c="href" />=<V c={'"https://hebrewflash.cards/"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Hebrew Flash Cards<T c="</a>" /><T c="</li>" />{'\n'}
        {'        '}<T c="<li>" /><T c="<a" /> <A c="href" />=<V c={'"https://chromewebstore.google.com/detail/inposter/..."'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />InPoster<T c="</a>" /><T c="</li>" />{'\n'}
        {'        '}<T c="<li>" /><T c="<a" /> <A c="href" />=<V c={'"https://www.israelcarinspection.com/"'} /> <A c="target" />=<V c={'"_blank"'} /><T c=">" />Israel Car Inspection<T c="</a>" /><T c="</li>" />{'\n'}
        {'      '}<T c="</ul>" />{'\n'}
        {'    '}<T c="</section>" />{'\n'}
        {'\n'}
        {'    '}<Cm c="<!-- ═══ GET IN TOUCH ════════════════════════════════════════════ -->" />{'\n'}
        {'    '}<T c="<section" /> <A c="id" />=<V c={'"get-in-touch"'} /><T c=">" />{'\n'}
        {'      '}<T c="<h2" /><T c=">" />Get in Touch<T c="</h2>" />{'\n'}
        {'      '}<T c="<nav" /> <A c="aria-label" />=<V c={'"Social links"'} /><T c=">" />{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://www.linkedin.com/in/chaimg/"'} /> <A c="target" />=<V c={'"_blank"'} /> <A c="rel" />=<V c={'"noopener noreferrer"'} /><T c=">" />LinkedIn<T c="</a>" />{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"https://x.com/runchaimrun"'} /> <A c="target" />=<V c={'"_blank"'} /> <A c="rel" />=<V c={'"noopener noreferrer"'} /><T c=">" />X<T c="</a>" />{'\n'}
        {'        '}<T c="<a" /> <A c="href" />=<V c={'"mailto:chaim.y.gross@gmail.com"'} /><T c=">" />Email<T c="</a>" />{'\n'}
        {'      '}<T c="</nav>" />{'\n'}
        {'    '}<T c="</section>" />{'\n'}
        {'\n'}
        {'  '}<T c="</body>" />{'\n'}
        <T c="</html>" />
      </pre>
    </div>
  );
}

// ─── Gen Z View ───────────────────────────────────────────────────────────────

function GenZView({ expandedProject, toggleProject }: { expandedProject: string | null; toggleProject: (name: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <header className="mb-24 pr-32">
          <div className="flex items-center gap-8 mb-8">
            <img
              src="/CG_image.PNG"
              alt="Chaim Gross Profile"
              className="w-24 h-24 object-cover"
            />
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground">chaim gross ✨🔥</h1>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">abt me 💁✨</h2>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed text-lg">
                currently locked IN 🔒💪 at{' '}
                <a href="https://zenomedia.com" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Media</a>{' '}
                📻🌍 (it&apos;s giving international streaming empire fr 👑✨) — cs + design background 💻🎨 but make it chaotic good 🧠😭 my passion is building digital products 🛠️✨ that like MILLIONS of ppl use and love 💕🌍 10+ years experience 🗓️🔥 taking ideas from back of a napkin 🗒️ all the way to{' '}
                <a href="https://www.prnewswire.com/news-releases/zeno-media-announces-zenofm-a-new-tool-for-broadcasters-to-increase-their-streaming-content-and-worldwide-user-base-300905192.html" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">SUCCESS</a>{' '}
                🚀📈🏆✨ let&apos;s see how we can work together bestie 🤝💫
              </p>
            </div>
          </div>
        </section>

        {/* Zeno Media */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">my 9-5 (kinda) 🔥💼</h2>
            </div>
            <div className="flex-1">
              <p className="text-foreground leading-relaxed text-lg">
                currently leading multiple product initiatives 🚀💼 at Zeno Media with a focus on{' '}
                <a href="https://zenoplus.co" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Plus</a>{' '}
                ✨🎙️ — a suite of SMART tools 🧠🛠️ designed to help broadcasters produce 🎬, edit ✂️, distribute 🌍, and monetize 💰 their radio stations with ease 😌✨ i was employee NUMBER FIVE 🖐️😭 and led product and growth from 10,000 listeners 😮 to NOW 40 MILLION MAU 🤯🤯🔥 43,000 radio stations 📻🌎 top 10 streaming company WORLDWIDE 🏆👑 i&apos;ve led{' '}
                <a href="https://zeno.fm" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno.FM</a>{' '}
                🎙️, Podcast by Phone 📞✨, and{' '}
                <a href="https://audioclips.ai" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Audioclips.ai</a>{' '}
                🤖🎵 our AI audio generation tool fr 🔥
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">stuff i built 🛠️🔥</h2>
            </div>
            <div className="flex-1 space-y-8">
              {genZWorkProjects.map((project) => (
                <div key={project.name} className="border-b border-border/50 last:border-b-0 pb-8 last:pb-0">
                  <button
                    onClick={() => toggleProject(project.name)}
                    className="text-left group flex-1"
                  >
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-[#E79600] transition-colors duration-200">
                      {project.name}
                    </h3>
                  </button>
                  {expandedProject === project.name && (
                    <div className="mt-6">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        <a href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#E79600] hover:underline transition-colors duration-200">
                          {project.name.split(' ')[0]}
                        </a>{' '}
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Stuff */}
        <section className="mb-20">
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">random other stuff 🧪✨</h2>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-10">
                {genZExperiments.map((experiment) => (
                  <a
                    key={experiment.name}
                    href={experiment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-[#E79600] hover:underline transition-colors duration-200"
                  >
                    {experiment.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section>
          <div className="flex gap-16 items-start">
            <div className="flex-shrink-0 w-20">
              <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">slide in 📩💌</h2>
            </div>
            <div className="flex-1">
              <div className="flex gap-10">
                {genZSocialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-[#E79600] transition-colors duration-200 group"
                      aria-label={link.name}
                    >
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-base font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [mode, setMode] = useState<'human' | 'robots' | 'genz'>('human');

  const toggleProject = (projectName: string) => {
    setExpandedProject(expandedProject === projectName ? null : projectName);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mode Toggle — fixed top-right */}
      <div className="fixed top-6 right-8 z-50 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-gray-100">
        {(['human', 'robots', 'genz'] as const).map((m, i) => (
          <span key={m} className="flex items-center gap-4">
            {i > 0 && <span className="text-gray-200 select-none">|</span>}
            <button
              onClick={() => setMode(m)}
              className={`text-[10px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
                mode === m ? 'text-[#E79600]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {m === 'human' ? 'Human' : m === 'robots' ? 'Robots' : 'Gen Z'}
            </button>
          </span>
        ))}
      </div>

      {/* Content */}
      {mode === 'robots' ? (
        <RobotsView />
      ) : mode === 'genz' ? (
        <GenZView expandedProject={expandedProject} toggleProject={toggleProject} />
      ) : (
        <div className="max-w-4xl mx-auto px-8 py-20">
          {/* Header */}
          <header className="mb-24 pr-32">
            <div className="flex items-center gap-8 mb-8">
              <img
                src="/CG_image.PNG"
                alt="Chaim Gross Profile"
                className="w-24 h-24 object-cover"
              />
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground">Chaim Gross</h1>
              </div>
            </div>
          </header>

          {/* About Section */}
          <section className="mb-20">
            <div className="flex gap-16 items-start">
              <div className="flex-shrink-0 w-20">
                <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">About</h2>
              </div>
              <div className="flex-1">
                <p className="text-foreground leading-relaxed text-lg">
                  I am currently working at <a href="https://zenomedia.com" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Media</a>, an international streaming and podcasting company, with a background in computer science and design. My passion is to build and grow digital products and businesses that millions of users use and love. I have over 10 years of experience working on my own ideas and others, taking them from the back of a napkin, launch, growth, and then <a href="https://www.prnewswire.com/news-releases/zeno-media-announces-zenofm-a-new-tool-for-broadcasters-to-increase-their-streaming-content-and-worldwide-user-base-300905192.html" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">success</a>. Let's see how we can work together.
                </p>
              </div>
            </div>
          </section>

          {/* Zeno Media Section */}
          <section className="mb-20">
            <div className="flex gap-16 items-start">
              <div className="flex-shrink-0 w-20">
                <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Zeno Media</h2>
              </div>
              <div className="flex-1">
                <p className="text-foreground leading-relaxed text-lg">
                  Currently leading multiple product initiatives at Zeno Media, with a focus on <a href="https://zenoplus.co" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno Plus</a>, a suite of smart tools designed to help broadcasters produce, edit, distribute, and monetize their radio stations with ease. Being hired as employee number 5 I have led product and growth taking us from 10,000 listeners to now 40 million MAU listeners, 43,000 radio stations and a top 10 streaming company worldwide. I have lead initiatives including <a href="https://zeno.fm" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Zeno.FM</a>, Podcast by Phone, and <a href="https://audioclips.ai" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Audioclips.ai</a> our AI audio generation tool for broadcasters and podcasters.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <div className="flex gap-16 items-start">
              <div className="flex-shrink-0 w-20">
                <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Projects</h2>
              </div>
              <div className="flex-1 space-y-8">
                {workProjects.map((project) => (
                  <div key={project.name} className="border-b border-border/50 last:border-b-0 pb-8 last:pb-0">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => toggleProject(project.name)}
                        className="text-left group flex-1"
                      >
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-[#E79600] transition-colors duration-200">
                          {project.name}
                        </h3>
                      </button>
                    </div>
                    {expandedProject === project.name && (
                      <div className="mt-6">
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {project.name === "MeetLink" ? (
                            <>
                              <a href="https://meetlink.co/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">MeetLink</a>
                              {project.description.substring(8)}
                            </>
                          ) : project.name === "Cliq Fit" ? (
                            <>
                              <a href="https://cliqfitapp.com/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">CliqFit </a>
                              {project.description.substring(8)}
                            </>
                          ) : project.name === "FRM" ? (
                            <>
                              <a href="https://getfrm.com/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">FRM</a>
                              {project.description.substring(4)}
                            </>
                          ) : project.name === "Nom.Space" ? (
                            <>
                              <a href="https://nom.space/#/" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Nom.space</a>
                              {project.description.substring(10)}
                            </>
                          ) : project.name === "The Kosher App" ? (
                            <>
                              <a href="https://www.youtube.com/watch?v=9oQqiWw2esg" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">The Kosher App</a>
                              {project.description.substring(14)}
                            </>
                          ) : project.name === "Dusty Psalms" ? (
                            <>
                              <a href="/dusty-psalms-privacy" className="text-[#E79600] hover:underline transition-colors duration-200">Dusty Psalms</a>{" "}
                              {project.description.substring(13)}
                            </>
                          ) : project.name === "Clean Your Room" ? (
                            <>
                              <a href="https://apps.apple.com/us/app/clean-your-room-step-by-step/id6756962683" target="_blank" rel="noopener noreferrer" className="text-[#E79600] hover:underline transition-colors duration-200">Clean Your Room</a>
                              {project.description.substring(15)}
                            </>
                          ) : (
                            project.description
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Other Stuff Section */}
          <section className="mb-20">
            <div className="flex gap-16 items-start">
              <div className="flex-shrink-0 w-20">
                <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Other Stuff</h2>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-10">
                  {experiments.map((experiment) => (
                    <a
                      key={experiment.name}
                      href={experiment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-[#E79600] hover:underline transition-colors duration-200"
                    >
                      {experiment.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch Section */}
          <section>
            <div className="flex gap-16 items-start">
              <div className="flex-shrink-0 w-20">
                <h2 className="text-base font-semibold text-gray-500 uppercase tracking-wider">Get in Touch</h2>
              </div>
              <div className="flex-1">
                <div className="flex gap-10">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-muted-foreground hover:text-[#E79600] transition-colors duration-200 group"
                        aria-label={link.name}
                      >
                        <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-base font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
