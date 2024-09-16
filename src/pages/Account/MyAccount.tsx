import { Avatar, Box, Chip, Grid, TextField } from "@mui/material";
import React from "react";
import Face6Icon from "@mui/icons-material/Face6";
import MultipleSelect from "components/MultipleSelect";
import { TUser } from "types/DataTypes";
import { userData } from "data/DummyData";

const MyAccount = () => {
  const userDetail: TUser = userData[0];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <Box display="flex" width= "-webkit-fill-available" justifyContent="center">
      <Avatar sx={{ width: 100, height: 100 }}>
        <Face6Icon sx={{ width: 80, height: 80 }} />
      </Avatar>
        </Box>
      </Grid>
      <Grid item xs={6} >
        <TextField
          fullWidth
          disabled
          id="username"
          name="username"
          value={userDetail.username}
          label="Username"
          type="input"
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          disabled
          id="email"
          name="email"
          value={userDetail.email}
          label="E-Mail"
          type="input"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} >
      <TextField
        fullWidth
        disabled
        id="address"
        name="address"
        value={userDetail.address}
        label="Address"
        type="input"
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          disabled
          id="city"
          name="city"
          value={userDetail.city}
          label="City"
          type="input"
          margin="normal"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          disabled
          id="country"
          name="country"
          value={userDetail.country}
          label="Country"
          type="input"
          margin="normal"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          disabled
          id="mobile"
          name="mobile"
          value={userDetail.mobile}
          label="Mobile"
          type="input"
          margin="normal"
        />
      </Grid>
      {userDetail.roles.map((value) => (
        <Grid item >
        <Chip color="success" key={value} label={value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyAccount;
