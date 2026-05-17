export type Category = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  promise: string;
};

export const categories: Category[] = [
  {
    id: "disasters",
    name: "Disasters",
    eyebrow: "Case files",
    description:
      "Source-led explanations of famous maritime disasters: what happened, why it happened, what investigators found, and what changed afterward.",
    promise:
      "Respectful, evidence-aware breakdowns of sinkings, groundings, fires, collisions, capsizes, and rescue failures.",
  },
  {
    id: "voyages",
    name: "Voyages",
    eyebrow: "Journeys at sea",
    description:
      "Notable voyages, expeditions, routes, storms, rescues, and passages where geography, weather, ambition, and seamanship shaped the outcome.",
    promise:
      "Narrative sea stories grounded in maps, route decisions, weather windows, and human judgment.",
  },
  {
    id: "ship-construction",
    name: "Ship Construction",
    eyebrow: "How ships are made",
    description:
      "Plain-English explainers on ship design, construction, stability, safety systems, materials, and the engineering choices that matter offshore.",
    promise:
      "Build the reader's eye for hulls, watertight compartments, lifeboats, propulsion, navigation, and structural tradeoffs.",
  },
  {
    id: "your-life-as-the-captain",
    name: "Your Life as the Captain",
    eyebrow: "Decision simulations",
    description:
      "Reader-facing captain scenarios that ask what you would do with incomplete information, bad weather, mechanical alarms, and pressure from shore.",
    promise:
      "A practical captain's-chair format for learning how decisions feel before hindsight makes them look obvious.",
  },
];

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}
