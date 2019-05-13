import { Component } from "preact";
import TextField from "components/TextField";
import Button from "components/Button";
import ReCaptcha from "preact-google-recaptcha";

export default class Contact extends Component {
  state = {
    verified: false,
    sentEmail: false
  };

  submit = e => {
    e.preventDefault();
    if (
      !this.state.verified ||
      !this.state.name ||
      !this.state.email ||
      !this.state.message
    ) {
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          sentEmail: true
        });
      })
      .catch(error => alert(error));
  };

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onChange = async response => {
    const resp = await fetch("/.netlify/functions/recaptcha", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        response
      }) // body data type must match "Content-Type" header
    });

    const data = await resp.json();

    if (data.success) {
      this.setState({
        verified: true
      });
    }
  };

  render() {
    return this.state.sentEmail ? (
      <div>
        <p>Email sent! I'll try to get back to you asap.</p>
      </div>
    ) : (
      this.form()
    );
  }

  form() {
    return (
      <div>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <label for="name">name</label>
          <input type="text" name="name" hidden />
          <label for="email">email</label>
          <input type="email" name="email" hidden />
          <label for="message">message</label>
          <textarea name="message" hidden />
        </form>
        <h3>Feel free to drop me a line:</h3>
        <form name="contact" onSubmit={this.submit}>
          <input type="hidden" name="form-name" value="contact" />
          <TextField label="Your name" name="name" onKeyUp={this.handleInput} />
          <TextField
            label="Your email"
            type="email"
            name="email"
            onKeyUp={this.handleInput}
          />
          <TextField
            label="Your message"
            name="message"
            onKeyUp={this.handleInput}
          />
          <ReCaptcha
            sitekey="6LduHaMUAAAAAH52aU2TwF08pjJECO8nR8L0pml-"
            onChange={this.onChange}
          />
          <Button>Send</Button>
        </form>
      </div>
    );
  }
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
