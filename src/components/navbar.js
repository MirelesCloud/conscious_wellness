import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const Navbar = () => (
  <section>
    <StaticQuery
      query={graphql`
        query LogoQuery {
          file(relativePath: { eq: "images/icon/conscious-wellness-logo-white-18px-05.png" }) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <nav className="navbar navbar-lg navbar-expand-lg navbar-light bg-light">
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://example.com">Work with Me</a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://example.com">Classes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://example.com">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://example.com">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
        </>
      )}
      />
  </section>

)


export default Navbar
