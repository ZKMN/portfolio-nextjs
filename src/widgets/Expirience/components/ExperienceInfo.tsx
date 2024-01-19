import { Typography } from '@mui/material';

export const ExperienceInfo = ({ label, content }: { label: string; content: string; }) => (
  <>
    <Typography
      mr="5px"
      color="text.secondary"
      fontWeight="bold"
    >
      {label}
    </Typography>

    <Typography color="text.secondary">
      {content}
    </Typography>
  </>
);
