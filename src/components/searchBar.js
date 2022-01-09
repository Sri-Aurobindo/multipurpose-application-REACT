//Search bar component

import react from "react";

//Class based components is used for state based approach
class SearchBar extends react.Component{
    state = {
        searchValue : " "
    }

    //onInputChange function is to get the value entered into the search box and set it to the state searchValue
    onInputChange = event => {
        this.setState({searchValue : event.target.value})
    }

    //onFormSubmit function triggers when value entered into the search box
    onFormSubmit = event =>{

        //event.prevenDefault - used to prevent the page referesh when user clicks enter after the value is entered.
        event.preventDefault();

        //passing value form child (searchbar component) to parent (app component)
        //we are sending this onFormSubmit function to parent component (app) with value as this.state.searchValue
        this.props.onFormSubmit(this.state.searchValue)

    }
        render(){
            return (
                <div className="search-bar ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Video Search</label>
                            <input type='text' value = {this.state.searchValue} onChange={this.onInputChange}/>
                        </div>
                    </form>
                </div>
            )
        }
}

export default SearchBar;