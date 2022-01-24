import react from "react";
import cors from "cors";
import SearchBar from "./components/searchBar";
import Youtube from "./api/youtube";
import Stock from "./api/stockprice";

import VideoComponent from "./components/videoComponent";
import MiniComponent from "./components/miniComponent"
import TimeComponent from "./components/timeComponent"
import NotesComponent from "./components/notesComponent"
import DictionaryComponent from "./components/dictionaryComponents"
import WeatherComponent from "./components/weathercomponent"
import './App.css';

class App extends react.Component{

  state = {
    videoID : 'c2IqDxi_YfM'
  }

  //receiving values from searchBar Component(child component) to parent component (app)
  searchText = async event =>{
    console.log("event",event)

    //if search box has no value then default value for videoID state is calm music video id
    if(event){
        //making api call to youtube to get the searched video
        const response = await Youtube.get('/search',
            {
                params:{
                    q:event
                }
            });

        //setting the state videoID with the id of the resulted searched video
        this.setState({videoID : response.data.items[0].id.videoId})

        console.log("response",response)
    }else{
        this.setState({videoID : "j8wb221ZvYQ"})
    }
  }
 


  render(){
    return (
      <div className="grid-container">
          <div>
            <TimeComponent />
          </div>
          <div className="ui container item2">
              <SearchBar onFormSubmit = {this.searchText}/>
          </div>
          <div>
            <WeatherComponent />
          </div>
          <div>
            <DictionaryComponent />
          </div>
          <div className="item5">
            <NotesComponent className="ui container"/>
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
          <div className="item8">
              <VideoComponent videoID = {this.state.videoID}/>
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
          <div>
            <MiniComponent />
          </div>
      </div>
      
    )
  }
}

export default App;
