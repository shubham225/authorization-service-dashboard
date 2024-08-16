import { Grid, Paper } from '@mui/material'
import React from 'react'

export const Home = () => {
  return (
    <>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper elevation={3} 
            sx={{height: '300px'}}>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} 
            sx={{height: '300px'}} >
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} 
            sx={{height: '300px'}}>

          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
