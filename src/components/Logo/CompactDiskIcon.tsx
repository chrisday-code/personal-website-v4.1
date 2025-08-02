import { SVGProps } from "react";

export const CompactDiskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth={0.6}
    viewBox="0 0 32 32"
  >
    <defs>
      <mask id="c">
        <rect width="100%" height="100%" fill="#fff" />
        <circle cx={16} cy={16} r={2} />
      </mask>
      <mask id="a">
        <path fill="#fff" d="M0 0h16v32H0z" />
        {'{" "}'}
        <circle cx={16} cy={16} r={2} />
      </mask>
      <mask id="b">
        <path fill="#fff" d="M16 0h16v32H16z" />
        {'{" "}'}
        <circle cx={16} cy={16} r={2} />
      </mask>
    </defs>
    <circle cx={16} cy={16} r={2} fill="none" />
    <circle cx={16} cy={16} r={14} fill="none" />
    <circle cx={16} cy={16} r={14} fill="#6495ec" mask="url(#a)" />
    <circle cx={16} cy={16} r={14} fill="#add8e6" mask="url(#b)" />
    <circle cx={16} cy={16} r={4} fill="silver" mask="url(#c)" />
    <path fill="none" stroke="#fff" d="M16 4a12 12 0 0 1 12 12" />
    <path fill="none" stroke="#fff" d="M16 4a12 12 0 0 1 12 12" />
    <path d="M16 2v10M16 20v10" />
  </svg>
);
