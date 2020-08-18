import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function OffendingAccount({ setProfileUrl }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Offending Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profileURL"
            name="profileURL"
            label="Fake account profile URL"
            fullWidth
            autoComplete="profile-url"
            onChange={(e) => setProfileUrl(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
