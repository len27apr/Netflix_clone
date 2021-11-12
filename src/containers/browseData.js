import React, { useState, useEffect } from 'react';
import { Header, Card, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import {FooterContainer} from '../containers/footer';
import Fuse from 'fuse.js';

export const BrowseData = ({ user, firebase, slides, profile }) => {
    // console.log('the slides in BrowseData are: ',slides);
    const [searchTerm, setSearchTerm] = useState('');
    const [Category, setCategory] = useState('series'); 
    const [slideRows, setSlideRows] = useState([]);
    // console.log('the slideRows in BrowseData is: ',slideRows)
    useEffect(() => {
        setSlideRows(slides[Category])
    }, [Category, slides])
    
    useEffect(()=>{
        const fuse=new Fuse(slideRows, {keys: ['data.description','data.title','data.genre']});
        const results=fuse.search(searchTerm).map(({item})=>item);
        if(slideRows.length>0 && searchTerm.length>3 && results.length >0)
        {
            setSlideRows(results);
        }
        else{
            setSlideRows(slides[Category])
        }
    },[searchTerm, Category, slides])
    return (
        <>
            <Header src='joker1' dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
                        <Header.TextLink active={Category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={Category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture><Header.PicturePhoto src={user.photoURL} /></Header.Picture>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture><Header.PicturePhoto src={user.photoURL} /></Header.Picture>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()} >
                                        Sign out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallout>Watch Joker Now!!</Header.FeatureCallout>
                    <Header.Text>
                        Forever alone in the crowd, failed comadian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his dat
                        job as a clown, and the guise he projects in a futile
                        attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${Category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) =>
                            (
                                <Card.Item key={item.docId} item={item} >
                                    <Card.Image src={`/images/${Category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            )
                            )}
                        </Card.Entities>
                        <Card.Feature category={Category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src={`/videos/bunny.mp4`} />
                            </Player>
                        </Card.Feature>
                    </Card>

                ))}
            </Card.Group>
            <FooterContainer />
        </>
    )
}

