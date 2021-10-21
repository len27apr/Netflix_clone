import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import { Container, Logo, ButtonLink, Background} from '../header/styles/header'; 

export default function Header({bg=true,children,...restProps})
{
    return <Background {...restProps} >
        {children}
    </Background>;
}

Header.Frame = function HeaderFrame({children, ...restProps})
{
    return <Container {...restProps}>
        {children}
    </Container>
}

Header.Logo = function HeaderLogo({to, ...restProps})
{
    return <ReactRouterLink to={to} >
        <Logo {...restProps} />
    </ReactRouterLink>
}
Header.ButtonLink=function HeaderButtonLink({children, ...restProps})
{
    return <ButtonLink {...restProps} >
        {children}
    </ButtonLink>
}