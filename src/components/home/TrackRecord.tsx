import { Factory, Flame, MapPin, Zap, Fuel } from "lucide-react";

const sectors = [
  { icon: Fuel, title: "Refineries", text: "Turnaround inspection, RBI, asset integrity and rotating equipment reliability." },
  { icon: Factory, title: "Petrochemical plants", text: "Pressure equipment and piping inspection with condition monitoring." },
  { icon: Zap, title: "Power plants & transmission", text: "Vibration monitoring and aerial inspection of transmission assets." },
  { icon: Flame, title: "Flare stacks & tall structures", text: "Rope access and drone-based visual inspection with reduced access requirements." },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="scroll-mt-16 bg-navy-900 py-20 text-white sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow !text-brand-400">Track record</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">13+ years serving process industry from Al Jubail</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Our teams support critical assets across refining, petrochemicals and power, backed by a service portfolio
            of more than 67 technical and inspection services.
          </p>
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
            <MapPin className="mt-0.5 shrink-0 text-brand-400" size={22} aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Headquarters</p>
              <p className="mt-1 font-semibold">Al Jubail, Eastern Province, Saudi Arabia</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {sectors.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <Icon className="text-brand-400" size={24} aria-hidden />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
