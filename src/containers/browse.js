import React,{useContext} from 'react';
import {SelectionProfileContainer} from './profile';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({slides}) 
{
    const {firebase} = useContext(FirebaseContext);
    const user=firebase.auth().currentUser || {};
    // console.log('the user is: ',user);
    // const [profile,setProfile] = useState({})
    // const [loading,setLoading]=useState(true);
    return <SelectionProfileContainer user={user} />
}