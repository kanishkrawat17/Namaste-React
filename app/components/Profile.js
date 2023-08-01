import React from 'react'

// const Profile = () => {
//   return (
//     <>
//       <h1>Profile</h1>
//     </>
//   )
// }

class Profile extends React.Component {
  constructor(props) {
      super(props);
      console.log(this.props.name,"Child constructor", this, "----",props, "---",this.props);
  }

  componentDidMount(){
    console.log(`${this.props.name} componentDidMount`)
  }

  render() {
      console.log(`${this.props.name} render`);
      return (
          <div>
              <h2>Profile component</h2>
          </div>
      )
  }
}

export default Profile