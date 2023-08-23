import { Button } from "@mui/material";
import React from "react";

const StyleButton: React.FC<any> = ({ children, sx, ...props }) => {
  return (
    <React.Fragment>
      <Button
        sx={{
          color: "black",
          fontSize: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
          ...sx, // Merge styles from the prop with default styles
        }}
        {...props} // Pass any additional props to the Button component
      >
        {children}
      </Button>
    </React.Fragment>
  );
};

export default StyleButton;
