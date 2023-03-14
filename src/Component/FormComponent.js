import { Component } from "react";

class FormComponent extends Component {
    state={
    firstname:"",
    lastname:"",
    }
    handleclick = (event) =>{
        this.setState({
            firstname: event.target.value,
        });
        console.log(event.target.value);
    };
    handleLastNameclick = (event) =>{
        this.setState({
            lastname: event.target.value,
        });
        console.log(event.target.value);
    };
    submitchanges = (event) =>{
       event.preventDefault();
        console.log({
            firstname:this.state.firstname,
            lname:this.state.lastname,
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitchanges}>
                    <input onChange={this.handleclick} type="text" value={this.state.firstname} ></input>
                    <input onChange={this.handleLastNameclick} type="text" value={this.state.lastname} ></input>
                    <button type="submit" >submit</button>
                </form>
            </div>


        )
    }
}
export default FormComponent;