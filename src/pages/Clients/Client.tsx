import { Grid } from '@mui/material'
import React from 'react'
import { WindowBar } from '../../components/WindowUI/WindowBar'
import { ClientTable } from '../../components/Tables/ClientsTable'

export const Client = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar />
      </Grid>
      <Grid item xs={12}>
        <ClientTable />
      </Grid>
    </Grid>
  )
}
