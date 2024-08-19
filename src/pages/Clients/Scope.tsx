import { Grid } from '@mui/material'
import { ScopeTable } from '../../components/Tables/ScopeTable'
import { WindowBar } from '../../components/WindowUI/WindowBar'

export const Scope = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar />
      </Grid>
      <Grid item xs={12}>
        <ScopeTable />
      </Grid>
    </Grid>
  )
}
