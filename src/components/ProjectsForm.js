import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  message: {
    border: `2px solid #957370`,
    marginTop: '2em',
    borderRadius: 5,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sendButton: {
    marginTop: 10,
    width: 180,
  },
}));

const ProjectForm = React.memo(props => {
  const classes = useStyles();

  const [imgUrl, setImgUrl] = useState('');
  const [col, setCol] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddProject({ imgUrl: imgUrl, col: col, description: description });
  };

  const handleChange = event => {
    setCol(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item>
          <Typography
            variant='h5'
            style={{ color: '#957370' }}
            align='center'
            gutterBottom
          >
            Add to Gallery
          </Typography>
        </Grid>
        <form onSubmit={submitHandler}>
          <Grid item align='center'>
            <TextField
              InputProps={{ disableUnderline: true }}
              label='image Url'
              id='name'
              value={imgUrl}
              onChange={event => setImgUrl(event.target.value)}
            />
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                # of columns
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={col}
                onChange={handleChange}
                disableUnderline
              >
                <MenuItem value={1}>one</MenuItem>
                <MenuItem value={2}>two</MenuItem>
                <MenuItem value={3}>three</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              InputProps={{ disableUnderline: true }}
              className={classes.message}
              value={description}
              multiline
              rows='8'
              id='message'
              onChange={event => setDescription(event.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={() => props.setOpen(false)}
              variant='contained'
              className={classes.sendButton}
              type='submit'
            >
              add <i className='fas fa-paper-plane'></i>
            </Button>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
});

export default ProjectForm;
