import { FormControl, TextField } from '@mui/material';
import { initScope } from 'constant/Initial';
import React from 'react'
import { TScopeDataProps } from 'types/PropsTypes'

export const ScopeForm = (props : TScopeDataProps) => {
    const { scope, setScope } = props;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();

        if (scope == null)
            setScope(initScope);
        else
            setScope({...scope, [e.target.name] : e.target.value});
    }

    return (
        <FormControl fullWidth>
            <TextField 
                fullWidth
                name="scope"
                value={scope?.scope}
                onChange={handleOnChange}
                label="Scope"
                type="input"
                margin="dense"
                />
            <TextField 
                fullWidth
                name="description"
                value={scope?.description}
                onChange={handleOnChange}
                label="Description"
                type="input"
                margin="dense"
                />
        </FormControl>
    )
}
