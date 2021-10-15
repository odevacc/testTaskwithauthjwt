import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { validate } from '../../../../utils/validate'
import EditProfile from './EditProfile'
import { updateUser } from '../../../../store/reducers/authReducer' 

const EditProf = reduxForm({form: 'editProfile', validate})(EditProfile)

const EditProfileSupp = ({email, username, bio, image, updateUser}) => {
    const onSubmit = (data) => {
        if(!data.newpassword){
            data.newpassword = null
        }
        let {newemail, newusername, bio, image, newpassword} = data
        updateUser(newemail, newusername, bio, image, newpassword)
        console.log(data)
    }
    return (
        <div>
            <EditProf
            onSubmit={onSubmit} 
            email={email} username={username} bio={bio} image={image}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        username: state.auth.username,
        bio: state.auth.bio,
        image: state.auth.image
    }
}

export default connect(mapStateToProps, {updateUser})(EditProfileSupp) 
