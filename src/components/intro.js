import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Zoom from 'react-reveal/Zoom'

const TESTIMONIALSPATHS = [
  {
    'quote': 'You are in good hands with Heather! She is an amazing healer and teacher.',
    'name': 'April Walker, Sonora, CA'
  },
  {
    'quote': 'A true healer for me is one who has the ability to connect with what needs tending in order to  bring me back into wholeness.',
    'name': 'Shaun E. Herbst, Lizzie Moon, Many Blooms!, Sonora, CA'
  },
  {
    'quote': 'Heather Watson is a very talented healer. She is spot on and very present in her sessions.',
    'name': 'Donica Salazar, Sonora, CA'
  },
  {
    'quote': 'The best thing that Ive every done for my body, mind and soul.',
    'name': 'Maggie May, Sonora, CA'
  },
  {
    'quote': 'Heather is such a gift to me and my children! She has cleared multiple allergies for my daughter and myself.',
    'name': 'Marisa, Sonora, CA'
  },
  {
    'quote': 'From our first meeting, I knew I was about to experience a whole new perspective on health and wellness.',
    'name': 'Bob Lippert, Sonora, CA'
  },
  {
    'quote': '[Heather] has vast knowledge in many areas of healing and brings this purity and peace during the sessions.',
    'name': 'Nicole Ottman - Holistic Health Practioner & Transformational Therapist'
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
      <Zoom>
          <p style={{fontSize:"1.3rem"}}>"{ src.quote }"</p>
          <p>-{ src.name }</p>
      </Zoom>
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
                <div className="feature">
                <Img className="intro-image" fluid={data.feature.childImageSharp.fluid}/>
              </div>
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
                <p className="greeting">Welcome/Bienvenidos!</p>
                <p className="lead">My mission is to help heal clients and empower them to attain the optimal health they want and deserve.</p>
                  <hr className="my-4"/>
                <p>I provide education and tools for you to achieve your optimal health. Humans are more than just a body part or a dis-ease. There is an interconnectedness of the body, mind and soul, and each are affected by the other. So our therapies work with the whole person.</p>
                <p>Hablo espanol!</p>
                <p className="lead">
                  <button type="button" className="btn btn-outline-light btn-lg">Learn More</button>
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
