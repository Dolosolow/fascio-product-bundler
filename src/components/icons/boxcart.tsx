interface JRIconProps {
  fill?: string;
  height?: string;
  width?: string;
}

export const BoxCartIcon = ({ fill, width, height }: JRIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || "24px"}
    height={height || "24px"}
    fill={fill || "#000000"}
  >
    <path
      d="M22,3.16a1,1,0,0,0-.23-.81A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h2.82l-.67,4H15.72L14,2.68A1,1,0,0,0,13,2H3a1,1,0,0,0-.81.42,1,1,0,0,0-.14.9L4,9.16V21a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V9.08ZM12.28,4l1.33,4H5.72L4.39,4ZM6,10h8V20H6ZM19,20H16V10h3Z"
      data-name="43"
    />
  </svg>
);
