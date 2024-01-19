import { Button, Grid, Typography } from '@mui/material';
import { logEvent } from 'firebase/analytics';

import { BasicCollapse, BasicContainer, Title } from '@/shared/UI';

import { ExperienceInfo, ProjectInfo } from './components';
import { EXPERIENCE } from './consts';

import { fbAnalytics } from '@/firebase.config';

export const Expirience = () => (
  <section>
    <BasicContainer black>
      <Title title="Experience" />

      {EXPERIENCE.map(({
        open,
        name,
        time,
        stack,
        testing,
        projects,
        companyLink,
        achievements,
        responsibilities,
      }, index) => (
        <BasicCollapse
          key={name}
          open={open}
          label={name}
          onClick={() => {
            logEvent(fbAnalytics, `CLICK_ON_EXP_COLLAPSE_${index + 1}`, { name });
          }}
        >
          <Grid
            container
            alignItems="center"
          >
            <Typography
              color="text.secondary"
              fontSize={12}
            >
              {time}
            </Typography>

            {companyLink && (
              <Button
                size="small"
                href={companyLink}
                target="_blank"
                variant="text"
                sx={{
                  color: 'rgb(144, 202, 249)',
                  textTransform: 'none',
                }}
                onClick={() => {
                  logEvent(fbAnalytics, 'CLICK_ON_COMPANY_LINK', { name });
                }}
              >
                Link
              </Button>
            )}
          </Grid>

          <Grid container>
            <ExperienceInfo
              label="Stack:"
              content={stack}
            />
          </Grid>

          {testing && (
            <Grid container mb="10px">
              <ExperienceInfo
                label="Testing:"
                content={testing}
              />
            </Grid>
          )}

          {achievements && (
            <Grid container mb="10px">
              <ExperienceInfo
                label="Achievements:"
                content={achievements}
              />
            </Grid>
          )}

          <Grid container mb="10px">
            <ExperienceInfo
              label="Responsibilities:"
              content={responsibilities}
            />
          </Grid>

          {projects?.length && (
            <>
              <Grid container>
                <Typography
                  color="text.secondary"
                  fontWeight="bold"
                >
                  Projects:
                </Typography>
              </Grid>

              {projects.map(({ name, link, description }) => (
                <ProjectInfo
                  key={name}
                  name={name}
                  link={link}
                  description={description}
                />
              ))}
            </>
          )}
        </BasicCollapse>
      ))}
    </BasicContainer>
  </section>
);
