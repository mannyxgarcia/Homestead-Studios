import GridListTile from '@material-ui/core/GridListTile';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
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

const tileData = [
  {
    img:
      'https://images.unsplash.com/photo-1584140828577-933ad5f0c57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Image',
    description: 'author1',
    cols: 1,
  },
  {
    img:
      'https://images.unsplash.com/photo-1553949312-1b37019c1c15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Image2',
    description: 'author2',
    cols: 2,
  },
  {
    img:
      'https://images.unsplash.com/photo-1531302871984-ca996367b319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Image3',
    description: 'author3',
    cols: 2,
  },
  {
    img:
      'https://images.unsplash.com/photo-1542646010-5652de93bc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Image4',
    description: 'author4',
    cols: 1,
  },
  {
    img:
      'https://images.unsplash.com/photo-1583344575570-20f4aef19843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Image5',
    description: 'author5',
    cols: 3,
  },
  {
    img:
      'https://images.unsplash.com/photo-1550684376-cafcd6096e61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: 'Image6',
    description: 'author6',
    cols: 1,
  },
];

const IngredientList = props => {
  const classes = useStyles();
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
                  // onClick={props.onRemoveItem.bind(this, tile.id)}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default IngredientList;
