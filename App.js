import React, { Component } from 'react';
import telaLogin from './pages/telaLogin'
import telaBusca from './pages/telaBusca'
import generoSports from './pages/generoSports'
import generoAventura from './pages/generoAventura'
import generoFantasia from './pages/generoFantasia'
import generoComedia from './pages/generoComedia'
import Description from './pages/Description'
import Cadastro from './pages/cadastro'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';



//export default createAppContainer(AppNavigator);







class NavigationDrawerStructure extends Component {

    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('./images/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}



const FirstActivity_StackNavigator = createStackNavigator(
    
    {
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: telaBusca,
        title: 'Busca',
        navigationOptions: ({ navigation }) => ({
            title: 'Buscar Anime',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: generoSports,
        navigationOptions: ({ navigation }) => ({
            title: 'Gênero: Esporte',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: generoAventura,
        navigationOptions: ({ navigation }) => ({
            title: 'Gênero: Aventura',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen4_StackNavigator = createStackNavigator({
  
    Fourth: {
        screen: generoFantasia,
        navigationOptions: ({ navigation }) => ({
            title: 'Gênero: Fantasia',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
            backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }
        ),
        
    },
    
});

const Screen5_StackNavigator = createStackNavigator({
  
    Fifith: {
        screen: generoComedia,
        navigationOptions: ({ navigation }) => ({
            title: 'Gênero: Comédia',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
            backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }
        ),
        
    },
    
});

const Screen6_StackNavigator = createStackNavigator({
  
    Sixth: {
        screen: telaLogin,
        navigationOptions: ({ navigation }) => ({
            title: 'Login',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
            backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }
        ),
        
    },
    
});



const Screen7_StackNavigator = createStackNavigator({
  
    Seventh: {
        screen: Description,
        navigationOptions: ({ navigation }) => ({
            title: 'Description',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
            backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }
        ),
        
    },
    
});

const Screen8_StackNavigator = createStackNavigator({
  
    Eighth: {
        screen: Cadastro,
        navigationOptions: ({ navigation }) => ({
            title: 'Cadastro',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
            backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }
        ),
        
    },
    
});




const DrawerNavigatorExample = createDrawerNavigator({

    Screen1: {
        //Title
        screen: Screen6_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Login',
        },
    },
    Screen2: {
        //Title
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Esportes',

        },
    },
    Screen3: {
        //Title
        screen: Screen3_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Aventura',

        },
    },
    Screen4: {
        //Title
        screen: Screen4_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Fantasia',

        },
    },
    Screen5: {
        //Title
        screen: Screen5_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Comedia',

        },
    },
    Screen6: {
        //Title
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Buscar',

        },
    },
    Screen7: {
        //Title
        screen: Screen7_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Description',

        },
    },

    Screen8: {
        //Title
        screen: Screen8_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Cadastro',

        },
    },

    


});



export default createAppContainer(DrawerNavigatorExample);