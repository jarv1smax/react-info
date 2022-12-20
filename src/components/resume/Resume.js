import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Divider } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
import ResumePDF from "./../../assets/CV1.pdf";
import ResumePDF2 from "./../../assets/CV2.pdf";
import { ResumeIcon } from "../content/ResumeButton";

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: "fixed",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    "&:hover": {
      color: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <div>
      <Link
        color="inherit"
        underline="none"
        href={`${ResumePDF}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footerText}
      >
        <ResumeIcon />
        <Typography component="span">
          <TextDecrypt text={" Resume1"} />
        </Typography>
      </Link>
      <Link
        color="inherit"
        style={{left: "160px"}}
        underline="none"
        href={`${ResumePDF2}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.footerText}
      >
        <ResumeIcon />
        <Typography component="span">
          <TextDecrypt text={" Resume2"} />
        </Typography>
      </Link>
    </div>
  );
};
