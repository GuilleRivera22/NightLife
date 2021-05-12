import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Discotecas from "../screens/Discotecas";

const Stack = createStackNavigator();

export default function DiscotecasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "discotecas"
                component = {Discotecas}
                options = {{ title : "Discotecas"}}
            />
            

        </Stack.Navigator>
    )
}