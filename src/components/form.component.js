import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const abc= RegExp(/^[1-9]?[0-9]{1}$|^100$/)
const pqr= RegExp(/(Male|Female|M|F|male|female)/)
const z=RegExp(/[a-z]|[A-Z]/)


const validation = ({ error, ...rest }) => {
    let checkValidation = false;

   
    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    
    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            FirstName: '',
            LastName: '',
            Age: '',
            Gender: '',
            Email: '',
            Password: '',
            error: {
                FirstName: '',
                LastName: '',
                Age: '',
                Gender: '',
                Email: '',
                Password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occurred");
        }
    };


    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        
        switch (name) {
            
            case "FirstName":
                error.FirstName = z.test(value)
                        ? ""
                        : " not valid";
                    break;
               
            
            case "LastName":
                error.LastName = z.test(value)
                ? ""
                : " not valid";
            break;
            
            case "Age":
                    error.Age = abc.test(value)
                        ? ""
                        : "age is not valid";
                    break;
            
            case "Gender":
                        error.Gender = pqr.test(value)
                            ? ""
                            : "gender is not valid";
                        break;
            
            case "Email":
                error.Email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            
            case "Password":
                error.Password =
                    value.length < 8 ? "Password should 8 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
            <div className="container">
                <div className="card mt-5">
                    <form className="card-body" onSubmit={this.onFormSubmit}>


                       
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>FirstName</strong></label>
                            <input 
                               required
                               type="text" 
                               name="FirstName"
                               onChange={this.formObject}
                               className={error.FirstName.length > 0 ? "is-invalid form-control" : "form-control"}/>
                                {error.FirstName.length > 0 && (
                                <span className="invalid-feedback">{error.FirstName}</span>
                                )}
                        </div>




                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>LastName</strong></label>
                            <input 
                               required
                               type="text" 
                               name="LastName"
                               onChange={this.formObject}
                               className={error.LastName.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.LastName.length > 0 && (
                                <span className="invalid-feedback">{error.LastName}</span>
                                )}
                        </div>


                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Age</strong></label>
                            <input 
                               required
                               type="text" 
                               name="Age"
                               onChange={this.formObject}
                               className={error.Age.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.Age.length > 0 && (
                                <span className="invalid-feedback">{error.Age}</span>
                                )}
                        </div>

                       
                       
                       
                       
                       
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Gender</strong></label>
                            <input 
                               required
                               type="text" 
                               name="Gender"
                               onChange={this.formObject}
                               className={error.Gender.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.Gender.length > 0 && (
                                <span className="invalid-feedback">{error.Gender}</span>
                                )}
                        </div>





                        
                        
                        
                        
                        
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Email</strong></label>
                            <input
                                required
                                type="email"
                                name="Email"
                                className={error.Email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.Email.length > 0 && (
                                    <span className="invalid-feedback">{error.Email}</span>
                                )}
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Password</strong></label>
                            <input
                                required
                                type="password"
                                name="Password"
                                className={error.Password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.Password.length > 0 && (
                                    <span className="invalid-feedback">{error.Password}</span>
                                )}
                        </div>

                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-block btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}