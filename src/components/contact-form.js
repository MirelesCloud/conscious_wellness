import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="default-form-area">
        <form
          className="default-form"
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
          <div className="row form-group" >
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <input type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Your Name"/>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form-group ">
                <input type="email" name="email" onChange={this.handleChange}className="form-control required email" placeholder="Your Email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form-group ">
                <input type="text" name="phone" onChange={this.handleChange} className="form-control"  placeholder="Phone"/>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <input type="text" name="subject" onChange={this.handleChange} className="form-control" placeholder="Subject"/>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="form-group ">
                <textarea name="message" onChange={this.handleChange} className="form-control textarea required" placeholder="Message" ></textarea>
              </div>
            </div>
          </div>
          <div className="contact-section-btn text-center">
            <div className="form-group ">
              <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
              <button className="btn btn-dark" type="submit" data-loading-text="Please wait...">send message</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
