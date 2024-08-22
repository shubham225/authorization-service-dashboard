import { Grid } from '@mui/material'
import { ClientDialog } from 'components/Dialog/ClientDialog'
import { ClientTable } from 'components/Tables/ClientsTable'
import { WindowBar } from 'components/WindowUI/WindowBar'
import { useAlert } from 'hooks/useAlert'
import { useEffect, useState } from 'react'
import { fetchAllClients } from 'services/ClientService'
import { TButtonClickEvent, type TClient } from 'types/DataTypes'

export const Client = () => {
  const [data, setData] = useState<TClient[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchAllClientsAsync();
  }, [])

  const fetchAllClientsAsync = async () => {
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
    setData([...data, record]);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} />
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
