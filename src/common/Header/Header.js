import React from 'react';
import './Header.scss';

import { ReactComponent as PhoneSvg } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailSvg } from '../../assets/icons/email.svg';
import { ReactComponent as AddressSvg } from '../../assets/icons/address.svg';

const Header = () => {
    const linkItems = [];

    for (var link of links) {
        const Icon = link.icon;
        linkItems.push(
            <li className="item" key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Icon />
                </a>
            </li>
        )
    }

    return (
        <section className="header">
            <div className="logotype">
                <span>Creative Agency</span>
                <h2 className="logotype-text">Gården</h2>
            </div>
            <ul className="links">
                {linkItems}
            </ul>
        </section>
    )
}

const links = [
    {
        name: "Phone",
        url: "tel:+358405250413",
        icon: PhoneSvg
    },
    {
        name: "Email",
        url: "mailto:hello@gården.fi",
        icon: EmailSvg
    },
    {
        name: "Address",
        url: "https://maps.google.com/?q=Konepajankuja 1, 00510 Helsinki",
        icon: AddressSvg
    },
];

export default Header