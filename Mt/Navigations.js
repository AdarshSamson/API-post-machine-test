import React from "react";
import Mainpage from "./Mainpage";
import Loginmain from "./Loginmain";
import Registration from "./Registration";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack= createStackNavigator();

const Navigations = () => {
return (
    <NavigationContainer>
      <Stack.Navigator>
       
            <Stack.Screen
              name="Loginmain"
              component={Loginmain}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{headerShown: false}}
            />
             <Stack.Screen
              name="Mainpage"
              component={Mainpage}
              options={{headerShown: false}}
            />
         
       
      </Stack.Navigator>
    </NavigationContainer>
  );
        }

        export default Navigations;