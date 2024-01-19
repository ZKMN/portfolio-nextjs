import { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import {
  animated, useSprings,
} from '@react-spring/web';
import { logEvent } from 'firebase/analytics';

import { base } from '../config';
import { SOCIAL } from '../consts';

import { fbAnalytics } from '@/firebase.config';

export const Social = () => {
  const [isPause, setIsPause] = useState(true);

  const socialAnimation = useSprings(SOCIAL.length, SOCIAL.map((_, i) => ({ ...base, pause: isPause, delay: 100 * i })));

  useEffect(() => {
    setIsPause(false);
  }, []);

  return (
    <Grid
      container
      mb="20px"
      justifyContent="center"
    >
      {socialAnimation.map((item, i) => {
        const Icon = SOCIAL[i].icon;

        return (
          <animated.div key={SOCIAL[i].href} style={item}>
            <Grid item>
              <IconButton
                href={SOCIAL[i].href}
                color="primary"
                target="_blank"
                onClick={() => {
                  logEvent(fbAnalytics, SOCIAL[i].eventName);
                }}
              >
                <Icon />
              </IconButton>
            </Grid>
          </animated.div>
        );
      })}
    </Grid>
  );
};
