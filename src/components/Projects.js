import React, { useState } from 'react';
import ProjectsForm from './ProjectsForm';
import Search from './Search';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ProjectsList from './ProjectsList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    flexGrow: 1,
  },
  gridList: {
    width: 800,
  },
  contain: {
    align: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Projects() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid item xs={11}>
          <ProjectsList />
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>
            <Fab
              onClick={() => setOpen(true)}
              color='secondary'
              aria-label='add'
              size='small'
            >
              <AddIcon />
            </Fab>
          </Paper>
        </Grid>
      </div>
      <Dialog
        style={{ zIndex: 302 }}
        open={open}
        onClose={() => setOpen(false)}
        align='center'
        PaperProps={{
          style: {
            marginTop: '4em',
            paddingTop: '2em',
            paddingBottom: '2em',
          },
        }}
      >
        <DialogContent>
          <ProjectsForm />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default Projects;
