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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_state: 'init',
      name: '',
      phone: '',
      email: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render () {
    const textItems = [];
    const partnerItems = [];
    const { form_state } = this.state;

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
        <form className={"feedback-form " + form_state} id="feedback" onSubmit={this.handleSubmit} method="POST" action="/">
          <p>Kerromme mielellämme lisää aikaisemmin tehdyistä asiakkuuksista ja projekteista.</p>
          <input name="name" onChange={this.handleInputChange} required type="text" placeholder="Nimi"/>
          <input name="phone" onChange={this.handleInputChange} type="text" placeholder="Puhelinnumero"/>
          <input name="email" onChange={this.handleInputChange} required type="text" placeholder="Sähköposti"/>
          <textarea name="message" onChange={this.handleInputChange} required rows="9" placeholder="Viesti"></textarea>
          <div className="triangle"></div>
          <button type="submit">
            {
              form_state === 'loading' ? (
                <span>Odota...</span>
              ) : (
                form_state === 'success' ? (
                  <span>Viesti on lähetetty!</span>
                ) : (
                  form_state === 'failed' ? (
                    <span>Virhe tapahtunut</span>
                  ) : (
                    <>
                      <span>Lähetä</span>
                      <SendSvg/>
                    </>
                  )
                )
              )
            }
          </button>
        </form>
      </section>
    )
  }

  handleInputChange (e) {
    const target = e.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const templateId = 'garden_default';

	  this.sendFeedback(templateId, {
      from_name: this.state.name,
      from_phone: this.state.phone,
      from_email: this.state.email,
      message: this.state.message
    });
  }

  sendFeedback (templateId, data) {
    const self = this;
    self.setState({
      form_state: 'loading'
    })
    
    window.emailjs.send(
      'gmail', templateId, data
    ).then(res => {
      console.log('Email successfully sent!')
      self.setState({
        form_state: 'success'
      })
      setTimeout(function () {
        self.setState({
          form_state: 'init'
        })
      }, 2000);
    })
    .catch(err => {
      console.error('Form submition failed:', err)
      self.setState({
        form_state: 'failed'
      })
      setTimeout(function () {
        self.setState({
          form_state: 'init'
        })
      }, 2000);
    })
  }
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
