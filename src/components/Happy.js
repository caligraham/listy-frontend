import React, { Component } from 'react'
import Cat from './Images/Cat.jpeg'
import Mouse from './Images/Mouse.jpeg'
import Quokka from './Images/Quokka.jpeg'
import Puppy from './Images/Puppy.jpeg'
import Sloth from './Images/Sloth.jpeg'
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    pic: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(15),
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(10)
    }
    }
  ));


const HappyAnimals = [Cat, Mouse, Quokka, Puppy, Sloth]




const Happy=() => {
   const classes = useStyles()
     
        return (

            <div className={classes.pic}>
            <Image
            src={HappyAnimals[Math.floor(Math.random() * 5)]}
            aspectRatio={(16/9)}
            />
            {/* <img className="images" src={HappyAnimals[Math.floor(Math.random() * 5)]}/> */}
            </div>
        )
    }


export default Happy
