import React, { Component } from 'react'
import Cat from './Images/Cat.jpeg'
import Mouse from './Images/Mouse.jpeg'
import Quokka from './Images/Quokka.jpeg'
import Puppy from './Images/Puppy.jpeg'
import Sloth from './Images/Sloth.jpeg'
import Seal from './Images/Seal.jpeg'
import Koala from './Images/Koala.jpeg'
import Leo from './Images/Leo.jpeg'
import Bear from './Images/Bear.jpeg'
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    pic: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(15),
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(10)
    }
    }
  ));


const HappyAnimals = [Cat, Mouse, Quokka, Puppy, Sloth, Seal, Koala, Leo, Bear]

// const [autoPlay, setAutoPlay] = useState(true);


const Happy = () => {
   const classes = useStyles()
     
        return (
            <Carousel>
            { HappyAnimals.map( ( item, i) => <Item key={i} item={item} /> )}
            </Carousel>
        )
    }

  function Item () {
      return (
                <Image
                src={HappyAnimals[Math.floor(Math.random() * 9)]}
                aspectRatio={(16/9)}
                />
      )
  }


export default Happy


