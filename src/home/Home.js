import React from 'react'
import './Home.scss'
import { Footer, Header } from '../common'

import { ReactComponent as SendSvg } from '../assets/icons/send.svg';
import AbbvieImage from '../assets/images/abbvie.svg';
import AstraZenecaImage from '../assets/images/astrazeneca.png';
import BoehringerImage from '../assets/images/boehringer.svg';
import PfizerImage from '../assets/images/phizer.svg';

const Home = () => (
  <>
    <Header/>
    <HomeScreen/>
    <Footer/>
  </>
)

const HomeScreen = () => {
  const textItems = [];
  const partnerItems = [];

  for (var textItem of textBlocksItems) {
    textItems.push(
      <li className="item" key={textItem}>
        <p>{textItem}</p>
      </li>
    );
  }

  for (var partnerItem of partnersBlockItems) {
    partnerItems.push(
      <li className="item" key={partnerItem.name}>
        <div className="box">
          <img src={partnerItem.img} alt={partnerItem.name} />
        </div>
      </li>
    )
  }

  return (
      <section className="home">
          <ul className="description-block">
            {textItems}
          </ul>
          <ul className="partners-block">
            {partnerItems}
          </ul>
          <form className="feedback-form" method="POST" action="">
            <p>Kerromme mielellämme lisää aikaisemmin tehdyistä asiakkuuksista ja projekteista.</p>
            <input name="name" type="text" placeholder="Nimi"/>
            <input name="phone" type="text" placeholder="Puhelinnumero"/>
            <input name="email" type="text" placeholder="Sähköposti"/>
            <textarea name="message" rows="9" placeholder="Viesti"></textarea>
            <div className="triangle"></div>
            <button type="submit">
              <span>Lähetä</span>
              <SendSvg/>
            </button>
          </form>
      </section>
  )
}

const textBlocksItems = [
  "Olemme tuore ryhmä osaavia tekijötä, joilla on yli 15 vuoden kokemus lääkehoidon, lääkehuollon ja terveystuotteiden markkinoinnista. Haluamme toimia suoraviivaisesti ja läheisessä yhteistyössä asiakkaan kanssa.",

  "Oli kyseessä lääke tai terveystuote, palvelu, digitaalinen sovellus, monikanavainen kampanja- kokonaisuus. Lääkäri- tai kuluttajakampanja. Tai tarve vaikuttaa suomalaiseen terveyspolitiikkaan.",
]

const partnersBlockItems = [
  {
    name: "Abbvie",
    url: "https://www.abbvie.com/",
    img: AbbvieImage
  },
  {
    name: "AstraZeneca",
    url: "https://www.astrazeneca.com/",
    img: AstraZenecaImage
  },
  {
    name: "Boehringer Ingelheim",
    url: "https://www.boehringer-ingelheim.com/",
    img: BoehringerImage
  },
  {
    name: "Pfizer",
    url: "https://www.pfizer.com/",
    img: PfizerImage
  },
]

export default Home
