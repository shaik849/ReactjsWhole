import React from 'react';
import AboutShimmer from './AboutShimmer';
import UsersContext from '../../utils/UsersContext';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: false,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://api.github.com/users/shaik849');
      const jsonData = await data.json();

      this.setState({
        userData: jsonData,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  render() {
    // const { userData } = this.state;

    if (this.state.userData === false) {
      return <AboutShimmer />;
    }

    const { name, location, avatar_url } = this.state.userData;

    return (
      <div className="flex items-center flex-col">
        <img className='m-4 rounded-[50%] w-[10%]' src={avatar_url} alt="User Avatar"></img>
        <div>
               <UsersContext.Consumer>
                {(data) => <h1>{data.user}</h1>}
               </UsersContext.Consumer>
        </div>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @597</h2>
      </div>
    );
  }
}

export default UserClass;
