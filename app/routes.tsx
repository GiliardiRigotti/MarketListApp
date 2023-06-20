import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ManageLists from './screens/ManageLists';
import CreateList from './screens/CreateList';
import AddItemList from './screens/AddItemList';
import ListItems from './screens/ListItems';
import { List } from './models/List';
import { Realm } from '@realm/react';
import EditItemList from './screens/EditItemList';



const Stack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ManageLists" component={ManageLists} />
                <Stack.Screen name="CreateList" component={CreateList} />
                <Stack.Screen name="ListItems" component={ListItems} />
                <Stack.Screen name="AddItem" component={AddItemList} />
                <Stack.Screen name="EditItem" component={EditItemList} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}