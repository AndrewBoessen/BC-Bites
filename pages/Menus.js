import React, {useState, useEffect, useCallback} from 'react';
import { Text, Skeleton, Image, Header, Icon, Chip, Divider, useTheme, Card, Button, AirbnbRating } from '@rneui/themed';
import { View, FlatList, ImageEditor } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'

const BCRed = '#8a100b';
const BCGold = '#b29d6c';

const DATA = [
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10.5,
        id: 1,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 2,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 3,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 4,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 5,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 6,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'lower',
        rating: 2,
        price: 10,
        id: 7,
    },
];

const DiningHallChip = (props) => {
    const [selected, setSelected] = useState(props.startSelcted);

    return(
        <Chip 
            title = {props.Name} 
            titleStyle={{fontSize:15}}
            type = {selected ? 'solid' : 'outline'}
            onPress = {() =>{
                setSelected(!selected);
            }}
        />
    );
}

const MenuItems = () => {

    const renderFood = ({item}) => (
        <View
            style = {{
                backgroundColor: BCRed, 
                borderRadius: 15, 
                flexDirection: 'column', 
                justifyContent: 'space-evenly', 
                alignItems: 'center', 
                marginVertical: 10, 
                marginHorizontal: 5,
                shadowColor: "#000",
                shadowOffset: {
                	width: 0,
                	height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}
        >
            <Text h3 h3Style = {{borderRadius: 15, paddingVertical: 5, paddingHorizontal: 5,}}>{item.name}</Text>
            <Image
                source = {{uri: item.img}}
                containerStyle = {{borderRadius: 15,}}
            />
            <View 
                style = {{
                    width: 200, 
                    marginVertical: 8, 
                    flexDirection: 'row',  
                    backgroundColor: 'white', 
                    justifyContent: 'space-evenly', 
                    alignItems: 'center', 
                    borderRadius: 15, 
                    paddingVertical: 5, 
                    paddingHorizontal: 5, 
                    shadowColor: "#000",
                    shadowOffset: {
                    	width: 0,
                    	height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}
            >
                <AirbnbRating
                    size = {18} 
                    isDisabled = {true}
                    showRating = {false}
                    defaultRating = {item.rating}
                />
                <Text h3 h3Style = {{color: 'black'}}>${item.price}</Text>
            </View>
        </View>
    )

    return(
        <FlatList
            contentContainerStyle = {{height: 220}}
            horizontal = {true}
            data = {DATA}
            renderItem = {renderFood}
        />
    );
    
}

const MainPage = (props) => {
    const {theme, updateTheme} = useTheme();

    return(
        <SafeAreaProvider>
            <View style={{flex: 1, backgroundColor: theme.colors.background}}>
                <View>
                    <Header
                        leftComponent= {<Icon name = 'tune' type = 'material'/>}
                        leftContainerStyle = {{justifyContent: 'center'}}

                        centerComponent = {<Text h2 h2Style = {{color: 'white'}}>BC-Bites</Text>}
                        centerContainerStyle = {{justifyContent: 'center'}}

                        rightComponent= {<Icon name = 'settings' type = 'material'/>}
                        rightContainerStyle = {{justifyContent: 'center'}}
                    />
                </View>
                <View 
                    style = {{
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}
                >
                    <DiningHallChip Name = {"Lower"} startSelcted/>
                    <DiningHallChip Name = {"Carney's"}/>
                    <DiningHallChip Name = {"Stuart"}/>
                </View>
                <Divider/>
                <Button
                    title={'Rate Your Meal'}
                    size={'md'}
                    titleStyle={{fontSize:25}}
                    raised={true}
                    icon = {
                        <Icon
                            name = "food"
                            size = {28}
                            type = "material-community"
                            containerStyle = {{marginRight: 10}}
                        />
                    }
                    
                />
                {/*
                <Divider/>
                
                <TopChoice
                    name = {'BC Burger'}
                    img = {'https://via.placeholder.com/200x100'}
                />
                
                <Divider/>
                */}
                <Text h2 h2Style = {{
                        marginHorizontal: 10, 
                        marginTop: 10, 
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>Popular</Text>
                <MenuItems/>
                <Text h2 h2Style = {{
                        marginHorizontal: 10, 
                        marginTop: 10, 
                        shadowColor: "#000",
                        shadowOffset: {
                        	width: 0,
                        	height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,}}>Cheapest</Text>
                <MenuItems/>
                <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 70, backgroundColor: '#b7b3a5', marginTop: 30, borderRadius: 5}}>
                    <Icon
                        name = "home"
                        size = {40}
                        type = "material"
                        containerStyle = {{marginRight: 70, marginBottom: 10}}
                    />
                    <Icon
                        name = "notifications"
                        size = {40}
                        type = "material"
                        containerStyle = {{marginLeft: 70, marginBottom: 10}}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

export default MainPage;