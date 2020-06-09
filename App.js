import React from "react";
import Cardlist from "./Cardlist";
import Scroll from "./Scroll.js";
import Searchbox from "./Searchbox";
// import {robots} from './robots';// yaha robot call ho raha hai


// const App = () => {
class App extends React.Component {  
    constructor(){
        super()
        this.state = {
            // state is something which can change and affect our app
            robots:    [], // entire app is taken care of by these fields
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //method of window
        .then(response=> response.json())
        // .then(users => { } );
        .then(users =>  this.setState({robots: users}) );
        // this.setState({robots: robots})  
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        // now we have data from search in app and will communicate with sardlisting now
        // const filteredRobots = this.state.robots.filter(robots =>{ the issue here is that it is not referring to the app it is intead refering to the input
        // using arrow will ensure that app is being used....  we should take care of this while
        // creating our own functions  
    
    }
    render() {    
        const filteredRobots = this.state.robots.filter(robots =>{ 
            // return robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase());
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        } 
        else{
            return(
                <div className="tc">
                    <h1> Robofriends </h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    {/* <Cardlist robots = {robots}/>  */}
                    <Scroll>
                    <Cardlist robots = {filteredRobots}/> 
                    </Scroll>
                    {/* cardlist needs to know what is in searchbox to conduct searchbox */}
                </div>
            );
        }
 
    }  

}

export default App;