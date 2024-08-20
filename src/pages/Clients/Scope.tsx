import { Grid } from '@mui/material'
import { ScopeDialog } from 'components/Dialog/ScopeDialog'
import { ScopeTable } from 'components/Tables/ScopeTable'
import { WindowBar } from 'components/WindowUI/WindowBar'
import { useEffect, useState } from 'react'
import { fetchAllScopes } from 'services/ScopeService'
import { TButtonClickEvent, type TScope } from 'types/DataTypes'

export const Scope = () => {
  const [data, setData] = useState<TScope[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    const values : TScope[] = fetchAllScopes();
    setData(values);
  }, [])

  const onNewButtonClick = (e : TButtonClickEvent) => {
    e.preventDefault()
    setOpenDialog(true);
    console.log('Button Clicked')
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} />
      </Grid>
      <Grid item xs={12}>
        <ScopeTable data={data} />  
        <ScopeDialog 
          openDialog={openDialog} 
          setOpenDialog={setOpenDialog} />
      </Grid>
    </Grid>
  )
}
