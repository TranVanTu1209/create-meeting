import React, { useState, useEffect } from 'react';
import './CreateMeeting.css';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateMeeting = () => {
  const classes = useStyles();
  const [project, setProject] = useState('');
  const [joiner, setJoiner] = useState('');
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [name, setName] = useState('');
  useEffect(() => {

  }, []);
  const onCreateMeeting = (e) => {
    e.preventDefault();
    console.log(project, joiner, startDate, endDate, name);
  }
  return (
    <div className="createMeeting">
      <h2 className="title">Tạo cuộc họp</h2>
      <form onSubmit={onCreateMeeting} >
        <div className="form-group" >
          <label>
            Tên cuộc họp
          </label>
          <TextField label="Tên cuộc họp" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group" >
          <label>
            Dự án
          </label>
          <FormControl className={classes.formControl}>
            <InputLabel id="project">Dự án</InputLabel>
            <Select
              labelId="project"
              value={project}
              onChange={e => setProject(e.target.value)}
            >
              <MenuItem value="project1">Project 1</MenuItem>
              <MenuItem value="project2">Project 2</MenuItem>
              <MenuItem value="project3">Project 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group" >
          <label>
            Thành phần tham gia
          </label>
          <FormControl className={classes.formControl}>
            <InputLabel id="joiner">Thành phần tham gia</InputLabel>
            <Select
              labelId="joiner"
              value={joiner}
              onChange={e => setJoiner(e.target.value)}
            >
              <MenuItem value="joiner1">Joiner 1</MenuItem>
              <MenuItem value="joiner2">Joiner 2</MenuItem>
              <MenuItem value="joiner3">Joiner 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group" >
          <label>
            Thời gian bắt đầu
          </label>
          <TextField
            className="datepicker"
            type="date"
            defaultValue="2020-09-10"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group" >
          <label>
            Thời gian kết thúc
          </label>
          <TextField
            className="datepicker"
            type="date"
            defaultValue="2020-09-11"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
        <Button className="btn" type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button className="btn" variant="contained" color="secondary">
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default CreateMeeting;
