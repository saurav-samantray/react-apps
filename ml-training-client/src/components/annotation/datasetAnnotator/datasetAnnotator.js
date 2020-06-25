import  React from "react";



import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

export const DatasetAnnotator = (props) =>{
    const { datasetData } = props;

    console.log(datasetData)
    const useStyles = makeStyles((theme) => ({ 
        
          title:{
            fontSize:'18px',
            fontWeight:'normal',
            marginBottom:'40px',
          },
          content:{
              padding:"20px",
          },
        
          paper: {
            display: 'flex',
            flexWrap: 'wrap',
            width:'100%',
            '& > *': {
              margin: theme.spacing(1),
              
            },
          },
     }));
 
     const classes = useStyles();


    return <React.Fragment>
                 <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <h4 className={classes.title}>Dataset Annotator</h4>
                    <div className={classes.content}>
                        { datasetData ? datasetData.text :  ""}
                    </div>
                </Paper>
                </Grid>
           </React.Fragment>
}