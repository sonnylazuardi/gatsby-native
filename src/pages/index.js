import React from "react"
import { View, Text, ActivityIndicator } from "react-native"
import Link from '../components/Link';

const Index = (props) => (
  <View style={{paddingTop: 20, alignItems: 'center'}}>
    <Text>Another page testing update</Text>
    <ActivityIndicator />

    <Link to="About" navigation={props.navigation}>
      <Text>About</Text>
    </Link>

    <Link to="MyPortfolio" navigation={props.navigation}>
      <Text>Portfolio</Text>
    </Link>
  </View>
)

export default Index;
