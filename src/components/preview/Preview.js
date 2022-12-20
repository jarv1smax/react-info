/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Preview.css";

import Portfolio from "../../assets/CV1.png";
import Portfolio2 from "../../assets/CV2.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
  imgW: {
    width: "100%",
  },
}));

export const Preview = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      alter: "React Portfolio",
      image: `${Portfolio2}`,
    },
    // {
    //   id: 2,
    //   alter: "React Portfolio",
    //   image: `${Portfolio2}`,
    // },
  ]);

  return (
    <section id="preview">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            {/* <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div> */}
            <div className="__content_wrapper" style={{overflow:"hidden"}}>
              <img className={classes.imgW} src={project.image} alt={project.alter} />
              {/* <h3 className="title">
                <TextDecrypt text={ project.alter } />
              </h3>
              <p className="description">
                { project.alter }
              </p> */}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
