import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({user, loggedinPath, children, path, ...restProps})
{
return(
    <Route {...restProps} render={()=>{
        if(!user)
        {
            console.log('There is no user!! and the path is:', path);
            return children
        }
        if(user)
        {
            return (
                <Redirect to={{pathname:loggedinPath}} />
            )
        }
        return null;
    }}
    /> 
)
}

export function ProtectedRoute({user,children,...restProps})
{
    return (
        <Route {...restProps} render={({location})=> {
            if(user)
            {
                return children;
            }
            if(!user)
            {
                return (
                    <Redirect to={{
                        pathname:'signin',
                        state: {from:location},
                    }} />
                )
            }
            return null;
        }} />
    )
}