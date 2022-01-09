import react from "react";
import axios from "axios";
import dictionary from "../api/dictionary";
//const DICT_API_KEY = "773eb5a2-220a-4b53-883d-c4fed106c856"
class DictionaryComponent extends react.Component{
    
    state ={
        word:" ",
        definition:" "
    }
    
    searchNewWord = event =>{
            this.setState({
                word : event.target.value
            })
        
    }

    onWordSubmit = async event =>{
        event.preventDefault();

        
        if(this.state.word.trim()){
            
            let response = await dictionary.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.word}`);
            // const response = await dictionary.get('/',
            // {
            //     params:{
            //         q:this.state.word
            //     }
            // });
            
            
            console.log("Dictionary response",response.data[0].meanings[0].definitions[0].definition)
            let defi =response.data[0].meanings[0].definitions[0].definition
            this.setState({
                definition: defi
            })
            console.log("defini",defi)
        }else{
            console.log("error: enter a value - word field is empty")
        }

        
    }

    // deleteNote = (event,i)=>{
    //     event.preventDefault();
    //     let tempArray = this.state.word
    //     let index = tempArray.indexOf(i);
    //     tempArray.splice(index, 1);
    //     this.setState({word:tempArray})
    // }

    render(){
        let wordDefinition = this.state.definition
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onWordSubmit}>
                 <div className="field">
                     <label>Dictionary</label>
                     <input type='text' value = {this.state.word} onChange={this.searchNewWord}/>
                 </div>
                 <div>
                 {wordDefinition}
                 </div>
             </form>
            </div>
             
        )
    }
}

export default DictionaryComponent;