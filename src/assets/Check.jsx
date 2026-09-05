// src/assets/PixCheck.jsx
export default function Check({ width = 30, height = 30, color = "#4C1D95" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      shapeRendering="crispEdges"
      fill={color}
    >
      <path d="M 4 12 H 8 V 14 H 10 V 16 H 12 V 14 H 14 V 12 H 16 V 10 H 18 V 8 H 22 V 12 H 20 V 14 H 18 V 16 H 16 V 18 H 14 V 20 H 10 V 18 H 8 V 16 H 6 V 14 H 4 Z" />
    </svg>
  );
}