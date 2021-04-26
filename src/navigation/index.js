import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tab from "./Tab";

export default (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#0066CC"
            translucent={false}
            networkActivityIndicatorVisible={true}
        />
        <NavigationContainer>
            <Tab  />
        </NavigationContainer>
    </SafeAreaView>
);
