import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  breadcrumb: {
    margin: 'auto',
    display: 'flex',
    outline: 0,
    position: 'relative',
    justifyContent: 'center',
  }
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb} >
      <Link color="inherit" to="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        color="inherit"
        to="/about"
        className={classes.link}
      >
        <InfoIcon className={classes.icon} />
        About
      </Link>
      <Link color="inherit" to="/lists" className={classes.link}>
        <DoneAllIcon className={classes.icon} />
        List
      </Link>
      <Link color="inherit" to="/lists/new" className={classes.link}>
        <AddCircleIcon className={classes.icon} />
        Create List
      </Link>
      <Link color="inherit" to="/happyplace"className={classes.link}>
        <EmojiEmotionsIcon className={classes.icon} />
        Click Here if sad
      </Link>
    </Breadcrumbs>
  );
}