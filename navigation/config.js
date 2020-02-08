//Navigation header에 입혀질 스타일링을 맞춰준다//
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, HT_COLOR } from "../constants/Colors";

//header는 상단바를 뜻함. //
export const headerStyles = {
    headerStyle: {
        backgroundColor: HT_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: BG_COLOR
    },
    headerTintColor: BG_COLOR //선택되었을 때 색//
};

//화면이동하고 나오는 스타일을 다 입히는 부분, CreateSteak 안에 screen이라는 옵션을 널 수 있게 정한것. 공식문서에//
export const createStack = (screen, title) =>
    createStackNavigator({
        Screen: {
            screen,
            navigationOptions: {//정해진 곳에 위의 스타일이 입혀질거다//
                title, 
                ...headerStyles
            }
        }
    });