import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {createTraining} from "../trainingAction";


import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

const NewTraining = (props) => {
  const dispatch = useDispatch();
  const { className, ...rest } = props;
  const createTrainingAction= (data)=>dispatch(createTraining(data));
  const classes = useStyles();
  //let trainingState = useSelector((state)=>state.trainingReducer);

  const [values, setValues] = useState({
    projectName: "Hair Care Demo",
    description: "Haircare training for July demo",
    dataset: "core_haircare_ds",
    comments: " ",
    training_type: "NER",
    iterations: 5,
  });


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleExecute = event => {
    event.preventDefault();
    console.log("Saurav Samantray");
    alert('A name was submitted: ');
  };

  const onFormDataSubmit =()=>{
        console.log(values.projectName);
        createTrainingAction(values)
  }



  const trainingTypes = [
    {
      value: "NamedEntityRecognition",
      label: "NER",
    }
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate onSubmit={handleExecute}>
        <CardHeader
          //subheader="The information can be edited"
          title="New Training"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                //helperText="Named of the project"
                label="Project name"
                margin="dense"
                name="projectName"
                onChange={handleChange}
                required
                value={values.projectName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Dataset"
                margin="dense"
                name="dataset"
                onChange={handleChange}
                required
                value={values.dataset}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Description"
                margin="dense"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
            
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Comments"
                margin="dense"
                name="comments"
                onChange={handleChange}
                value={values.comments}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Training Type"
                margin="dense"
                name="training_type"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.training_type}
                variant="outlined"
              >
                {trainingTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Iterations"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="dense"
                name="iterations"
                onChange={handleChange}
                required
                value={values.iterations}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button onClick={()=>onFormDataSubmit()} color="primary" variant="contained">
            Execute
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

NewTraining.propTypes = {
  className: PropTypes.string,
};

export default NewTraining;
