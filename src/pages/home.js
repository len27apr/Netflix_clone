import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/Header';
import { OptForm, Feature } from '../components';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Films, TV Programmes and more..</Feature.Title>
                    <Feature.Subtitle>Watch anywhere.. Cancel anytime..</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email Address' />
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}