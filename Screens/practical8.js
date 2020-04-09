const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }) {
    // console.log(navigation)
    nav = navigation
    // console.log(nav)
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Chat1"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Screen 1') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Screen 2') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={24} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'grey',
                    indicatorStyle: {
                        backgroundColor: 'red'
                    },
                    showIcon: true,
                    style: {
                        backgroundColor: '#f2f2f2'
                    }
                }}
            >
                <Tab.Screen name="Screen 1" component={SingleChatView} nav={navigation} />
                <Tab.Screen name="Screen 2" component={GroupChatView} nav={navigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}