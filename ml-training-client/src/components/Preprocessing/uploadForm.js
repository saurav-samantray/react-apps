import React, { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { processData } from "./preprocessingAction";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

import {
  Input,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const UploadFormComponent = (props) => {
  const dispatch = useDispatch();
  const { className, ...rest } = props;
  const createPreProcessingAction = (data) => dispatch(processData(data));
  const classes = useStyles();
  //let trainingState = useSelector((state)=>state.trainingReducer);

  const [values, setValues] = useState({
    processor1: "HTMLCleanup",
    processor2: "StopWordCleanup",
  });
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleImportFileChange = (Inputfiles) => {
    setFiles(Inputfiles[0]);
    console.log(files);
  };

  const onFormDataSubmit = () => {
    let data = {
      file: files,
      format: values.docType,
      processor1: values.processor1,
      processor2: values.processor2,
    };
    console.log(data);
    createPreProcessingAction(data);
  };

  const processor1 = [
    {
      value: "HTMLCleanup",
      label: "HTML Tag Clean up",
    },
    {
      value: "RegexCleanup",
      label: "Custom Regex Clean up",
    },
    {
      value: "skip",
      label: "skip",
    },
  ];

  const processor2 = [
    {
      value: "StopWordCleanup",
      label: "Remove Stop Words",
    },
    {
      value: "skip",
      label: "skip",
    },
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          //subheader="The information can be edited"
          title="Data Pre-Processing pipeline"
        />
        <Divider />
        <CardActions className={clsx(classes.button, className)}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <RadioGroup
                aria-label="file-type"
                name="docType"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="plain"
                  control={<Radio />}
                  label="Plain Text"
                />
                <FormControlLabel value="csv" control={<Radio />} label="CSV" />
                <FormControlLabel
                  value="json"
                  control={<Radio />}
                  label="JSON"
                />
              </RadioGroup>
            </Grid>
            <Grid item md={12} xs={12}>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <InsertDriveFileIcon />
                  </InputAdornment>
                }
                accept=".csv,text/csv,.txt,text/html,application/JSON"
                className={classes.inputFiles}
                id="contained-button-file"
                // multiple
                type="file"
                required
                onChange={(e) => handleImportFileChange(e.target.files)}
              />
            </Grid>
          </Grid>
        </CardActions>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Processor - I"
                margin="dense"
                name="processor1"
                onChange={handleChange}
                //required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.processor1}
                variant="outlined"
              >
                {processor1.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Processor - II"
                margin="dense"
                name="processor2"
                onChange={handleChange}
                //required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.processor2}
                variant="outlined"
              >
                {processor2.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            onClick={() => onFormDataSubmit()}
            color="primary"
            variant="contained"
          >
            Execute
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

UploadFormComponent.propTypes = {
  className: PropTypes.string,
};

export default UploadFormComponent;
