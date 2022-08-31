import React, { Component } from "react";

interface PageProps {}
interface ColorProps {
  background: string;
}
class ColorSection extends Component<PageProps, ColorProps> {
  constructor(props: ColorProps) {
    super(props);
    this.state = {
      background: "red",
    };
    setTimeout(this.changeColor, 5000);
  }

  changeColor() {
    this.setState({
      background: "blue",
    });
  }

  render() {
    return (
      <div
        className="box"
        style={{ backgroundColor: `${this.state.background}` }}
      />
    );
  }
}

export default ColorSection;
