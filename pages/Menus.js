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
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10.5,
        id: 1,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 2,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 3,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 4,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 5,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 6,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://thekitchencommunity.org/wp-content/uploads/2021/11/Side-Dishes-for-Chicken-1200x900.jpg',
        hall: 'Lower',
        rating: 2,
        votes: 10,
        price: 10,
        id: 7,
    },
];

const DiningHallChip = (props) => {
    const [selected, setSelected] = useState(props.startSelcted);

    return(
        <Chip 
            title = {props.Name} 
            titleStyle={{fontSize:15, color: 'white',}}
            buttonStyle = {{borderWidth: 1, padding: 5,}}
            type = {selected ? 'solid' : 'outline'}
            onPress = {() =>{
                setSelected(!selected);
            }}
        />
    );
}

const renderFood = ({item}) => (
    <View
        style = {{
            backgroundColor: '#2d2d30',
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
                flexDirection: 'column',  
                backgroundColor: '#3e3e42', 
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
            <View
                style = {{
                    width: 200,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <AirbnbRating
                    size = {20} 
                    isDisabled = {true}
                    showRating = {false}
                    defaultRating = {item.rating}
                />
                <Text h4 h4Style = {{fontSize: 15,}}>({item.votes})</Text>
            </View>
            <View 
                style = {{
                    width: 200,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <Text h4>{item.hall}</Text>
                <Text h4>${item.price}</Text>
            </View>
            
            
        </View>
    </View>
)

const MenuItems = () => {

    return(
        <FlatList
            contentContainerStyle = {{height: 230}}
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
            <View style={{flex: 1, backgroundColor: theme.colors.darkBackground}}>
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
                {/*ADD USER FAVORITE ITEMS AVAILIBEL TODAY */}
                {/*
                <Divider/>
                
                <TopChoice
                    name = {'BC Burger'}
                    img = {'https://via.placeholder.com/200x100'}
                />
                
                <Divider/>
                */}
                <Text h2 h2Style = {{
                        color: 'white',
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
                        color: 'white',
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
                <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 70, backgroundColor: theme.colors.surface, borderRadius: 5, marginTop: 10,}}>
                    <Icon
                        name = "home"
                        size = {40}
                        type = "material"
                        containerStyle = {{marginRight: 70, marginBottom: 10}}
                    />
                    <Icon
                        name = "star"
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