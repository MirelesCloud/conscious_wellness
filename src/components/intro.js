import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import Zoom from 'react-reveal/Zoom'

const TESTIMONIALSPATHS = [
  {
    'quote': 'You are in good hands with Heather! She is an amazing healer and teacher.',
    'name': 'April Walker'
  },
  {
    'quote': 'Heather\'s ability to access her many gifts simultaneously is what makes her healings so powerful. She is a healer\'s healer.',
    'name': 'Shaun E. Herbst, Lizzie Moon, Many Blooms!'
  },
  {
    'quote': 'Heather Watson is a very talented healer. She is spot on and very present in her sessions.',
    'name': 'Donica Salazar'
  },
  {
    'quote': 'The best thing that I\'ve ever done for my body, mind and soul. I am not sure where I would be without Heather.',
    'name': 'Maggie May'
  },
  {
    'quote': 'Heather is such a gift to me and my children! She has cleared multiple allergies for my daughter and myself.',
    'name': 'Marisa, Sonora'
  },
  {
    'quote': 'From our first meeting, I knew I was about to experience a whole new perspective on health and wellness.',
    'name': 'Bob Lippert'
  },
  {
    'quote': '[Heather] has vast knowledge in many areas of healing and brings this purity and peace during the sessions.',
    'name': 'Nicole Ottman - Holistic Health Practioner & Transformational Therapist'
  },
  {
    'quote': 'Heather taught me techniques I still use today to protect my energy. I wholeheartedly recommend her to anyone who wants to improve their personal energy.',
    'name': 'Sabrena Rose'
  }
];

class TestimonialContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentQuote: 0};
    this.interval = null;
    this.nextQuote = this.nextQuote.bind(this);
  }

  nextQuote() {
    let current = this.state.currentQuote;
    let next = ++current % TESTIMONIALSPATHS.length;
    this.setState({currentQuote: next});
  }

  componentDidMount() {
    this.interval = setInterval(this.nextQuote, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = TESTIMONIALSPATHS[this.state.currentQuote];
    return (
      <div>
        <p style={{fontSize:"1.3rem"}}>"{ src.quote }"</p>
        <p style={{lineHeight:"1px"}}>-{ src.name }</p>
      </div>
    )
  }
}

const Intro= () => (
  <StaticQuery
    query={graphql`
      query IntroQuery {
        feature: file(relativePath: { eq: "images/heather-profile.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        background: file(relativePath: { eq: "images/joseph-barrientos-22900-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        logo: file(relativePath: {eq: "images/logo.png"}) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <section>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <Zoom>
                  <div className="feature">
                   <Img className="intro-image" fluid={data.feature.childImageSharp.fluid}/>
                  </div>
                </Zoom>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="my-2">
                <TestimonialContainer/>
                  <Img fluid={data.logo.childImageSharp.fluid} style={{maxWidth:"100px", height:"auto", marginLeft:"auto", marginRight:"auto"}}/>
              </div>
           </div>
          </div>
        </div>
        <div className="jumbotron intro"
        style={{  backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}
          >
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="greeting" style={{lineHeight:"10%"}}>Welcome!</p>
                <p className="greeting" style={{lineHeight:"70%"}}><small>¡Bienvenidos!</small></p>
                <p className="lead">My mission is to help heal clients and empower them to attain the optimal health they want and deserve.</p>
                  <hr className="my-4"/>
                <p>I provide education and tools for you to achieve your optimal health. Humans are more than just a body part or a dis-ease. There is an interconnectedness of the body, mind and soul, and each are affected by the other. So our therapies work with the whole person.</p>
                <p>¡Hablo español!</p>
                <p className="lead">
                  <Link to="/contact" type="button" className="btn btn-light btn-lg">Contact Me</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )}
    />
)

export default Intro
