import { Component } from "preact";

export default class Contact extends Component {
  submit() {
    // submit form data
  }

  render() {
    return (
      <div>
        <p>Feel free to drop me a line:</p>
        <form>
          <TextField
            label="Your name"
            name="name"
            onKeyUp={e => {
              this.setState({
                name: e.target.value
              });
            }}
          />
          <TextField
            label="Your email"
            type="email"
            name="email"
            onKeyUp={e => {
              this.setState({
                email: e.target.value
              });
            }}
          />
          <TextField
            label="Your message"
            name="message"
            onKeyUp={e => {
              this.setState({
                message: e.target.value
              });
            }}
          />
          <Button
            ripple
            raised
            onClick={e => {
              this.submit();
            }}
          >
            Flat button with ripple
          </Button>
        </form>
      </div>
    );
  }
}
