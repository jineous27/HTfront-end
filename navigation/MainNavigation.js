
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        Detail: { //모든 디테일화면에 header style을 입히겠다//Detail 넘어가는 화면/버튼을 만들어가보자//
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles
            }
        }
    },
    {}
);

export default createAppContainer(MainNavigation);
//Mainavigation을 감싸서 내보니기때문에, 큰틀은 createAppContainer고 이렇게 내보내야 인식이 된다//