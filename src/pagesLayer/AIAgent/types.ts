export type HeroStat = {
  value: string;
  label: string;
  sublabel: string;
};

export type ProblemPoint = {
  title: string;
  description: string;
};

export type ArchitectureStep = {
  step: string;
  title: string;
  description: string;
};

export type Tool = {
  name: string;
  description: string;
};

export type ToolCategory = {
  name: string;
  color: string;
  tools: Tool[];
};

export type TechItem = {
  name: string;
  detail: string;
};

export type TechCategory = {
  category: string;
  items: TechItem[];
};

export type HallucinationGuard = {
  title: string;
  description: string;
  iconName: string;
};

export type KeyDecision = {
  decision: string;
  reasoning: string;
};

export type Result = {
  metric: string;
  description: string;
};
