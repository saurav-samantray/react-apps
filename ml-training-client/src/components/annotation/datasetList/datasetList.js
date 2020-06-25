import  React from "react";
import {useParams} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';


export const DatasetList = (props) =>{

    const { datasetList,selectedIndex,setSelectedIndex } = props;
 
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(index)
        console.log(selectedIndex);

      };



    const useStyles = makeStyles((theme) => ({ 
        listOuter: {
            overflowY:'scroll',
            width: '100%',
              height:'60vh',
          },
          title:{
            fontSize:'18px',
            fontWeight:'normal'
          },
          listItem:{
              borderBottom:'1px solid #ccc',
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
                <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <h4 className={classes.title}>Dataset List</h4>
                    <List dense={false} className={classes.listOuter}>
                        
                    { datasetList.map((item,i) => {
                           return ( 
                           <ListItem
                           className ={classes.listItem}
                           button
                           selected={selectedIndex === i}
                           onClick={(event) => handleListItemClick(event, i)}
                           >
                            <ListItemText
                                primary={item.text}
                                // secondary={item.text}
                            />
                            </ListItem> )

                        })
                    }
                    </List>
                </Paper>
                </Grid>
                
            </React.Fragment>
};