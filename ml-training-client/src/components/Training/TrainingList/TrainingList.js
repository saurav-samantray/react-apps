import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import clsx from "clsx";
//import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {fetchTrainings} from "../trainingAction";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  //Tooltip,
  //TableSortLabel,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

//import mockData from "./data";
import { StatusBullet } from "components";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 400,
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  status: {
    marginRight: theme.spacing(1),
  },
  actions: {
    justifyContent: "flex-end",
  },
}));


const statusColors = {
  SUCCESS: 'success',
  STARTED: 'info',
  FAILED: 'danger'
};

const TrainingList = (props) => {
  const dispatch = useDispatch();
  const { className, ...rest } = props;

  const classes = useStyles();

  let trainingState = useSelector((state)=>state.trainingReducer);

  //const [jobs] = [{}];

  //console.log(trainingState)

  useEffect(()=>{
        let data={
            userId:1
        }
        dispatch(fetchTrainings(data))
    },[])
  //console.log().length)

    return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader title="Training History (Last 5)" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Job Id</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(trainingState.data) != 0 && trainingState.data.slice(Math.max(trainingState.data.length - 5, 0)).map((job) => (
                    <TableRow hover key={job.execution_id}>
                      <TableCell>{job.name}</TableCell>
                      <TableCell>NER</TableCell>
                      <TableCell>
                        <div className={classes.statusContainer}>
                          <StatusBullet
                            className={classes.status}
                            color={statusColors[job.status]}
                            size="sm"
                          />
                          {job.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button color="primary" size="small" variant="text">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button color="primary" size="small" variant="text">
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );


};

TrainingList.propTypes = {
  className: PropTypes.string,
};

export default TrainingList;
