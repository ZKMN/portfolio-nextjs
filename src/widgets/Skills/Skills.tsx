import { Grid } from '@mui/material';

import { BasicContainer, Title } from '@/shared/UI';

import { SkillCard } from './components';
import { SKILLS } from './consts';

export const Skills = () => (
  <section>
    <BasicContainer>
      <Title
        title="Skills"
        color="text.secondary"
      />

      <Grid
        container
        spacing={3}
        columns={24}
      >
        {SKILLS.map(({ src, title }) => (
          <SkillCard
            key={src}
            src={src}
            title={title}
          />
        ))}
      </Grid>
    </BasicContainer>
  </section>
);
