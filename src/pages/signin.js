import React, { useState, useContext } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/footer';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {firebase} = useContext(FirebaseContext);
    const history = useHistory();

    const isInValid = password === '' || emailAddress === '';
    
    const handleSignin = (event) => {
        event.preventDefault();
        // console.log('submit button clicked');
        // firebase work here
        firebase.auth().signInWithEmailAndPassword(emailAddress,password).then(()=>
        {
            //push to browse page
            history.push(ROUTES.BROWSE);
        }).catch(error=>{
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method='POST'>
                        <Form.Input placeholder='Email Address' value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />
                        <Form.Input placeholder='Password' type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInValid} type='Submit'>
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>New To Netflix?
                        <Form.Link to='/signup'>Sign Up Now</Form.Link>
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