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
            type = {selected ? 'solid' : 'outline'}
            onPress = {() =>{
                setSelected(!selected);
            }}
        />
    );
}

const TopChoice = (props) => {

    return(
        <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text h2 style = {{marginVertical: 5}}>Today's Top Choice: {props.name}</Text>
            <Divider style = {{width: '100%', borderRadius: 5}} inset = {true} insetType = 'middle'/>
            <View style = {{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Image
                    source = {{uri : props.img}}
                    containerStyle = {{borderRadius: 10,}}
                    PlaceholderContent = {<Skeleton LinearGradientComponent={LinearGradient} animation = "pulse" width={100} height={100}/>}
                />
                <Text h4>Votes: 10</Text>
            </View>
        </View>
    ); 
}

const MenuItems = () => {

    const renderFood = ({item}) => (
        <View style = {{height: 200, backgroundColor: BCRed, borderRadius: 15, overflow: 'hidden', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 10, marginHorizontal: 5,}}>
            <Text h3 h3Style = {{borderRadius: 15, paddingVertical: 5, paddingHorizontal: 5,}}>{item.name}</Text>
            <Image
                source = {{uri: item.img}}
                containerStyle = {{borderRadius: 15}}
            />
            <View style = {{width: 200, marginVertical: 8, flexDirection: 'row',  backgroundColor: 'white', overflow: 'hidden', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 15, paddingVertical: 5, paddingHorizontal: 5, }}>
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
            <View style={{flex: 1}}>
                <View>
                    <Header
                        leftComponent= {<Icon name = 'menu'/>}
                        centerComponent = {<Text h3>BC-Bites</Text>}
                    />
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <DiningHallChip Name = {"Lower"} startSelcted/>
                    <DiningHallChip Name = {"Carney's"}/>
                    <DiningHallChip Name = {"Stuart"}/>
                </View>
                <Divider/>
                <Button
                    title={'Rate Your Meal'}
                    size={'md'}
                    titleStyle={{fontSize:25}}
                    
                />    
                {/*
                <Divider/>
                
                <TopChoice
                    name = {'BC Burger'}
                    img = {'https://via.placeholder.com/200x100'}
                />
                
                <Divider/>
                */}
                <Text h2 h2Style = {{marginHorizontal: 10, marginTop: 10}}>Popular</Text>
                <MenuItems/>
                <Text h2 h2Style = {{marginHorizontal: 10, marginTop: 10}}>Cheapest</Text>
                <MenuItems/>
            </View>
        </SafeAreaProvider>
    );
}

export default MainPage;