import React, { useState, useEffect } from 'react';
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
import { v4 as uuidv4 } from 'uuid';

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

const Projects = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch('https://homestead-studios.firebaseio.com/projects.json')
      .then(response => response.json())
      .then(responseData => {
        const loadedProjects = [];
        console.log('DATA FROM FIREBASE =====', responseData);
        for (let key in responseData) {
          loadedProjects.push({
            id: key,
            imgUrl: responseData[key].imgUrl,
            col: responseData[key].col,
            description: responseData[key].description,
          });
        }
        setAllProjects(loadedProjects);
      });
  }, []);

  const addProjectHandler = project => {
    fetch('https://homestead-studios.firebaseio.com/projects.json', {
      method: 'POST',
      body: JSON.stringify(project),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        setAllProjects(prevProjects => [
          { id: responseData.name, ...project },
          ...prevProjects,
        ]);
      });
  };

  const removeProjectHandler = id => {
    setAllProjects(prevProjects =>
      prevProjects.filter(project => project.id !== id),
    );
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid item xs={11}>
          <ProjectsList
            projects={allProjects}
            onRemoveItem={removeProjectHandler}
          />
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
          <ProjectsForm
            onAddProject={addProjectHandler}
            setOpen={closeDialog}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Projects;
