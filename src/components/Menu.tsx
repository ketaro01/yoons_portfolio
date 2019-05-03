import React, { Component } from "react";
import "./Menu.scss";
export default class Menu extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      scroll: 0,
      top: 0,
      height: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({
      top: el ? el.offsetTop : 0,
      height: el ? el.offsetHeight : 0
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    // this.state.scroll > this.state.top
    //   ? (document.body.style.paddingTop = `${this.state.height}px`)
    //   : (document.body.style.paddingTop = "0");
  }

  handleOnClickMenu(name) {
    const el = document.querySelector(`.${name}`);
    const scrollTo = gNode => {
      if (!gNode) {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      const getElementPosition = node => {
        let offsetNode = node;
        let offsetTop = 0;
        while (offsetNode) {
          offsetTop += offsetNode.offsetTop;
          offsetNode = offsetNode.offsetParent;
        }
        return offsetTop;
      };

      const positionY = getElementPosition(gNode);

      window.scroll({ top: positionY - 100, left: 0, behavior: "smooth" });
    };
    scrollTo(el);
  }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li onClick={() => this.handleOnClickMenu("home")}>Home</li>
          <li onClick={() => this.handleOnClickMenu("about")}>About</li>
          <li onClick={() => this.handleOnClickMenu("skills")}>Skills</li>
          <li onClick={() => this.handleOnClickMenu("careers")}>Careers</li>
          <li
            onClick={() => {
              window.location.href =
                "mailto:ketaro01@naver.com?subject=Subject&body=message%20goes%20here";
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    );
  }
}
