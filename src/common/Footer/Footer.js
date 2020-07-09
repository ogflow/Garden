import React from 'react';
import './Footer.scss';

import { ReactComponent as PhoneSvg } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailSvg } from '../../assets/icons/email.svg';
import { ReactComponent as AddressSvg } from '../../assets/icons/address.svg';

const Footer = () => {
  const linkItems = [];

  for (var link of links) {
    const Icon = link.icon;

      linkItems.push(
          <li className="item" key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Icon/>
                  <span>{link.text}</span>
              </a>
          </li>
      )
  }

  return (
    <section className="footer">
      <ul className="links">
        {linkItems}
      </ul>
    </section>
  )
}

const links = [
  {
      name: "Phone",
      text: "+358 40 525 0413",
      url: "tel:+358405250413",
      icon: PhoneSvg
  },
  {
      name: "Email",
      text: "hello@gården.fi",
      url: "mailto:hello@gården.fi",
      icon: EmailSvg
  },
  {
      name: "Address",
      text: "Konepajankatu 1, 00510 Helsinki",
      url: "https://maps.google.com/?q=Konepajankatu 1, 00510 Helsinki",
      icon: AddressSvg
  },
];

export default Footer