import React, { Fragment } from "react";
import { Avatar, Icon } from "@material-ui/core";

interface IProps {
  name: string;
  title?: string;
  isLast?: boolean;
}

const styles = {
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#BBBBD1"
  },
  etc: { fontSize: "5rem", color: "#342847" }
};
const DevIcons: React.FC<IProps> = props => {
  return (
    <Fragment>
      <div
        style={{
          width: 100,
          float: "left",
          margin: 5
        }}
      >
        <Avatar alt="Remy Sharp" style={styles.avatar} className="dev-icons">
          {props.name === "etc" ? (
            <Icon style={styles.etc}>help</Icon>
          ) : (
            <i className={props.name} />
          )}
        </Avatar>
        <p style={{ textAlign: "center", fontSize: 14, fontWeight: "bold" }}>
          {props.title}
        </p>
      </div>
      {props.isLast && <div className="clear" />}
    </Fragment>
  );
};

export default DevIcons;
