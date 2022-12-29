import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Driver from '../../assets/images/Car_brand.svg'

interface Props {
    title: string;
}

const useStyles = makeStyles({
  background: {
      backgroundColor: `#7993a3`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
  },
  img: {
    content: `url(${Driver})`,
    maxWidth: '30%',
    height: 'auto',
},
});

export const Home = ( props: Props ) => {

  const classes = useStyles();

  return (
    <>
    <Navbar />
    <div className={`${classes.background}`}>
      <div className={classes.main_text}>
        <h1>{props.title}</h1>
        <h4>Click below to go to your personal car inventory</h4>

        <Button>
          <Link to='/phonebook' className={classes.img} />
        </Button>
      </div>
    </div>
    </>
  )
}
