import { Component } from "react";

class FormComponent extends Component {
    state={
    firstname:"",
    }
    handleclick = (event) =>{
        this.setState({
            firstname: event.target.value,
        });
        console.log(event.target.value);
    };

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleclick} type="text" value={this.state.firstname} ></input>
                </form>
            </div>


        )
    }
}
export default FormComponent;