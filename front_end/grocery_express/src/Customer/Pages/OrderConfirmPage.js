import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { StoreContext } from '../../StoreContext';
import { getMaxLoadDrone, startaNewOrder } from '../../req/Utils';
import { popoverClasses } from '@mui/material';
import { getThemeProps } from '@mui/system';
import congrat from '../../Assets/status.jpg'
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export  function OrderConfirmPage(props) {
    
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent:"center",
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper elevation={3} > 
          <Grid><Grid><StarIcon style={{color:"gold", fontSize:"70px"}}/></Grid><h2 style={{color:"grey"}}>{'You created a new order!'}</h2></Grid>
          <Divider/>
          <Grid alignItems="center" justifyContent="center" spacing={4} style={{display: "flex", width : "100%"}}>
              <Grid><h4>order id:</h4></Grid>
              <Grid style={{marginLeft:"15px"}}>{props.order.id}</Grid>
          </Grid>  
          <Grid alignItems="center" justifyContent="center" spacing={4} style={{display: "flex", width : "100%"}}>
              <Grid><h4>total cost:</h4></Grid>
              <Grid style={{marginLeft:"15px"}}>{props.order.total_cost}</Grid>
          </Grid>
          <Grid alignItems="center" justifyContent="center" spacing={4} style={{display: "flex", width : "100%"}}>
              <Grid><h4>total weight:</h4></Grid>
              <Grid style={{marginLeft:"15px"}}>{props.order.total_weight}</Grid>
          </Grid>
          <Grid alignItems="center" justifyContent="center" spacing={4} style={{display: "flex", width : "100%"}}>
              <Grid><h4>status:</h4></Grid>
              <Grid style={{marginLeft:"15px"}}>pending</Grid>
          </Grid>
          <Divider/>
          <Button style={{marginTop:"15px"}} variant= "contained">Place Order</Button> 
          <Button style={{marginTop:"15px", marginLeft: "15px"}} variant= "contained">Cancel Order</Button> 
        </Paper>  
      </Box>
    );
  }
  