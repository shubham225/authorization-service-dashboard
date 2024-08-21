import { Grid } from '@mui/material'
import { ScopeDialog } from 'components/Dialog/ScopeDialog'
import { ScopeTable } from 'components/Tables/ScopeTable'
import { WindowBar } from 'components/WindowUI/WindowBar'
import { useAlert } from 'hooks/useAlert'
import { useEffect, useState } from 'react'
import { fetchAllScopes } from 'services/ScopeService'
import { TButtonClickEvent, type TScope } from 'types/DataTypes'

export const Scope = () => {
  const [data, setData] = useState<TScope[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchAllScopsAsync();
  }, [])

  const fetchAllScopsAsync = async () => {
    try {
      const values = await fetchAllScopes();
      setData(values);
    }catch(error : any) {
      showAlert(error.message, error.severity, error.title);
    }
  }
 
  const onNewButtonClick = (e : TButtonClickEvent) => {
    e.preventDefault()
    setOpenDialog(true);
  }

  // Add the received data
  const newRecordCallback = (record : TScope) => {
    setData([...data, record]);
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
          setOpenDialog={setOpenDialog}
          newRecordCallback = {newRecordCallback} />
      </Grid>
    </Grid>
  )
}
