import c1 from "@/assets/images/clients/c1.png";
import c2 from "@/assets/images/clients/c2.png";
import c3 from "@/assets/images/clients/c3.png";
import c4 from "@/assets/images/clients/c4.png";
import c5 from "@/assets/images/clients/c5.png";
import c6 from "@/assets/images/clients/c6.jpg";
import c7 from "@/assets/images/clients/c7.jpg";
import c8 from "@/assets/images/clients/c8.jpg";
import c9 from "@/assets/images/clients/c9.jpg";
import c10 from "@/assets/images/clients/c10.jpg";
import c11 from "@/assets/images/clients/c11.png";
import c12 from "@/assets/images/clients/c12.png";
import c13 from "@/assets/images/clients/c13.png";
import c14 from "@/assets/images/clients/c14.png";
import oSynergyco from "@/assets/images/clients/ongoing/synergyco.png";
import oEngroPolymer from "@/assets/images/clients/ongoing/engro-polymer.png";
import oEngroZarkhez from "@/assets/images/clients/ongoing/engro-zarkhez.jfif";
import oKhtl from "@/assets/images/clients/ongoing/khtl.png";
import oPowerCement from "@/assets/images/clients/ongoing/power-cement.png";
import oGulAhmed from "@/assets/images/clients/ongoing/gulahmed.png";
import oNrl from "@/assets/images/clients/ongoing/nrl.png";
import oTotalParco from "@/assets/images/clients/ongoing/total-parco.png";
import oSecmc from "@/assets/images/clients/ongoing/secmc.png";

export type Client = { id: string; name: string; logo: string };

/** Official client logos supplied by MEEC. Add new entries here only. */
export const clients: Client[] = [
  { id: "power-cement", name: "Power Cement Limited", logo: c1 },
  { id: "pg", name: "Procter & Gamble", logo: c2 },
  { id: "ogdcl", name: "Oil & Gas Development Company Limited", logo: c3 },
  { id: "dirpa", name: "Dirpa", logo: c4 },
  { id: "dmh", name: "DMH", logo: c5 },
  { id: "bestway", name: "Bestway Cement", logo: c6 },
  { id: "maple-leaf", name: "Maple Leaf Premium Cement", logo: c7 },
  { id: "bosicor", name: "Bosicor Pakistan Limited", logo: c8 },
  { id: "dha", name: "Pakistan Defence Officers Housing Authority, Karachi", logo: c9 },
  { id: "cncec", name: "China National Chemical Engineering Co. Ltd (CNCEC)", logo: c10 },
  { id: "engro", name: "Engro", logo: c11 },
  { id: "nrl", name: "National Refinery Limited", logo: c12 },
  { id: "ppl", name: "Pakistan Petroleum Limited (PPL)", logo: c13 },
  { id: "alfa-laval", name: "Alfa Laval", logo: c14 },
];

/* ------------------------- Current / ongoing clients ---------------------- */


export type OngoingClient = {
  id: string;
  name: string;
  logo: string;
  sector: string;
  scope: string;
};

/** Clients MEEC is currently executing work for. */
export const ongoingClients: OngoingClient[] = [
  {
    id: "synergyco",
    name: "Synergyco Pvt Ltd",
    logo: oSynergyco,
    sector: "Chemicals & Process",
    scope: "Mechanical works, equipment erection and plant maintenance support.",
  },
  {
    id: "engro-polymer",
    name: "Engro Polymer & Chemicals",
    logo: oEngroPolymer,
    sector: "Petrochemicals",
    scope: "Process piping, static equipment works and shutdown execution.",
  },
  {
    id: "engro-zarkhez",
    name: "Engro Zarkhez",
    logo: oEngroZarkhez,
    sector: "Fertilizer",
    scope: "Mechanical erection, structural fabrication and maintenance scopes.",
  },
  {
    id: "khtl",
    name: "KHTL",
    logo: oKhtl,
    sector: "Terminals & Logistics",
    scope: "Piping, structural steel and equipment maintenance works.",
  },
  {
    id: "power-cement",
    name: "Power Cement Limited",
    logo: oPowerCement,
    sector: "Cement",
    scope: "Kiln shell fabrication, refractory brickwork and plant erection works.",
  },
  {
    id: "gulahmed",
    name: "GulAhmed Textile Mills Limited",
    logo: oGulAhmed,
    sector: "Textile & Utilities",
    scope: "Boiler-side works, piping, electrical installations and maintenance.",
  },
  {
    id: "nrl",
    name: "National Refinery Limited (NRL)",
    logo: oNrl,
    sector: "Oil & Gas Refining",
    scope: "Plant piping, turnaround support, surface preparation and testing.",
  },
  {
    id: "total-parco",
    name: "TOTAL / PARCO",
    logo: oTotalParco,
    sector: "Oil & Gas",
    scope: "Mechanical maintenance, piping works and heavy lifting operations.",
  },
  {
    id: "secmc",
    name: "Sindh Engro Coal Mining Company (SECMC)",
    logo: oSecmc,
    sector: "Mining & Power",
    scope: "Structural fabrication, equipment repair and site maintenance works.",
  },
];
