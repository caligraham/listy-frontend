import React, { Component } from 'react'
import MiniLogo from './Images/MiniLogo.jpeg'


class About extends Component {
    render() {
        return (
            <div>
                <br></br> 
                <img src={MiniLogo} />
                <h3>About</h3> 
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                    <p className="about">
                        Listy is an application to keep you organized and brighten your day. 
                        All of your items are housed under the "List" tab. Create and delete your chores or errands as needed. 
                        Feeling a little down, or just need a reason to smile? Mosey on over to the "Click here if sad tab" and we'll do our best to turn that frown upside down!


                        Thank you for choosing Listy for all your productivity needs!
                  </p> 
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        )
    }
}

export default About
