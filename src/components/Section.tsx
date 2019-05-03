import React, { ReactNode } from "react";
import { Icon } from "@material-ui/core";

interface IProps {
  title: string;
  children: ReactNode;
  icon?: string;
  className?: string;
}
const styles = {
  icon: {
    fontSize: 25,
    marginRight: 20
  }
};
const Section: React.FC<IProps> = props => {
  return (
    <div
      style={{ clear: "both", marginBottom: 15 }}
      className={props.className}
    >
      <h1>
        {props.icon && <Icon style={styles.icon}>{props.icon}</Icon>}
        {props.title}
      </h1>
      <div>{props.children}</div>
    </div>
  );
};

export default Section;
