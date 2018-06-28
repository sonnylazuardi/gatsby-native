import React from "react";
import {TouchableOpacity} from "react-native";
import {StackActions} from 'react-navigation';

class Link extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
        if (!this.props.to) {
          this.props.navigation.dispatch(StackActions.popToTop());
        } else {
          this.props.navigation.navigate(this.props.to);
        }
      }}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

export default Link;
