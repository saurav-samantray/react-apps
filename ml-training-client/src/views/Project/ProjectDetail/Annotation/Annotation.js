import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { DatasetList } from "../../../../components/annotation/datasetList/datasetList";
import { DatasetAnnotator } from "../../../../components/annotation/datasetAnnotator/datasetAnnotator";
import { getDatasets } from "../../../../components/dataset/datasetAction";

let getDatasetsFunction;
const AnnotationComponent = () => {
  const dispatch = useDispatch();
  let params = useParams();
  let datasetState = useSelector((state) => state.datasetReducer);

  let [dataLimit, setDataLimit] = useState(10);
  let [dataOffset, setOffsetLimit] = useState(0);
  const [selecteddatasetIndex, setSelecteddatasetIndex] = useState(0);

  getDatasetsFunction = () => {
    let payload = {
      projectId: params.projectId,
      limit: dataLimit,
      offset: dataOffset,
    };

    dispatch(getDatasets(payload));
  };

  useEffect(() => {
    console.log(datasetState);
    getDatasetsFunction();
  }, []);

  const useStyles = makeStyles((theme) => ({
    title: {
      marginTop: "20px",
      marginLeft: "10px",
    },
  }));

  const classes = useStyles();
  if (datasetState.loading) {
    return (
      <React.Fragment>
        <h4>loading</h4>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid container>
          <Grid md={12} items>
            <Typography className={classes.title} variant="h6" gutterBottom>
              Annotations
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <DatasetList
            datasetList={datasetState.dataSetList}
            selectedIndex={selecteddatasetIndex}
            setSelectedIndex={setSelecteddatasetIndex}
          ></DatasetList>
          <DatasetAnnotator
            datasetData={datasetState.dataSetList[selecteddatasetIndex]}
          ></DatasetAnnotator>
        </Grid>
      </React.Fragment>
    );
  }
};

export default AnnotationComponent;
