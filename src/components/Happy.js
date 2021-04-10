import React, { Component } from 'react'
import Cat from './Images/Cat.jpeg'
import Mouse from './Images/Mouse.jpeg'
import Quokka from './Images/Quokka.jpeg'
import Puppy from './Images/Puppy.jpeg'
import Sloth from './Images/Sloth.jpeg'

const HappyAnimals = [Cat, Mouse, Quokka, Puppy, Sloth]

class Happy extends Component {
    render() {
        
        return (

            <div>
             <img className="images" src={HappyAnimals[Math.floor(Math.random() * 5)]}/>
            </div>
        )
    }
}

export default Happy
