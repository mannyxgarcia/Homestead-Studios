import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  // img: {
  //   height: '80vh',
  //   objectFit: 'cover',
  //   // maxHeight: '50%',
  // },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function SingleProject(props) {
  const classes = useStyles();

  const projects = props.projects;
  const projectIndex = props.singleProject;

  const [singleProject, setSingleProject] = useState([
    projects[projectIndex],
    { next: projectIndex + 1, prev: projectIndex - 1 },
  ]);

  const nextProject = index => {
    console.log(projects[index]);
    setSingleProject([projects[index], { next: index + 1, prev: index - 1 }]);
  };

  const prevProject = index => {
    console.log(projects[index]);
    setSingleProject([projects[index], { next: index + 1, prev: index - 1 }]);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList} cols={12}>
          <GridListTile cols={1}>
            {singleProject[1].prev >= 0 ? (
              <IconButton onClick={() => prevProject(singleProject[1].prev)}>
                <i class='fas fa-chevron-left fa-2x'></i>
              </IconButton>
            ) : (
              <IconButton disabled>
                <i class='fas fa-chevron-left fa-2x'></i>
              </IconButton>
            )}
          </GridListTile>
          <GridListTile cols={10}>
            <img
              alt='images'
              className={classes.img}
              src={`${singleProject[0].imgUrl}`}
            />
          </GridListTile>
          <GridListTile cols={1}>
            {singleProject[1].next < projects.length - 1 ? (
              <IconButton onClick={() => nextProject(singleProject[1].next)}>
                <i class='fas fa-chevron-right fa-2x'></i>
              </IconButton>
            ) : (
              <IconButton disabled>
                <i class='fas fa-chevron-right fa-2x'></i>
              </IconButton>
            )}
          </GridListTile>
        </GridList>
      </div>
    </React.Fragment>
  );
}
