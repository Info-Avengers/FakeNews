import React from "react";
import Typography from "@material-ui/core/Typography";
import S3ImageUpload from "./S3ImageUpload";

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Screenshots
      </Typography>
      <S3ImageUpload />
    </React.Fragment>
  );
}
