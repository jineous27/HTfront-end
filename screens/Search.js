import React from "react";
import { Text, TouchableOpacity } from "react-native"; //TouchableOpacity는 버튼 같은거, 눌르면 어디로 가는거//


export default ({ navigation }) => ( //네비게이션이라는 파라미터 던저 줌. 네비게이션을 태운다. 이 디테일 버튼을 눌렀을 때 네비게이션까지 같이 테운다. 네비게이션 안에 화면이 움직인다는 뜻//
    //Onpress라는 함수가 내장되있다. 터치볼 오페시티안에,, 따로 파라미터 값없고 옆에꺼 실행, 디테일로 네비게이션을 태우겠다//
    <> 
        <Text>Search</Text>
        <TouchableOpacity onPress={() =>  navigation.navigate("Detail")}>
            <Text>Go to Search Detail</Text>
        </TouchableOpacity>
    </>
);