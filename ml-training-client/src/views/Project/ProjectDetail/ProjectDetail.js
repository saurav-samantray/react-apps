import React from 'react';
import SideNavLayout from '../../../components/drawer'

import { Grid } from '@material-ui/core'


const ProjectDetail = (props) =>{
    console.log(props)
	return  <React.Fragment>
		<Grid container>
			<SideNavLayout/>
		</Grid>
	</React.Fragment>
    
}

export default ProjectDetail;