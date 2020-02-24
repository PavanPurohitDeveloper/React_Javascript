import React, { Component } from 'react'

//Class based Component way
class Header extends Component {

    constructor(){
        super()

        this.state={
            title:'My React App',
            details:'This is react app'
        }
    }

    render() {
        // const mystyles = 10
        //By using Inline view CSS way
        const mystyles = {
            header:{
                backgroundColor:'teal'
            },
            logo:{
                fontSize:'30px',
                color:'#fff',
                textAlign:'center'
            }
        }

        return (
            <header style={mystyles.header}>
                <center>
                    <div style={mystyles.logo}>{this.state.title}</div>
                    <center>
                        <input></input>
                    </center>                   
                </center>
                <hr />
            </header>
        )

        // return (
        //     <div>
        //         <center>
        //             {/* <h1>React APP</h1> */}
        //             <h1>{this.state.title}</h1>
        //             <h2>{this.state.details}</h2>
        //             {/* <h2>{mystyles}</h2> */}
        //             <h2>{mystyles}</h2>
        //         </center>
        //         <hr />
        //     </div>
        // )
    }
}

//Functional Component way
/*
const Header = () => {
    return (
        <div>
            <center>
                <h1>React APP</h1>
            </center>
            <hr />
        </div>
    )
}
*/
export default Header;