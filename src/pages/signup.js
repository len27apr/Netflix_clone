import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/footer';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    const isInValid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();
        // console.log('submit button clicked');
        // firebase work here
        firebase.auth().createUserWithEmailAndPassword(emailAddress, password).then((results) => {
            console.log('The results in signup is given by: ');
            console.log(results);
            console.log('the user in SignUp is given by: ');
            console.log(results.user);
            console.log('The function upadteProfile in Signup is given by:');
            console.log(results.user.updateProfile);

            results.user.updateProfile(
                {
                    displayName: firstName,
                    photoURL: Math.floor(Math.floor(Math.random() * 5) + 1)
                }
            )
        }).then(() => {
            //push to browse page
            history.push(ROUTES.BROWSE);
        }).catch(error => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method='POST'>
                        <Form.Input placeholder='First Name' value={firstName} onChange={({ target }) => setFirstName(target.value)} />
                        <Form.Input placeholder='Email Address' value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
                        <Form.Input placeholder='Password' type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInValid} type='Submit'>
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>Already a user?
                        <Form.Link to='/signin'>Sign In Now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}