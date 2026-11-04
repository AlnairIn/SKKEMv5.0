// Simplified Saudi Arabia outline (Natural Earth public-domain data, projected with Mercator) with the two
// K-KEM locations marked. Coordinates: Al Jubail 27.00N 49.66E, Yanbu 24.09N 38.06E.
const OUTLINE =
  "M332.5,184.4L335.9,188.3L338.2,188.4L340.6,187.0L342.1,187.5L342.3,189.4L344.1,186.9L346.1,188.1L342.4,191.8L341.9,194.0L344.5,193.6L347.6,195.0L348.1,198.9L366.7,223.1L367.6,223.6L417.4,230.3L419.1,228.5L428,243.5L428,244.0L414.9,286.0L355.7,306.9L299.3,314.9L297.5,315.6L280.2,324.6L268.9,338.8L265.7,346.5L261.0,349.3L256.7,349.3L252.3,343.1L251.5,342.7L243.9,343.8L226.2,342.0L221.0,339.5L210.7,339.5L200.9,340.0L200.1,341.1L193.0,341.3L188.2,337.8L185.9,337.8L181.5,341.7L183.1,343.2L181.3,344.1L180.4,349.9L182.3,353.1L181.4,355.4L179.9,355.2L179.1,357.6L174.0,361.4L172.7,357.3L173.0,355.2L171.0,352.2L169.2,350.9L169.2,348.3L167.6,347.6L166.6,345.2L165.1,344.8L164.4,339.0L155.9,331.4L152.9,329.6L149.7,324.0L148.4,323.0L146.8,317.2L144.1,315.4L142.9,313.4L143.6,310.3L141.4,308.2L142.2,305.4L140.0,304.2L138.9,300.5L137.8,299.7L137.6,296.3L134.4,294.4L133.6,290.6L131.3,290.2L129.3,286.4L124.2,283.2L120.2,279.8L117.4,280.3L114.2,278.5L111.9,276.2L107.3,268.4L105.0,266.4L102.5,260.7L100.7,258.1L102.3,256.7L102.0,253.3L101.0,252.5L99.8,247.8L97.8,243.0L99.2,243.5L100.0,238.5L102.0,235.2L100.5,235.7L100.7,231.9L97.5,225.1L97.0,222.9L95.5,222.5L95.3,220.1L93.1,216.3L91.3,209.9L90.5,210.9L88.4,205.3L81.0,199.1L76.8,197.3L73.0,194.3L69.9,194.8L68.1,192.6L68.7,191.0L62.5,182.1L64.7,181.7L65.2,179.6L64.2,174.6L62.0,172.3L58.6,165.0L56.0,162.3L55.3,163.0L52.9,159.6L53.1,156.0L50.4,155.2L44.4,143.2L41.8,140.3L40.5,137.0L38.1,134.9L35.9,131.4L36.1,130.4L30.4,123.3L30.0,121.1L25.2,113.7L23.3,112.4L24.4,111.4L21.1,110.0L16.2,110.9L14.4,109.5L12.4,111.9L12,109.7L16.2,100.8L15.7,97.7L16.6,92.5L19.1,82.2L40.2,85.8L41.3,85.6L49.3,78.9L53.8,71.3L54.8,70.5L68.9,67.5L72.1,60.3L79.0,56.0L69.2,44.3L58.8,33.1L99.1,21.1L102.0,18.5L119.5,21.4L126.2,22.7L128.4,23.8L159.9,42.6L173.5,54.5L182.7,62.1L211.7,85.6L212.2,85.8L244.5,88.7L248.0,87.9L265.9,90.2L268.2,95.3L268.7,98.4L270.5,100.6L285.6,100.5L286.8,101.4L287.6,105.9L289.4,108.0L289.0,109.8L294.4,116.3L293.1,118.4L295.1,121.4L297.7,122.8L301.5,122.8L302.0,124.8L299.2,125.1L302.8,127.7L303.2,130.3L304.9,132L307.9,131.5L310.8,136.0L315.4,138.0L319.4,141.9L316.8,141.3L316.6,144.4L317.7,146.8L320.7,148.8L320.8,152.2L319.6,153.3L319.4,156.2L318.0,153.3L316.1,153.9L318.5,157.2L321.2,165.4L323.9,168.8L325.7,169.1L326.6,171.4L327.6,177.7L330.9,181.5L331.6,184.6ZM162.1,354.5L162.0,357.0L157.9,355.4L154.0,352.3L153.7,350.5L155.7,352.8L158.7,353.8L159.4,352.3ZM156.9,352.7L155.2,350.6L157.4,349.6L158.2,351.4ZM308.0,127.1L308.0,127.1L308.0,127.1ZM60.2,169.7L60.2,169.7L60.2,169.7ZM58.5,169.7L57.6,171.0L55.6,169.0ZM56.6,167.2L56.6,167.2L56.6,167.2ZM55.5,168.0L55.5,168.0L55.5,168.0ZM57.7,166.9L57.7,166.9L57.7,166.9ZM53.4,166.4L49.7,165.2L50.2,164.4ZM50.7,162.9L50.7,162.9L50.7,162.9Z";

const locations = [
  { name: "Al Jubail", role: "Headquarters", x: 309.9, y: 134.9, labelSide: "left" as const },
  { name: "Yanbu", role: "Branch Office", x: 80.6, y: 198.7, labelSide: "right" as const },
];

export default function SaudiMap() {
  return (
    <figure className="card overflow-hidden p-4">
      <svg
        viewBox="0 0 440 380"
        role="img"
        aria-label="Map of Saudi Arabia showing the Headquarters in Al Jubail and the Branch Office in Yanbu"
        className="h-auto w-full"
      >
        <rect width="440" height="380" rx="12" className="fill-sky-50" />
        <path d={OUTLINE} className="fill-white stroke-brand-600" strokeWidth="1.5" strokeLinejoin="round" />
        <text x="372" y="168" textAnchor="middle" className="fill-slate-400 text-[10px] italic">
          Arabian Gulf
        </text>
        <text x="30" y="262" textAnchor="middle" className="fill-slate-400 text-[10px] italic">
          Red Sea
        </text>

        {locations.map((l) => (
          <g key={l.name}>
            <circle cx={l.x} cy={l.y} r="12" className="fill-brand-600/20" />
            <circle cx={l.x} cy={l.y} r="6" className="fill-brand-600 stroke-white" strokeWidth="2" />
            <text
              x={l.labelSide === "left" ? l.x - 16 : l.x + 16}
              y={l.y - 2}
              textAnchor={l.labelSide === "left" ? "end" : "start"}
              className="fill-navy-800 text-[13px] font-semibold"
            >
              {l.name}
            </text>
            <text
              x={l.labelSide === "left" ? l.x - 16 : l.x + 16}
              y={l.y + 13}
              textAnchor={l.labelSide === "left" ? "end" : "start"}
              className="fill-slate-500 text-[11px]"
            >
              {l.role}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-center text-xs text-slate-500">Headquarters: Al Jubail &middot; Branch Office: Yanbu</figcaption>
    </figure>
  );
}
