import React, { useState, useEffect } from 'react';
import ProjectsList from './ProjectsList';
import SingleProject from './SingleProject';
import { makeStyles } from '@material-ui/core/styles';
import ProjectsForm from './ProjectsForm';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

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
  const [open2, setOpen2] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [singleProject, setSingleProject] = useState([]);
  const [onDelete, setDelete] = useState(false);
  const [getInfo, setGetInfo] = useState(false);

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
        setAllProjects(loadedProjects.reverse());
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
    fetch(`https://homestead-studios.firebaseio.com/projects/${id}.json`, {
      method: 'DELETE',
    }).then(response => {
      setAllProjects(prevProjects =>
        prevProjects.filter(project => project.id !== id),
      );
    });
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const openDialog = () => {
    setOpen2(true);
  };

  const selectProject = index => {
    setSingleProject(index);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid item xs={11}>
          <ProjectsList
            projects={allProjects}
            onRemoveItem={removeProjectHandler}
            open2={openDialog}
            selectProject={selectProject}
            onDelete={onDelete}
            getInfo={getInfo}
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
          <Paper className={classes.paper}>
            <Fab
              onClick={() => {
                !onDelete ? setDelete(true) : setDelete(false);
                setGetInfo(true);
              }}
              color='secondary'
              aria-label='add'
              size='small'
            >
              <i class='fas fa-minus'></i>
            </Fab>
          </Paper>

          <Paper className={classes.paper}>
            <Fab
              onClick={() => {
                !getInfo ? setGetInfo(true) : setGetInfo(false);
                setDelete(false);
              }}
              color='secondary'
              aria-label='add'
              size='small'
            >
              <i class='fas fa-info'></i>
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
      <Dialog
        style={{ zIndex: 302 }}
        open={open2}
        onClose={() => setOpen2(false)}
        align='center'
        PaperProps={{
          style: {
            maxHeight: '100%',
            maxWidth: '100%',
          },
        }}
      >
        <DialogContent>
          <SingleProject projects={allProjects} singleProject={singleProject} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Projects;
