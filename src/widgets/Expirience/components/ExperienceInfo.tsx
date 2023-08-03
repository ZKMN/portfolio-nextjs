import { Typography } from '@mui/material';

export function ExperienceInfo({ label, content }: { label: string; content: string; }) {
  return (
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
}
