import React from 'react'
import { View } from 'react-native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

enum Route {
  Home = 'HOME',
  Hello = 'HELLO',
  World = 'WORLD',
}

type ParamList = {
  [Route.Home]: undefined
  [Route.Hello]: undefined
  [Route.World]: undefined
}

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>()
  return <View />
}

const HelloScreen = () => {
  return <View />
}

const WorldScreeen = () => {
  return <View />
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Route.Home} component={HomeScreen} />
        <Stack.Screen name={Route.Hello} component={HelloScreen} />
        <Stack.Screen name={Route.World} component={WorldScreeen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
