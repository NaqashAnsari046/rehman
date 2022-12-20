import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const General = () => {
  const [contuntry, setContuntry] = React.useState("");
  const [gener, setGener] = React.useState("");

  const handleCountryChange = (event) => {
    setContuntry(event.target.value);
  };
  const handleGenChange = (event) => {
    setGener(event.target.value);
  };

  return (
    <Box direction="row" sx={{ width: "100%", padding: "50px"}}>
      <Paper elevation={6}
        direction="row"
        component="div"
        sx={{
          boxShadow: 3,
          bgcolor: "#E6E6E6",
          p: 2,
          m: 1,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "600", marginBottom: 3 }}
          gutterBottom
        >
          General Settings
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              // required
              id="username"
              name="User Name"
              label="Username"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="fname"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="birthday"
              name="birthday"
              label="Birthday"
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gener"
                name="gener"
                label="Gener"
                value={gener}
                onChange={handleGenChange}
                variant="standard"
                // InputLabelProps={{
                //   shrink: true,
                // }}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Country</InputLabel>
              <Select
                labelId="select-label"
                id="country"
                name="country"
                label="Country"
                value={contuntry}
                onChange={handleCountryChange}
                variant="standard"
              >
                <MenuItem value={10}>PK</MenuItem>
                <MenuItem value={20}>IND</MenuItem>
                <MenuItem value={30}>USA</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000000",
                color: "white",
                marginTop: "20px",
                borderRadius: "8px",
                width: "120px",
                textAlign: "center",
                "&:hover": {
                  color: "#000000",
                  backgroundColor: "white",
                },
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default General;
