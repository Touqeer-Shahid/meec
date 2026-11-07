import crane from "@/assets/images/equipment/eq-crane.jpeg";
import boomTruck from "@/assets/images/equipment/eq-boom-truck.jpeg";
import pickup from "@/assets/images/equipment/eq-pickup-truck.jpeg";
import tractor from "@/assets/images/equipment/eq-tractor.jpeg";
import bus from "@/assets/images/equipment/eq-bus.jpg";
import compressor from "@/assets/images/equipment/eq-compressor.jpeg";
import generators from "@/assets/images/equipment/eq-generators.jpeg";
import rolling from "@/assets/images/equipment/eq-rolling-machine.jpeg";
import loader from "@/assets/images/equipment/eq-loader.jpeg";

export type EquipmentItem = {
  name: string;
  quantity: number;
  unit?: string;
  note: string;
  image?: string;
};

export const equipment: EquipmentItem[] = [
  {
    name: "Mobile Crane (35 Ton)",
    quantity: 1,
    note: "Heavy lifting for vessel, column and equipment erection under approved lift plans.",
    image: crane,
  },
  {
    name: "Boom Truck",
    quantity: 1,
    note: "Site material handling and light-to-medium lifting within plant boundaries.",
    image: boomTruck,
  },
  {
    name: "Power Generators",
    quantity: 11,
    note: "Site power for welding, machining and lighting during shutdowns and remote works.",
    image: generators,
  },
  {
    name: "Rolling Machines",
    quantity: 3,
    note: "Plate rolling for shells, ducting and fabricated sections in the workshop.",
    image: rolling,
  },
  {
    name: "Air Compressors",
    quantity: 3,
    note: "Blasting, pneumatic tooling and surface preparation support.",
    image: compressor,
  },
  {
    name: "Pickup Trucks",
    quantity: 3,
    note: "Tools, consumables and crew movement between workshop and project sites.",
    image: pickup,
  },
  {
    name: "Tractor",
    quantity: 1,
    note: "Trailer haulage and material shifting within yards and site areas.",
    image: tractor,
  },
  {
    name: "Transport Bus",
    quantity: 1,
    note: "Daily transport of trade teams to plants and project locations.",
    image: bus,
  },
  {
    name: "Loader (950F)",
    quantity: 1,
    note: "Earthmoving, loading and site clearance for civil and infrastructure scopes.",
    image: loader,
  },
];

export const equipmentSummary = [
  { label: "Equipment Units", value: "25+" },
  { label: "Crane Capacity", value: "35 Ton" },
  { label: "Power Generators", value: "11" },
  { label: "Owned Fleet", value: "100%" },
];
