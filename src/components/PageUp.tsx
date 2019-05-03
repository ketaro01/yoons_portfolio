import React from "react";
import { Avatar, Icon, IconButton } from "@material-ui/core";

const PageUp: React.FC = () => {
  return (
    <div className="pageup-btn">
      <IconButton
        aria-label="setting"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Avatar
          alt="Remy Sharp"
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#000",
            opacity: 0.5
          }}
          className="dev-icons"
        >
          <Icon style={{ color: "#fff", fontSize: "3rem" }}>arrow_drop_up</Icon>
        </Avatar>
      </IconButton>
    </div>
  );
};

export default PageUp;
