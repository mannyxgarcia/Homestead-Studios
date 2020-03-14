import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BuildingsAnimation from '../../src/imgs/2519-maps.json';
import Home from '../imgs/home.svg';
import Bar from '../imgs/bar.svg';
import Event from '../imgs/event.svg';
import Minimal from '../imgs/minimal.svg';
import Industrial from '../imgs/industrial.svg';
import Bohemian from '../imgs/bohemian.svg';
import Cube1 from '../imgs/cube1.svg';
import Cube2 from '../imgs/cube2.svg';
import Cube3 from '../imgs/cube3.svg';
import People1 from '../imgs/people1.svg';
import People2 from '../imgs/people2.svg';
import People3 from '../imgs/people3.svg';
import { cloneDeep } from 'lodash';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles(theme => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    height: 50,
    width: 200,
    fontSize: '1.25rem',
    marginTop: '1em',
    color: 'white',
    backgroundColor: '#442c2e',
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'What type of space do you need designed?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Home/Personal',
        subtitle: null,
        icon: Home,
        iconAlt: 'home',
        selected: false,
        cost: 200,
      },
      {
        id: 2,
        title: 'Restaurant/Bar',
        subtitle: null,
        icon: Bar,
        iconAlt: 'bar',
        selected: false,
        cost: 400,
      },
      {
        id: 3,
        title: 'Event',
        subtitle: null,
        icon: Event,
        iconAlt: 'event',
        selected: false,
        cost: 400,
      },
    ],
  },
];

const homeOrBarQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'What styles are you interested in?',
    subtitle: 'You can select multiple answers.',
    options: [
      {
        id: 1,
        title: 'Minimal/Modern',
        subtitle: null,
        icon: Minimal,
        iconAlt: 'minimal',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Industrial',
        subtitle: null,
        icon: Industrial,
        iconAlt: 'industrial',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Bohemian',
        subtitle: null,
        icon: Bohemian,
        iconAlt: 'bohemian',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'How large is the space?',
    subtitle: 'Choose one.',
    options: [
      {
        id: 1,
        title: '200-330 sq. ft',
        subtitle: null,
        icon: Cube1,
        iconAlt: 'cube1',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: '330-500 sq. ft',
        subtitle: null,
        icon: Cube2,
        iconAlt: 'cube2',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: '500sq. ft++',
        subtitle: null,
        icon: Cube3,
        iconAlt: 'cube3',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
];

const eventQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'How many people will be attending?',
    subtitle: 'Choose one.',
    options: [
      {
        id: 1,
        title: '10-20',
        subtitle: null,
        icon: People1,
        iconAlt: 'People1',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: '20-40',
        subtitle: null,
        icon: People2,
        iconAlt: 'People2',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: '40+',
        subtitle: null,
        icon: People3,
        iconAlt: 'People3',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export default function Services() {
  const classes = useStyles();
  const theme = useTheme();

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: BuildingsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMidSlice',
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestions = newQuestions.filter(question => question.active);
    const activeIndex = activeQuestions[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...activeQuestions[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const activeQuestions = newQuestions.filter(question => question.active);
    const activeIndex = activeQuestions[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...activeQuestions[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPrevDisabled = () => {
    const activeQuestions = questions.filter(question => question.active);

    if (activeQuestions[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const activeQuestions = questions.filter(question => question.active);

    if (activeQuestions[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = id => {
    const newQuestions = cloneDeep(questions);
    const activeQuestions = newQuestions.filter(question => question.active);
    const activeIndex = activeQuestions[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const prevSelected = activeQuestions[0].options.filter(
      option => option.selected,
    );

    switch (activeQuestions[0].subtitle) {
      case 'Choose one.':
        if (prevSelected[0]) {
          prevSelected[0].selected = !prevSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
    }
    switch (newSelected.title) {
      case 'Home/Personal':
        setQuestions(homeOrBarQuestions);
        break;
      case 'Restaurant/Bar':
        setQuestions(homeOrBarQuestions);
        break;
      case 'Event':
        setQuestions(eventQuestions);
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  return (
    <Grid container direction='row'>
      <Grid item container direction='column' lg>
        <Grid item style={{ marginTop: '2em', marginLeft: '5em' }}>
          <Typography variant='h3' style={{ color: '#634043' }}>
            Estimate
          </Typography>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} height='400px' width='550px' />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='column'
        lg
        style={{ marginRight: '2em', marginBottom: '25em' }}
        alignItems='center'
      >
        {/* QUESTIONS STARTS */}
        {questions
          .filter(question => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant='h4'
                  align='center'
                  style={{
                    fontWeight: 100,
                    marginTop: '3em',

                    color: '#634043',
                    lineHeight: 1,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant='body1'
                  align='center'
                  style={{ marginBottom: '2.5em' }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              {/* Question Content start */}
              <Grid item container>
                {question.options.map(option => (
                  <Grid
                    item
                    container
                    direction='column'
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: 'grid',
                      textTransform: 'none',
                      backgroundColor: option.selected ? '#e9e9e9' : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: '14em' }}>
                      <Typography
                        variant='h6'
                        align='center'
                        style={{ color: '#634043', marginBottom: '4px' }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant='caption' align='center'>
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        {/* Question Content start */}
        {/* QUESTIONS END */}

        <Grid
          item
          container
          justify='space-between'
          style={{ width: '18em', marginTop: '2em' }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPrevDisabled()}
              onClick={previousQuestion}
            >
              <i class='fas fa-chevron-left fa-2x'></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <i class='fas fa-chevron-right fa-2x'></i>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            className={classes.estimateButton}
            onClick={() => setDialogOpen(true)}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Grid item>
          <Typography variant='h2' align='center'>
            Estimate
          </Typography>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction='column'></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
