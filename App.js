import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';
import Connection from './src/screens/Connection';
import Dating from './src/screens/Dating';
import DoubleDating from './src/screens/DoubleDating';
import ForgotPassword from './src/screens/ForgotPassword';
import Friends from './src/screens/Friends';
import FriendsWithFriends from './src/screens/FriendsWithFriends';
import FullProfile from './src/screens/FullProfile';
import Home from './src/screens/Home';
import InviteFriends from './src/screens/InviteFriends';
import Login from './src/screens/Login';
import MakeFriends from './src/screens/MakeFriends';
import Messages from './src/screens/Messages';
import Mirror from './src/screens/Mirror';
import MyConnections from './src/screens/MyConnections';
import Preferences from './src/screens/Preferences';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import SignUp from './src/screens/SignUp';
import SignUpAudio from './src/screens/SignUpAudio';
import SignUpImages from './src/screens/SignUpImages';
import SignUpPreferences from './src/screens/SignUpPreferences';
import SingleDating from './src/screens/SingleDating';


const Stack = createStackNavigator();
// const Stack = createSharedElementStackNavigator();

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const forTopToBottom = ({ current, closing }) => ({
  cardStyle: {
    transform: [
      {
        translateY: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [-Dimensions.get('screen').height, 0],
        }),
      },
    ],
  }
})

const forBottomToTop = ({ current, closing }) => ({
  cardStyle: {
    transform: [
      {
        translateY: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [Dimensions.get('screen').height, 0],
        }),
      },
    ],
  }
})

class App extends React.Component {

  render() {
    return (
      // <AppContainer />
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }} >
          <StatusBar backgroundColor={'#00000080'} translucent={true} barStyle={'light-content'} />

          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ cardStyleInterpolator: forFade }} />

            <Stack.Screen name="SignUp" component={SignUp} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="SignUpImages" component={SignUpImages} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="SignUpAudio" component={SignUpAudio} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="SignUpPreferences" component={SignUpPreferences} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />

            {/* <Stack.Screen name="Details" component={Details} /> */}
            <Stack.Screen name="Profile" component={Profile} options={{ cardStyleInterpolator: forTopToBottom }} />
            <Stack.Screen name="Preferences" component={Preferences} options={{ cardStyleInterpolator: forBottomToTop }} />
            <Stack.Screen name="FullProfile" component={FullProfile} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="Messages" component={Messages} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="Connection" component={Connection} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="MyConnections" component={MyConnections} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="Settings" component={Settings} options={{ cardStyleInterpolator: forFade }} />

            <Stack.Screen name="Home" component={Home} options={{ cardStyleInterpolator: forFade }} />

            <Stack.Screen name="Dating" component={Dating} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="SingleDating" component={SingleDating} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="DoubleDating" component={DoubleDating} options={{ cardStyleInterpolator: forFade }} />

            <Stack.Screen name="Friends" component={Friends} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="MakeFriends" component={MakeFriends} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="FriendsWithFriends" component={FriendsWithFriends} options={{ cardStyleInterpolator: forFade }} />
            <Stack.Screen name="InviteFriends" component={InviteFriends} options={{ cardStyleInterpolator: forFade }} />

            <Stack.Screen name="Mirror" component={Mirror} />


          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer >
    );
  }
}

export default App;