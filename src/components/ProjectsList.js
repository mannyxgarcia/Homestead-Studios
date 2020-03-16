import GridListTile from '@material-ui/core/GridListTile';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import { v4 as uuidv4 } from 'uuid';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ProjectsList = props => {
  const classes = useStyles();
  console.log(props);
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            {props.projects.map((tile, index) => (
              <GridListTile key={tile.id} cols={tile.col}>
                <img
                  src={tile.imgUrl}
                  alt={tile.id}
                  onClick={() => {
                    props.open2();
                    props.selectProject(index);
                  }}
                />

                {props.getInfo ? (
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.description}</span>}
                    actionIcon={
                      props.onDelete ? (
                        <IconButton
                          aria-label={`info about ${tile.description}`}
                          className={classes.icon}
                          onClick={() => props.onRemoveItem(tile.id)}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      ) : null
                    }
                  />
                ) : null}
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default ProjectsList;
