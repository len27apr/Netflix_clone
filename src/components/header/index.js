import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Container, Logo, ButtonLink, Background,
    Feature, Text, FeatureCallout, Link, Group, Picture,
    Profile, Dropdown, PicturePhoto, Search, SearchIcon,
    SearchInput, PlayButton
} from '../header/styles/header';

export default function Header({ bg = true, children, ...restProps }) {
    return <Background {...restProps} >
        {children}
    </Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return <ReactRouterLink to={to} >
        <Logo {...restProps} />
    </ReactRouterLink>
}
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps} >
        {children}
    </ButtonLink>
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallout = function HeaderFeatureCallout({ children, ...restProps }) {
    return <FeatureCallout {...restProps}>
        {children}
    </FeatureCallout>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>
        {children}
    </Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} >
        {/* <img src={`/images/users/${src}.png`} alt='Users.png'/> */}
    </Picture>
}

Header.PicturePhoto = function HeaderPicturePhoto({ src, ...restProps }) {
    return <PicturePhoto src={`/images/users/${src}.png`} {...restProps} />
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>
        {children}
    </Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>
        {children}
    </Dropdown>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    return <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
            <img src={`/images/icons/search.png`} alt='Search' />
        </SearchIcon>
        <SearchInput value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search Films and Series' active={searchActive} />
    </Search>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps})
{
 return <PlayButton {...restProps} >
     {children}
 </PlayButton>
}