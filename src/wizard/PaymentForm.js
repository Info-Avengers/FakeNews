import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Incident Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            id="details"
            label="Details"
            multiline
            rows={10}
            rowsMax={40}
            fullWidth
            autoComplete="details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
