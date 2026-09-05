// src/assets/PixOptions.jsx
export default function Options({ width = 45, height = 45, color = "#5E17EB", isinStar }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      shapeRendering="crispEdges"
     
      fill={isinStar ? "#ffd014" : color}
    >
      {/* 3 Pixelated Dots Combined into one path */}
      <path d="M 10 4 H 14 V 8 H 10 V 4 Z M 10 10 H 14 V 14 H 10 V 10 Z M 10 16 H 14 V 20 H 10 V 16 Z" />
    </svg>
  );
}