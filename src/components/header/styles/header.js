import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
display:flex;
margin:0 56px;
max-height:64px;
padding:18px 0;
justify-content: space-between;
align-items:center;
box-sizing:border-box;

a{
    display:flex;
}

@media(max-width:100px)
{
    margin:0 30px;
}
`;

export const Logo = styled.img`
height:32px;
width:108px;
margin-right:40px;

@media(min-width:1449px)
{
    height:45px;
    width:167px;
}
`;

export const ButtonLink = styled(ReactRouterLink)`
display:block;
background-color:#e50914;
widh:84px;
height:fit-content;
color:white;
border-radius:3px;
padding:8px 17px;
cursor:pointer;
text-decoration:none;
box-sizing:border-box;

&:hover{
    background-color:#f40612;
}
`;

export const Background = styled.div`
display:flex;
flex-direction:column;
background:url(${({ src }) => (
        src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`
    )});
background-size:cover;

@media(max-width:500px)
{
    ${({ dontShowOnSmallViewPort }) =>
        dontShowOnSmallViewPort && 'background:none'}
}
`;

export const Feature = styled(Container)`
 padding:150px 0 500px 0;
 flex-direction:column;
 align-items:normal;
 width:50%;
 max-height:50px;

 @media(max-width:700px)
 {
    margin-top:-70px;
    width:400px;
 }

 @media(max-width:500px)
 {
     display:none
 }
`;

export const Text = styled.p`
color:white;
font-size:22px;
line-height:normal;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45)
margin:0;
box-sizing:border-box;

@media(max-width:500px)
{
  max-width:50px;
}
`;

export const FeatureCallout = styled.h2`
color:white;
font-size:50px;
line-height:normal;
font-weight:bold;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
margin:0;
margin-bottom:20px;
`;

export const Link = styled.p`
color:white;
text-decoration:none;
margin:15px;
font-weight:${({ active }) => (active === true ? '700' : 'normal')};
cursor:pointer;
font-weight:bold;
font-size:20px;

&:hover{
    font-weight:bold;
}

&:last-of-type{
    margin-right:0;
}
`;

export const Group = styled.div`
display:flex;
align-items:center;
`
// background:url(${({ src }) => src})
// background-size:contain;

export const Picture = styled.button`
border:0;
width:32px;
height:32px;
cursor:pointer;
`;

export const PicturePhoto=styled.img`
width:32px;
height:32px;
`

export const Dropdown = styled.div`
display:none;
background-color:black;
position:absolute;
padding:10px;
width:100px;
top:32px;
right:10px;

${Group}:last-of-type ${Link}{
    cursor:pointer;
}

${Group} {
    margin-bottom:10px;

    &:last-of-type{
        margin-bottom:0;
    }
}

${Link}, ${Picture} {
    cursor:default
}

button{
    margin-right:10px;
}

p{
    font-size:12px;
    margin-bottom:0;
    margin-top:0;
}
`;

export const Profile = styled.div`
display:flex;
align-items:center;
margin-left:20px;
position:relative;

&:hover > ${Dropdown}{
    display:flex;
    flex-direction:column;
}
`
export const Search=styled.div`
display:flex;
align-items:center;

svg{
    color:white;
    cursor:pointer;
}

@media(max-width:700px)
{
    display:none;
}
`;

export const SearchIcon=styled.button`
cursor:pointer;
background-color:transparent;
border:0;

img{
    width:30px;
}   filter: brightness(0) invert(1);
`;

export const SearchInput=styled.input`
background-color:#444444459;
color:white;
border:${({active})=> active?'1px solid black':0};
transition:width 0.5s;
height:30px;
font-size:14px;
width:${({active})=>active?'130px':'0px'}
`;

export const PlayButton=styled.button`
box-shadow:0 0.6vw 1vw -0.4vw rgba(0,0,0,0.35);
background-color:#e6e6e6;
color:#000;
border-width:0;
border-radius:5px;
font-size:20px;
cursor:pointer;
padding:10px 20px;
max-width:130px;
margin-top:20px;
font-weight:bold;
transition:background-color: 0.5 ease;

&:hover{
    background-color:#ff1e1e;
    color:white;
}
`;
// margin-left:${({active})=>active?'10px':'0'}