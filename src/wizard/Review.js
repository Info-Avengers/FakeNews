import React from "react";
import Typography from "@material-ui/core/Typography";
import S3ImageUpload from "./S3ImageUpload";

export default function Review({ setImageKeys }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Screenshots
      </Typography>
      <S3ImageUpload setImageKeys={setImageKeys} />
    </React.Fragment>
  );
}
