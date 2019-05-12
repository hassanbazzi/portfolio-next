import { Component } from "preact";
import TextField from "components/TextField";
import Button from "components/Button";
import ReCaptcha from "preact-google-recaptcha";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state);

    fetch("/functions/form", {
      method: "POST",
      headers: { Accept: "application/json" },
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(response => response.json())
      .then(data => ({
        statusCode: 200,
        body: data.joke
      }))
      .catch(error => ({ statusCode: 422, body: String(error) }));
  };

  handleInput = ({ target }) => {
    console.log("target", target.name, target.value);
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
        <form name="contact" onSubmit={this.submit}>
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
