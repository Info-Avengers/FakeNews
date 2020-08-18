import React from "react";
import { Input, Button, Grid, Avatar, Box } from "@material-ui/core";
import Amplify, { Storage } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

export const getProfileImage = (fileName) => {
  return Storage.get(fileName, { level: "public" });
};

export const setProfileImage = (file) => {
  return Storage.put(file.name, file, {
    level: "public",
    contentType: file.type,
  });
};

const S3ImageUpload = () => {
  const [keys, setKeys] = React.useState([]);
  const [url, setUrl] = React.useState("");

  const onChange = async (e) => {
    const file = e.target.files[0];
    const response = await setProfileImage(file);
    const imgUrl = await getProfileImage(response.key);
    setUrl(imgUrl);
    const newKeys = keys.concat(response.key);
    setKeys(newKeys);
  };

  console.log(keys);

  return (
    <>
      <Grid container alignItems="center">
        {keys.map((key) => {
          return (
            <Avatar
              key={key}
              src={url}
              style={{ height: "80px", width: "80px" }}
              variant="square"
            />
          );
        })}
        <Box marginLeft={1}>
          <Button component="label">
            Upload a screenshot
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => onChange(e)}
              style={{ display: "none" }}
            />
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default S3ImageUpload;
