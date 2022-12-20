/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Resume from "../../settings/resume.json";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
  socialIcons: {
    position: "fixed",
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: "2.5rem",
    width: "2.5rem",
    display: "block",
    marginBottom: theme.spacing(2),
  },
}));

export const Contact = () => {
  const classes = useStyles();

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div>
            <span>
              <i class="fa fa-phone-square"></i>&ensp;
            </span>
            <span>{Resume.basics.phone}</span>
          </div>
          <div>
            <span>
              <i class="fa fa-envelope"></i>&ensp;
            </span>
            <span>{Resume.basics.email}</span>
          </div>
          <div>
            <span>
              <i class="fa fa-location-arrow"></i>&ensp;
            </span>
            <span>{Resume.basics.summary}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
