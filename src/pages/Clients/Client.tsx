import { Grid } from '@mui/material'
import { ClientDialog } from 'components/Dialog/ClientDialog'
import { ScopeDialog } from 'components/Dialog/ScopeDialog'
import { ClientTable } from 'components/Tables/ClientsTable'
import { ScopeTable } from 'components/Tables/ScopeTable'
import { WindowBar } from 'components/WindowUI/WindowBar'
import { useAlert } from 'hooks/useAlert'
import { useEffect, useState } from 'react'
import { fetchAllClients } from 'services/ClientService'
import { fetchAllScopes } from 'services/ScopeService'
import { TButtonClickEvent, TClient, type TScope } from 'types/DataTypes'

export const Client = () => {
  const [data, setData] = useState<TClient[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchAllScopsAsync();
  }, [])

  const fetchAllScopsAsync = async () => {
    try {
      const values = await fetchAllClients();
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
  const newRecordCallback = (record : TClient) => {
    console.log("received data", record);
    setData([...data, record]);
    console.log("after receive", data);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} title='Client' />
      </Grid>
      <Grid item xs={12}>
        <ClientTable data={data} />  
        <ClientDialog 
          openDialog={openDialog} 
          setOpenDialog={setOpenDialog}
          newRecordCallback = {newRecordCallback} />
      </Grid>
    </Grid>
  )
}
