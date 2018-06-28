import React from "react";
import GatsbyLink from "gatsby-link";

class Link extends React.Component {
  render() {
    return (
      <GatsbyLink {...this.props}>
        {this.props.children}
      </GatsbyLink>
    )
  }
}

export default Link;
