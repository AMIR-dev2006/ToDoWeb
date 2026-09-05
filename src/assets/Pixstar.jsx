export default function Pixstar({ isStarred }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill={isStarred ? "#F59E0B" : "none"}
      stroke="#F59E0B"
      strokeWidth="1.5"
      strokeLinejoin="miter"
      shapeRendering="crispEdges"
    >
      <path d="M 11 2 H 13 V 4 H 14 V 6 H 15 V 8 H 22 V 10 H 18 V 12 H 16 V 14 H 18 V 16 H 21 V 21 H 17 V 18 H 15 V 15 H 9 V 18 H 7 V 21 H 3 V 16 H 6 V 14 H 8 V 12 H 6 V 10 H 2 V 8 H 9 V 6 H 10 V 4 H 11 V 2 Z" />
    </svg>
  );
}