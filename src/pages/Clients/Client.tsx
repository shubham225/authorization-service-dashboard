import { Grid } from '@mui/material'
import { WindowBar } from 'components/WindowUI/WindowBar'
import { ClientTable } from 'components/Tables/ClientsTable'

export const Client = () => {

  const onNewButtonClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Button Clicked')
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} />
      </Grid>
      <Grid item xs={12}>
        <ClientTable />
      </Grid>
    </Grid>
  )
}
