/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import {
  animated, AnimationResult, Controller, useSprings,
} from '@react-spring/web';

import { base } from '../config';

export function Name() {
  const [isPause, setIsPause] = useState(true);
  const [isStartPosition, setIsStartPosition] = useState(false);

  const name = [...'I\'m Denis Klymenko'];
  const postition = [...'Frontend Developer'];

  const onRest = (_: AnimationResult, b: Controller) => {
    if (b.id === name.length) {
      setIsStartPosition(true);
    }
  };

  const nameAnimation = useSprings(name.length, name.map((_, i) => ({
    ...base,
    onRest,
    pause: isPause,
    delay: 50 * i,
  })));
  const postitonAnimation = useSprings(postition.length, postition.map((_, i) => ({
    ...base,
    onRest,
    delay: 30 * i,
    pause: !isStartPosition,
  })));

  useEffect(() => {
    setIsPause(false);
  }, []);

  return (
    <Grid
      container
      mb="20px"
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          sx={(theme) => ({
            color: 'text.primary',
            fontWeight: 'bold',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem',
            },
          })}
        >
          {nameAnimation.map((item, i) => (
            <animated.span key={`char${i}`} style={item}>
              {name[i] === ' ' ? <>&nbsp;</> : name[i]}
            </animated.span>
          ))}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="h4"
          sx={(theme) => ({
            color: 'text.primary',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem',
            },
          })}
        >
          {postitonAnimation.map((item, i) => (
            <animated.span key={`char${i}`} style={item}>
              {postition[i] === ' ' ? <>&nbsp;</> : postition[i]}
            </animated.span>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
}
