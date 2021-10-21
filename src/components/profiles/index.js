import React from 'react';
import { Container,Title,List,Picture, Name, User} from './styles/profiles';

export default function Profiles({children, ...restProps})
{
    return <Container {...restProps}>
        {children}
    </Container>
}

Profiles.Title=function ProfilesTitle({children, ...restProps})
{
    return <Title {...restProps}>{children}</Title>
}

Profiles.List=function ProfilesList({children, ...restProps})
{
    return <List {...restProps}>{children}</List>
}

Profiles.User=function ProfileUser({children, ...restProps})
{
    return <User {...restProps}>{children}</User>
}

Profiles.Picture=function ProfilePicture({children, src, ...restProps})
{
    return <Picture {...restProps} 
    src={src?`./images/users/${src}.png` : `./images/misc/loading.gif`} />
}

Profiles.Name=function ProfileName({children, ...restProps})
{
    return <Name {...restProps}>
        {children}
    </Name>
}