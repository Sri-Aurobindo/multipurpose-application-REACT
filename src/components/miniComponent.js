import axios from 'axios';
import react from "react";
import cheerio from 'cheerio';

import SearchBar from "./searchBar";

import "../miniComponent.css";

class MiniComponent extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            mainState:"initial state"
        }; 
    }
    changeToValueState= (event)=>{
        console.log("clicked initial")
        this.setState({...this.state,
            mainState:"value state"
                    })
    }

    changeToFinalState= (event)=>{
        console.log("clicked value")
        this.setState({...this.state,
            mainState:"final state"
                    })
    }

    changeToInitialState= (event)=>{
        console.log("clicked final")
        this.setState({...this.state,
            mainState:"initial state"
                    })
    }

    searchText = (event)=>{
        let that = this
        
        function webScrape(){
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        
        console.log("value entered",event)
            that.setState({...that.state,
            mainState:"final state" })

            axios.get(`https://finance.yahoo.com/quote/nvda?p=nvda&.tsrc=fin-srch`,{headers:headers})
            .then(response =>{
                console.log("html",response.data)
                const $=cheerio.load(response.data)
            })
        }

        webScrape()
        setInterval(webScrape(),10000);
        
    }
    render(){
        return(
            <div>{this.state.mainState==="initial state" && (<i className="plus circle icon grey " onClick={this.changeToValueState}/>)}
            {this.state.mainState==="value state"  && (
            // <i className="plus circle icon green " onClick={this.changeToFinalState}/>
            <SearchBar onFormSubmit = {this.searchText}/>)}
            {this.state.mainState==="final state" && <i className="plus circle icon red " onClick={this.changeToInitialState}/>}
        </div>)
    }
}

export default MiniComponent;