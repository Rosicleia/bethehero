import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';


export default function Routes() {
    return (
        /*Sempre vai por volta de todas as rotas
          <AppStack.Navigator>: Componente que vem por volta das rotas
          AppStack.Screen: Vamos colocar para cada uma das rotas que colocarmos
          screenOptions={{ headerShown: false }: Desabilita o titulo no cabeçalho da pagina*/
        <NavigationContainer>   
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Detail}/>

            </AppStack.Navigator>

        </NavigationContainer>
    );

}