import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import StatusScreen from "../screens/Status";
import MyprofileScreen from "../screens/Myprofile";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Search: SearchScreen,
        Status: StatusScreen,
        Myprofile: MyprofileScreen,
    },
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);