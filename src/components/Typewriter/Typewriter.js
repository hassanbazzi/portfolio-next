import { Component } from "preact";

export default class TypeWriter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      progress: 1
    });
  }

  componentDidUpdate() {
    if (this.state.progress <= this.props.children[0].length - 1) {
      setTimeout(() => {
        this.setState({
          progress: this.state.progress + 1
        });
      }, 70);
    }
  }

  render() {
    return <h3>{this.props.children[0].slice(0, this.state.progress)}</h3>;
  }
}
