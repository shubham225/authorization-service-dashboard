import { FormControl, TextField } from '@mui/material';
import { initClient } from 'constant/Initial';
import React from 'react'
import { TClientDataProps } from 'types/PropsTypes'

export const ClientForm = (props : TClientDataProps) => {
    const { client, setClient } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();

        if (client == null)
            setClient(initClient);
        else
            setClient({...client, [e.target.name] : e.target.value});
    }

    return (
        <FormControl fullWidth>
            <TextField 
                fullWidth
                name="scope"
                value={client?.client_name}
                onChange={handleOnChange}
                label="Scope"
                type="input"
                margin="dense"
                />
        </FormControl>
    )
}
