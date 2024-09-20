import { Avatar, Box, Chip, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Face6Icon from "@mui/icons-material/Face6";
import { TUser } from "types/DataTypes";
import { fetchUserByLogin } from "services/UserService";
import { useAlert } from "hooks/useAlert";
import { initUserData } from "constant/Initial";

const MyAccount = () => {
  const [data, setData] = useState<TUser>(initUserData);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchUserByLoginAsync();
  }, []);

  const fetchUserByLoginAsync = async () => {
    try {
      const values = await fetchUserByLogin();
      setData(values);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          width="-webkit-fill-available"
          justifyContent="center"
        >
          <Avatar sx={{ width: 100, height: 100 }}>
            <Face6Icon sx={{ width: 80, height: 80 }} />
          </Avatar>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="username"
          value={data.username}
          label="Username"
          inputProps={{ readOnly: true }}
          margin="normal"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          id="email"
          value={data.email}
          label="E-Mail"
          margin="normal"
          inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="address"
          value={data.address}
          label="Address"
          margin="normal"
          inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          id="city"
          value={data.city}
          label="City"
          margin="normal"
          inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          id="country"
          value={data.country}
          label="Country"
          margin="normal"
          inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          id="mobile"
          value={data.mobile}
          label="Mobile"
          margin="normal"
          inputProps={{ readOnly: true }}
        />
      </Grid>
      {data.roles.map((value) => (
        <Grid item>
          <Chip color="primary" variant="outlined" key={value} label={value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyAccount;
