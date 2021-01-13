import React from 'react';
//connect is the function to subscribe your component to redux
import { connect } from 'react-redux';

const Profile = props => {
    // console.log(props)
    return (
        <main className='profile'>
            <h1>{props.userReducer.user.username}</h1>
            <h3>{props.userReducer.user.age}</h3>
            <h3>{props.userReducer.user.email}</h3>
        </main>
    )
}

//mapStateToProps is the function that allows you to define the state items you want to subscribe to on redux
const mapStateToProps = reduxState => reduxState;

//connect is passed mapStateToProps and your Component, in separate sets of parentheses
export default connect(mapStateToProps)(Profile);