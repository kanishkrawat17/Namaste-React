import React, { Component } from 'react';

export class ProfileClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Kanishk",
            githubInfo: {},
        };
        console.log("Child constructor", ", props ", props, ", this.props ", this.props);
    };

    async componentDidMount() {
        console.log("Child componentDidMount", this.props);
        const data = await fetch("https://api.github.com/users/kanishkrawat17");
        const json = await data.json();
        this.setState({
            githubInfo: json,
        });
    };
    
    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }
    
    componentWillUnmount(){
        console.log("Child componentWillUnmount");
    }
    
    render() {
        const { githubInfo } = this.state;
        console.log("Child render", this.state)
    return (
        <>
            <h2>Github profile info</h2>
            <ul>
                <li>Name: {githubInfo?.name}</li>
                <li>Number of repos: {githubInfo?.public_repos}</li>
                <li>Github link: {githubInfo?.html_url}</li>
            </ul>
       </>
    )
  }
}

export default ProfileClassComp;