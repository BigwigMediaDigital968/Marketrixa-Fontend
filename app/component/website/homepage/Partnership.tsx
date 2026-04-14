"use client";

import { JSX, useEffect, useRef } from "react";

const logos = [
  { name: "Google Partner", component: GoogleLogo },
  { name: "HubSpot", component: HubSpotLogo },
  { name: "Meta Business Partner", component: MetaLogo },
  { name: "Microsoft Partner", component: MicrosoftLogo },
  { name: "Shopify", component: ShopifyLogo },
  { name: "Bing Ads", component: BingLogo },
  { name: "WordPress", component: WordPressLogo },
  { name: "TikTok", component: TikTokLogo },
];

// — Logo components —

function GoogleLogo() {
  return (
    <svg
      viewBox="0 0 130 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <rect x="0" y="4" width="2" height="32" fill="rgba(255,255,255,0.25)" />
      <text
        x="10"
        y="14"
        fontFamily="Arial,sans-serif"
        fontSize="8"
        fill="rgba(255,255,255,0.5)"
      >
        Google
      </text>
      <text
        x="10"
        y="26"
        fontFamily="Arial,sans-serif"
        fontSize="11"
        fill="white"
        fontWeight="700"
      >
        Partner
      </text>
      <g transform="translate(78,4)">
        <circle cx="10" cy="10" r="10" fill="#4285F4" />
        <circle cx="10" cy="10" r="6" fill="#fff" />
        <circle cx="10" cy="10" r="3.5" fill="#4285F4" />
        <rect x="13" y="9" width="8" height="2" fill="#4285F4" />
        <circle
          cx="10"
          cy="10"
          r="10"
          fill="none"
          stroke="#EA4335"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          transform="rotate(-30 10 10)"
        />
      </g>
    </svg>
  );
}

function HubSpotLogo() {
  return (
    <svg
      viewBox="0 0 110 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,4)">
        <circle cx="16" cy="14" r="6" fill="#FF7A59" />
        <line
          x1="16"
          y1="8"
          x2="16"
          y2="2"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="20"
          x2="16"
          y2="26"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14"
          x2="4"
          y2="14"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="14"
          x2="28"
          y2="14"
          stroke="#FF7A59"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="2" r="3.5" fill="#FF7A59" />
      </g>
      <text
        x="36"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        Hub
      </text>
      <text
        x="65"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="#FF7A59"
        fontWeight="800"
      >
        Sp
      </text>
      <text
        x="80"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        ot
      </text>
    </svg>
  );
}

function MetaLogo() {
  return (
    <svg
      viewBox="0 0 155 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <defs>
        <linearGradient id="meta-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0082FB" />
          <stop offset="100%" stopColor="#0082FB" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d="M6 22 C6 16,10 10,15 10 C18 10,21 13,24 17 C27 13,30 10,33 10 C38 10,42 16,42 22
               C42 27,39 30,36 30 C33 30,30 27,27 22 C25 19,23 17,21 17 C19 17,17 19,15 22
               C13 25,11 28,8 28 C6.5 28,6 26,6 22 Z"
        fill="url(#meta-grad)"
      />
      <text
        x="52"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="700"
      >
        Meta
      </text>
      <text
        x="52"
        y="31"
        fontFamily="Arial,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.5)"
      >
        Business Partner
      </text>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      viewBox="0 0 140 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <rect x="0" y="4" width="14" height="14" fill="#F25022" />
      <rect x="16" y="4" width="14" height="14" fill="#7FBA00" />
      <rect x="0" y="20" width="14" height="14" fill="#00A4EF" />
      <rect x="16" y="20" width="14" height="14" fill="#FFB900" />
      <text
        x="40"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="13"
        fill="white"
        fontWeight="700"
      >
        Microsoft
      </text>
      <text
        x="40"
        y="31"
        fontFamily="Arial,sans-serif"
        fontSize="10"
        fill="rgba(255,255,255,0.55)"
      >
        Partner
      </text>
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg
      viewBox="0 0 105 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,2)">
        <path
          d="M22 8 C21 5,18 3,15 3 C14 3,13 3.5,12 4 C11 2,9 1,7 2 C5 2.5,3 5,3 9
                 C3 12,5 15,7 17 L9 36 L23 34 Z"
          fill="#96BF48"
        />
        <path
          d="M22 8 L20 8 C20 6,19 4.5,18 4 C17 5,16 7,16 8 L14 8 C14 7,15 5,16 4
                 C15 3.5,14 3,13 3 C12 3.5,11 5,11 8 L9 8 L9 36 L23 34 Z"
          fill="#5E8E3E"
        />
        <path
          d="M14 12 C14 12,12 12.5,12 14 C12 15.5,14 16,16 17 C18 18,20 19,20 21.5
                 C20 24,18 25.5,15 25.5 C13 25.5,11 24.5,10 23.5 L11 21 C12 22,13.5 23,15 23
                 C16.5 23,17 22.5,17 21.5 C17 20,15 19.5,13 18.5 C11 17.5,9 16.5,9 14
                 C9 11.5,11 10,14 10 Z"
          fill="white"
        />
      </g>
      <text
        x="36"
        y="22"
        fontFamily="Arial,sans-serif"
        fontSize="16"
        fill="white"
        fontWeight="700"
      >
        Shopify
      </text>
    </svg>
  );
}

function BingLogo() {
  return (
    <svg
      viewBox="0 0 95 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(0,4)">
        <rect x="2" y="4" width="7" height="24" rx="1" fill="#008373" />
        <rect x="12" y="10" width="7" height="18" rx="1" fill="#00B294" />
        <rect x="22" y="0" width="7" height="28" rx="1" fill="#0078D4" />
        <polygon points="22,28 35,14 35,28" fill="#50E6FF" />
      </g>
      <text
        x="44"
        y="20"
        fontFamily="Arial,sans-serif"
        fontSize="14"
        fill="white"
        fontWeight="700"
      >
        Bing
      </text>
      <text
        x="44"
        y="33"
        fontFamily="Arial,sans-serif"
        fontSize="11"
        fill="rgba(255,255,255,0.6)"
      >
        ads
      </text>
    </svg>
  );
}

function WordPressLogo() {
  return (
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <circle
        cx="20"
        cy="20"
        r="17"
        fill="none"
        stroke="#21759B"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="17" fill="#21759B" fillOpacity="0.15" />
      <text
        x="20"
        y="25"
        fontFamily="Arial,sans-serif"
        fontSize="20"
        fill="#21759B"
        fontWeight="900"
        textAnchor="middle"
      >
        W
      </text>
      <text
        x="46"
        y="18"
        fontFamily="Arial,sans-serif"
        fontSize="12"
        fill="white"
        fontWeight="700"
      >
        WordPress
      </text>
      <text
        x="46"
        y="30"
        fontFamily="Arial,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.4)"
        letterSpacing="0.08em"
      >
        TECHNOLOGY PARTNER
      </text>
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg
      viewBox="0 0 95 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 md:h-10 w-auto"
    >
      <g transform="translate(2,4)">
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="#69C9D0"
          fillOpacity="0.7"
          transform="translate(-2,2)"
        />
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="#EE1D52"
          fillOpacity="0.7"
          transform="translate(2,-2)"
        />
        <path
          d="M20 0 L20 22 C20 25,18 27,15 27 C12 27,10 25,10 22 C10 19,12 17,15 17 L15 11
                 C8 11,3 16,3 22 C3 28,8 33,15 33 C22 33,27 28,27 22 L27 9 C29 11,32 12,35 12
                 L35 6 C30 6,27 3,27 0 Z"
          fill="white"
        />
      </g>
      <text
        x="50"
        y="24"
        fontFamily="Arial,sans-serif"
        fontSize="15"
        fill="white"
        fontWeight="800"
      >
        TikTok
      </text>
    </svg>
  );
}

// — Main component —

function LogoItem({ Logo, name }: { Logo: () => JSX.Element; name: string }) {
  return (
    <div className="flex items-center justify-center h-14 px-10 border-l border-white/[0.08] shrink-0">
      <Logo />
    </div>
  );
}

export default function Partnership() {
  const items = logos.flatMap((l) => [l, l]);

  return (
    <section className="overflow-hidden" style={{ background: "#0a1628" }}>
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 px-6 md:px-28 py-10 md:py-12">
        <span className="text-[#F26522] uppercase tracking-[0.35em] text-[11px] font-medium whitespace-nowrap">
          Our Network
        </span>
        <div className="hidden md:block flex-1 h-px bg-white/10" />
        <h2 className="text-[clamp(28px,4vw,52px)] font-black text-white tracking-tight whitespace-nowrap">
          BUSINESS <span className="text-[#F26522]">PARTNERS</span>
        </h2>
      </div>

      {/* Scrolling track */}
      <div
        className="relative py-7 border-y border-white/[0.06]"
        style={{ background: "#050505" }}
      >
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Outer wrapper — animates via CSS, pauses on hover */}
        <div
          className="flex w-max"
          style={{
            animation: "scroll-left 38s linear infinite",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "paused")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.animationPlayState =
              "running")
          }
        >
          {/* Set 1 */}
          <div className="flex items-center">
            {logos.map((l, i) => (
              <LogoItem key={`a-${i}`} Logo={l.component} name={l.name} />
            ))}
          </div>
          {/* Set 2 — exact duplicate for seamless loop */}
          <div className="flex items-center">
            {logos.map((l, i) => (
              <LogoItem key={`b-${i}`} Logo={l.component} name={l.name} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 md:px-28 py-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 text-center">
          Empowering growth through strategic alliances across 15+ industries
        </p>
      </div>

      {/* Keyframe — add to your globals.css instead */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
