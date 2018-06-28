import React from "react"
import { View, Text, ActivityIndicator } from "react-native"

const About = () => (
  <View style={{paddingTop: 20, alignItems: 'center'}}>
    <Text>This is about page</Text>
    <ActivityIndicator />
  </View>
)

export default About;
