import react from "react";

class NotesComponent extends react.Component{
    
    state ={
        notes:[],
        newNote : " "    
    }
    
    addNewNote = event =>{
            this.setState({
                newNote : event.target.value
            })
        
    }

    onNoteSubmit = event =>{
        event.preventDefault();

        if(this.state.newNote.trim()){
            
            let existingArray = this.state.notes;
            existingArray.push(this.state.newNote);
            this.setState({
                notes: existingArray
            })
        }else{
            console.log("error: enter a value - Notes field is empty")
        }
    }

    deleteNote = (event,i)=>{
        event.preventDefault();
        let tempArray = this.state.notes
        let index = tempArray.indexOf(i);
        tempArray.splice(index, 1);
        this.setState({notes:tempArray})
    }

    render(){
        let notesArray = this.state.notes;
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onNoteSubmit}>
                 <div className="field">
                     <label>Notes</label>
                     <input type='text' value = {this.state.newNote} onChange={this.addNewNote}/>
                 </div>
                 <div>
                 {notesArray.map((note,i) =>{ 
                        return <div style={{display:"inline grid",textAlign:"left"}}>
                                    <i key = {i} class="minus circle icon red" onClick={(event) => this.deleteNote(event,note)}></i>
                                    <span>{note}</span>
                                </div>
                 })}
                 </div>
             </form>
            </div>
             
        )
    }
}

export default NotesComponent;