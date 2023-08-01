import React from "react";
import { Outlet, Link } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComp from "./ProfileClassComp";
// const About = () => {
//   return <>
//     <h1>About</h1> 
//     <Link to="/about/profile">Profile</Link>
//     <Outlet/>
//   </>;
// };

class About extends React.Component {
  constructor(props) {
      console.log("Parent constructor")
      super(props);
  }

  componentDidMount(){
      console.log("Parent componentDidMount")
  }

  render() {
    console.log("Parent render")
    return (
      <div>
          <h2>About component</h2>
          {/* <Profile name="child-1"/> */}
          <ProfileClassComp age={5}/>
      </div>
    )
  }
}

export default About;


/**
 * 
 * Why we can make componnetDidMount async and not useEffect async?
 * 
 *      async componnetDidMount () {
 *          Correct, can make async 
 *            const data = await fetch("Some API");
 *             ----some code--
 *      }
 * 
 *       useEffect(async () => {
 *         Incoorect , cant make it async
 *       }, [])
 */

        /*
         * Parent contructor
         * Parent render
         *    Child constructor
         *    Child render
         *    Child componentDidMount
         * Parent componentDidMount
         */