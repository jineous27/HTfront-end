import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import StatusScreen from "../screens/Status";
import MyprofileScreen from "../screens/Myprofile";
import { HT_COLOR, ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";
import TabBarIcon from "../Components/TabBarIcon";
import { createStack } from "./config";


const TabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: createStack(HomeScreen, "Home"), //방금 만든걸 이용. 첫번째 파라미터는 HOme scree, 두번째는 Home//
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
            screen: createStack(SearchScreen, "Search"),
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
            screen: createStack(StatusScreen, "Status"),
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
            screen: createStack(MyprofileScreen, "Myprofile"),
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