import { Component } from "preact";
import TextField from "components/TextField";
import Button from "components/Button";
import ReCaptcha from "preact-google-recaptcha";

export default class Contact extends Component {
  submit() {
    // submit form data
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onChange = response => {
    console.log("Captcha response:", response);
  };

  render() {
    return (
      <div>
        <p>Feel free to drop me a line:</p>
        <form name="contact" method="POST" data-netlify="true">
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
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={this.onChange}
          />
          <Button>Send</Button>
        </form>
      </div>
    );
  }
}
