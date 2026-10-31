// Major clients and partners, as listed on saudikkem.com (Our Clients / Our Partners).
// The live pages show logos only; names below come from the logo alt text and file names.
// TODO (content owner): confirm names and spelling, and supply logo files (e.g. /public/clients/aramco.png)
// if you want logos shown instead of name tiles; add `logo` to an entry to enable that.
export interface Organisation {
  name: string;
  logo?: string;
}

export const clients: Organisation[] = [
  { name: "Aramco" },
  { name: "SABIC" },
  { name: "Maaden" },
  { name: "Luberef" },
  { name: "Sipchem" },
  { name: "Satorp" },
  { name: "Sadara" },
  { name: "Yasref" },
  { name: "Tasnee" },
  { name: "S-CHEM" },
  { name: "Natpet" },
  { name: "Olayan" },
  { name: "Marafiq" },
  { name: "JEC" },
  { name: "JANA" },
  { name: "Gulf Farabi" },
  { name: "Dialog" },
  { name: "Chemanol" },
  { name: "Sasref" },
];

export const partners: Organisation[] = [{ name: "Keymag" }, { name: "Exen" }, { name: "PTP" }, { name: "Zain" }];
