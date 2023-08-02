import React, { Component } from 'react';

export class ProfileClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Kanishk",
            githubInfo: {},
        };
        console.log(this.handleClick, "this.handleClick"); //  
        /*
            this.handleClick is below here inside constructor
            
            handleClick() {
                console.log("handleClick");
                this.setState({
                    ...this.state,
                    count: this.state.count + 1
                });
            }
        */
        this.handleClick = this.handleClick.bind(this); // ProfileClassComp
     /*
        In the given code, the line this.handleClick = this.handleClick.bind(this); 
        is used to bind the method handleClick to the current instance of the ProfileClassComp component.

        In JavaScript, the value of this inside a function depends on how the function is called. 
        When defining event handlers or callback functions in React components, 
        you often need to ensure that this refers to the correct instance of the component.

        By default, when you use a class method as an event handler (like onClick={this.handleClick}), 
        the method loses its original context (i.e., the component instance), 
        and this becomes undefined or refers to a different context. To ensure that the method maintains its original context,
         you need to explicitly bind it to the current instance of the component.

        By using this.handleClick.bind(this), the handleClick method is bound to the current instance of the ProfileClassComp component. 
        This ensures that whenever the button is clicked and the handleClick method is invoked, 
        it will have access to the correct this context, which refers to the component instance. 

        As a result, the method can correctly access and update the component's state using this.setState(), as seen in the handleClick method in this code.
    */

        console.log("Child constructor", ", props ", props, ", this.props ", this.props, ", this ", this);
    };

    async componentDidMount() {
        console.log("Child componentDidMount", this.props);
        const data = await fetch("https://api.github.com/users/kanishkrawat17");
        const json = await data.json();
        this.setState({
            githubInfo: json,
        });
    };
    
    componentDidUpdate(prevProps, prevState){
        console.log("Child componentDidUpdate", prevProps, prevState, "--");
    }
    
    componentWillUnmount(){
        // Cleanups can come here.
        console.log("Child componentWillUnmount");
    }
    
    handleClick() {
        console.log("handleClick");
        this.setState({
            ...this.state,
            count: this.state.count+1,
        })
    }
    render() {
        const { githubInfo } = this.state;
        console.log("Child render", this.state, ", this", this)
    return (
        <>
            <h2>Github profile info</h2>
            <ul>
                <li>Name: {githubInfo?.name}</li>
                <li>Number of repos: {githubInfo?.public_repos}</li>
                <li>Github link: {githubInfo?.html_url}</li>
            </ul>
            <button onClick={this.handleClick}>{this.state?.count}</button>
       </>
    )
  }
}

export default ProfileClassComp;