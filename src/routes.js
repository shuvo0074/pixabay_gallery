import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home'
import Library from './screens/Profile'
import Search from './screens/Search'
import Login from './screens/Login'
import ImageDetail from './screens/ImageDetail'

import { Provider } from "react-redux";
import store from "./store";

// three stacks under three tabs of app tab navigator
const HomeStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Home: { screen: Home, navigationOptions:{headerShown:false}  },
		ImageDetail: { screen: ImageDetail, navigationOptions:{headerShown:false}  }
	},
	options
);

const LibraryStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Search: { screen: Library, navigationOptions:{headerShown:false}  },
		ImageDetail: { screen: ImageDetail, navigationOptions:{headerShown:false}  }
	},
	options
);

const SearchStack = createCompatNavigatorFactory(createStackNavigator)(
	{
		Search: { screen: Search, navigationOptions:{headerShown:false}  },
		ImageDetail: { screen: ImageDetail, navigationOptions:{headerShown:false}  }
	},
	options
);

const Tab = createBottomTabNavigator();

// App Tab navigator
function HomeContainer() {
    return (
      <Tab.Navigator screenOptions={options} tabBarOptions={
        {
          activeTintColor:'red',
          activeBackgroundColor:'#bdc3c7',
          labelStyle:{
              fontSize:20,
              fontWeight:'bold',
              marginBottom:10 
            }
        }
      }
      >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Profile" component={LibraryStack}/>
          <Tab.Screen name="Search" component={SearchStack} />
        </Tab.Navigator>
    );
  }

// pass screen props to home navigator
function Home_Navigation({navigation}){
    return <HomeContainer screenProps={{ rootNavigation: navigation }} />
}

const appRoutes = {
    Home_Navigation: { screen: Home_Navigation, navigationOptions:{headerShown:false} }
};

const AppStack = createCompatNavigatorFactory(createStackNavigator)(appRoutes, options);

const options = {
  cardStyle: {
    backgroundColor: "#fff"
  },
  navigationOptions: {
    gesturesEnabled: true
  }
};

const AppNavigator = createSwitchNavigator(
    {
        AppStack,
        Login
    },
    {
      initialRouteName: "Login",
      headerMode: 'none'
    }
  )

export default function Routes(){
    return (
      <Provider store={store}>
        <NavigationContainer><AppNavigator/></NavigationContainer>
      </Provider>
    )
}