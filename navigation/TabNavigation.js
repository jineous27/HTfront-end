import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import StatusScreen from "../screens/Status";
import MyprofileScreen from "../screens/Myprofile";
import { HT_COLOR, ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";
import TabBarIcon from "../Components/TabBarIcon";


const TabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                    />
                )
            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    />
                )
            }
        },
        Status: {
            screen: StatusScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
                    />
                )
            }
        },
        Myprofile: {
            screen: MyprofileScreen,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                    />
                )
            }
        },

    },
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: HT_COLOR
            }
        }
    }
);


export default createAppContainer(TabNavigation);