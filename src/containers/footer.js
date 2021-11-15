import React from 'react';
import { Footer } from '../components'
import FooterData from '../FooterData3.json';

export function FooterContainer() {
    const FooterRowData = [];
    let FooterLink = [];
    for (let i = 0; i < FooterData.length; i++) {
        FooterLink = [];
        for (let j = 0; j < FooterData[i].length; j++) {
            FooterLink.push(<Footer.Link href={FooterData[i][j][`column${i + 1}_row${j + 1}_href`]} key={FooterData[i][j][`column${i + 1}_row${j + 1}_id`]}>
                {FooterData[i][j][`column${i + 1}_row${j + 1}`]}
            </Footer.Link>);
        }
        FooterRowData.push(FooterLink);
    }
    return (
        <Footer>
            <Footer.Title>Questions? Contact us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                {FooterRowData.map((Linkdata, index) => {
                    return (
                        <Footer.Column key={index}>
                            {Linkdata.map((data, index) => {
                                return <div key={index} style={{ "width": "100%", "height": "100%", "margin": "10px" }}>
                                    {data}
                                </div>
                            })}
                        </Footer.Column>
                    )
                })}
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}