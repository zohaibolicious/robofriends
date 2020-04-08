import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js'
import Error from "./Error";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onsearchchange = (event) =>
    {  this.setState({ searchfield: event.target.value });


    }
    render()
    {
        const filter= this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className= ' tc'>
                <h1 className='f1'> My Friends </h1>
                <SearchBox searchchange={this.onsearchchange}/>
                <Scroll>
                    <Error>
                        <CardList robots={filter}/>
                    </Error>
                </Scroll>
            </div>
        );
    }

}

export default App;
