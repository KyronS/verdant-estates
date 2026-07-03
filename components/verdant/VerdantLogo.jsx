export default function VerdantLogo({ height = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 190 54"
      height={height}
      style={{ width: "auto", display: "block" }}
      aria-label="Verdant Estates"
    >
      {/* Right blade — behind left */}
      <path
        d="M 38,2 C 44,10 54,26 50,42 C 48,48 42,52 26,52 C 26,46 30,36 32,26 C 34,16 36,8 38,2 Z"
        fill="white"
        fillOpacity="0.72"
      />
      {/* Left blade — foreground */}
      <path
        d="M 13,2 C 6,12 0,28 4,44 C 6,48 14,52 26,52 C 26,46 22,36 20,26 C 18,16 16,8 13,2 Z"
        fill="white"
      />
      <text
        x="64"
        y="30"
        fontSize="19"
        letterSpacing="4"
        fill="white"
        fontWeight="500"
        style={{ fontFamily: "inherit" }}
      >
        VERDANT
      </text>
      <text
        x="67"
        y="47"
        fontSize="10"
        letterSpacing="5.5"
        fill="#c8a84b"
        fontWeight="400"
        style={{ fontFamily: "inherit" }}
      >
        ESTATES
      </text>
    </svg>
  );
}
