import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Link from '../components/Link';

const MyPortfolio = (props) => (
  <View style={{paddingTop: 20, alignItems: 'center'}}>
    <Text>This is MyPortfolio page</Text>
    <ActivityIndicator />
    <Link to="" navigation={props.navigation}>
      <Text>Back</Text>
    </Link>
  </View>
)

export default MyPortfolio;
