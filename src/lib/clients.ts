// Major clients and partners, as listed on saudikkem.com (Our Clients / Our Partners).
// The live pages show logos only; names below come from the logo alt text and file names.
//
// LOGOS: drop each logo file into public/clients/ (partners: public/partners/) named exactly as the `logo`
// path below, plus an extension: .png, .jpg, .jpeg, .webp or .svg (e.g. public/clients/aramco.png).
// A tile shows the logo when the file exists, and falls back to the organisation name when it does not.
export interface Organisation {
  name: string;
  /** Path under /public without the file extension. */
  logo?: string;
}

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const withLogos = (folder: string, names: string[]): Organisation[] =>
  names.map((name) => ({ name, logo: `/${folder}/${slug(name)}` }));

export const clients: Organisation[] = withLogos("clients", [
  "Aramco",
  "SABIC",
  "Maaden",
  "Luberef",
  "Sipchem",
  "Satorp",
  "Sadara",
  "Yasref",
  "Tasnee",
  "S-CHEM",
  "Natpet",
  "Olayan",
  "Marafiq",
  "Hadeed",
  "JANA",
  "Farabi",
  "Dialog",
  "Chemanol",
  "Sasref",
]);

export const partners: Organisation[] = withLogos("partners", ["Keymag", "Exen", "PTP", "Zain"]);
