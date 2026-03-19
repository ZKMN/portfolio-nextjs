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

export type ContentFlow = {
  id: string;
  title: string;
  subtitle: string;
  steps: { step: number; text: string }[];
  color: string;
};

export type Vertical = {
  name: string;
  dataSource: string;
  description: string;
  color: string;
};

export type Decision = {
  title: string;
  context: string;
  solution: string;
  alternative: string;
  why: string;
  effect: string;
};

export type RoadmapItem = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

export type OutcomeGroup = {
  title: string;
  icon: string;
  items: string[];
  color: string;
};
