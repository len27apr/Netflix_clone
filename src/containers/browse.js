import React, { useContext, useState, useEffect } from 'react';
import { SelectionProfileContainer } from './profile';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';
import { BrowseData } from './browseData';

export function BrowseContainer({ slides }) {
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    // console.log('the user is: ',user);
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true);


    // console.log('the profile is: ',profile.displayName);
    useEffect(() => {
        // console.log('use Effect running in browse.js');
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [profile.displayName])


    // console.log('the value of profile display Name is: ',profile.displayName, 'and the value of loading is ',loading);
    return profile.displayName ? 
        (
            loading ?
                <Loading src={user.photoURL} />: 
                    <>
                        <Loading.ReleaseBody />
                        <BrowseData user={user} firebase={firebase} slides={slides} profile={profile}/>
                    </>
        ) :
        (
            <SelectionProfileContainer user={user}  setProfile={setProfile}/>
        )
}

