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
  FormGroup,
} from "@mui/material";
// import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';


const Notifications = () => {
  const [contuntry, setContuntry] = React.useState("");
  const [gener, setGener] = React.useState("");

  const handleCountryChange = (event) => {
    setContuntry(event.target.value);
  };
  const handleGenChange = (event) => {
    setGener(event.target.value);
  };

  return (
    <Box direction="row" sx={{ width: "100%", padding: "50px" }}>
      <Paper
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
          Notify me when
        </Typography>
        <Grid container spacing={2} px={4}>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    color="success"
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 28 },
                    }}
                  />
                }
                label="Someone likes my posts."
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="Someone comments on my posts."
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="Someone shares my posts."
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="Someone follows me."
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="Someone mentions me."
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                }
                label="Someone joins my group."
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Notifications;
