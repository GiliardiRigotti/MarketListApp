import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ManageLists from './screens/ManageLists';
import CreateList from './screens/CreateList';
import List from './screens/List';
import AddItemList from './screens/AddItemList';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ManageList" component={ManageLists} />
                <Stack.Screen name="CreateList" component={CreateList} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="AddItemList" component={AddItemList} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}