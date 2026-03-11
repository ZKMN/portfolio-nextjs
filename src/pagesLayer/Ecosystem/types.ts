export type HeroStat = {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
};

export type ProblemPoint = {
  title: string;
  description: string;
  icon: string;
};

export type Repository = {
  id: string;
  name: string;
  label: string;
  responsibility: string;
  scale: string[];
  stack: string[];
  keyFeatures: string[];
  whySeparated: string;
  color: string;
  links?: { label: string; href: string }[];
};

export type FlowStep = {
  step: number;
  text: string;
};

export type Flow = {
  id: string;
  title: string;
  subtitle: string;
  steps: FlowStep[];
  color: string;
};

export type Decision = {
  title: string;
  context: string;
  solution: string;
  alternative: string;
  why: string;
  effect: string;
  link?: { text: string; href: string };
};

export type OutcomeGroup = {
  title: string;
  icon: string;
  items: string[];
  color: string;
};

export type OwnershipArea = {
  category: string;
  items: string[];
};
