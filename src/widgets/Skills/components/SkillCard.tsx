import {
  Grid, Paper, SvgIcon, Typography,
} from '@mui/material';

export function SkillCard({ src, title }: { src: string; title: string; }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        sx={{
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: 5,
        }}
      >
        <SvgIcon
          viewBox="0 0 100 100"
          sx={(theme) => ({
            width: 100,
            height: 100,
            [theme.breakpoints.down('md')]: {
              width: 50,
              height: 50,
            },
          })}

        >
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <image style={{ width: '100%' }} href={`${process.env.PUBLIC_URL}/images/icons/${src}`} />
          </svg>
        </SvgIcon>

        <Typography>
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
}
