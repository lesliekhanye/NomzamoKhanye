export default function TownFallback() {
  return (
    <svg
      viewBox="0 0 680 560"
      role="img"
      aria-label="Illustrated three-dimensional neighbourhood with homes, streets, trees and a park"
      className="town-fallback"
    >
      <g transform="translate(340 92)">
        <g transform="matrix(.87 .5 -.87 .5 0 0)">
          <rect x="-155" y="-8" width="310" height="310" rx="4" fill="#e9e8df" stroke="#d4d4ca" />
          <path d="M-155 148H155M0 -8V302" stroke="#aab0a9" strokeWidth="24" />
          <path d="M-155 148H155M0 -8V302" stroke="#efeee7" strokeWidth="2" strokeDasharray="8 9" />
          <rect x="22" y="172" width="126" height="120" fill="#b7c3aa" />
          <path d="M28 232h112M84 177v106" stroke="#e9e7db" strokeWidth="8" />
        </g>
        {[
          [-166, 188, 49, 70], [-114, 135, 46, 54], [-74, 93, 49, 95],
          [-21, 65, 51, 121], [42, 49, 53, 145], [104, 89, 48, 95],
          [162, 144, 51, 72], [-181, 254, 48, 60], [-116, 271, 46, 58],
          [-51, 241, 47, 61], [167, 233, 45, 59], [100, 273, 50, 76],
          [38, 310, 51, 68], [-25, 304, 44, 48],
        ].map(([x, y, w, h], index) => (
          <g key={index} transform={`translate(${x} ${y})`}>
            <path d={`M0 0 ${w} ${w * 0.57} V${w * 0.57 - h} L0 ${-h}Z`} fill="#d0d3ca" />
            <path d={`M0 0 ${-w} ${w * 0.57} V${w * 0.57 - h} L0 ${-h}Z`} fill="#f5f4ec" />
            <path d={`M0 ${-h} ${w} ${w * 0.57 - h} 0 ${w * 1.14 - h} ${-w} ${w * 0.57 - h}Z`} fill="#e4e6de" />
            {[0.32, 0.6].map((floor) => (
              <g key={floor}>
                <path d={`M${-w * 0.77} ${-h * floor}H${-w * 0.12}`} stroke="#a1b0ad" strokeWidth="3" />
                <path d={`M${w * 0.13} ${-h * floor}H${w * 0.77}`} stroke="#95a5a2" strokeWidth="3" />
              </g>
            ))}
          </g>
        ))}
        {[
          [-183, 217], [-127, 211], [-66, 213], [-7, 226], [51, 228], [110, 214],
          [171, 206], [-194, 276], [-90, 287], [82, 294], [155, 279], [-21, 316],
          [58, 185], [108, 179],
        ].map(([x, y], index) => (
          <g key={index}>
            <path d={`M${x} ${y}v-20`} stroke="#868978" strokeWidth="3" />
            <ellipse cx={x} cy={y - 25} rx="11" ry="15" fill={index % 2 ? "#92a385" : "#a6b69a"} />
          </g>
        ))}
      </g>
    </svg>
  );
}
