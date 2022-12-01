import React, {useState, useEffect, useCallback} from 'react';
import { Text, Skeleton, Image, Header, Icon, Chip, Divider, useTheme, Card, Button } from '@rneui/themed';
import { View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'

const DATA = [
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 1,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 2,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 3,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 4,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 5,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
        id: 6,
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
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
            <Divider style = {{width: '80%', borderRadius: 5}} inset = {true} insetType = 'middle'/>
            <View style = {{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Image
                    source = {{uri : props.img}}
                    PlaceholderContent = {<Skeleton LinearGradientComponent={LinearGradient} animation = "pulse" width={80} height={80}/>}
                />
                <Text h4>Votes: 10</Text>
            </View>
        </View>
    ); 
}

const MenuItems = () => {

    const [upPressed, setUpPressed] = useState([]);
    const [downPressed, setDownPressed] = useState([]);

    const renderCard = ({item}) => (
        <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider/>
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Image
                    source = {{uri : item.img}}
                    PlaceholderContent = {<Skeleton LinearGradientComponent={LinearGradient} animation = "wave" width={80} height={80}/>}
                />
                <Text h4>Dining Hall: {item.hall}</Text>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        type = {upPressed.includes(item.id) ? 'solid' : 'outline'}
                        icon = {{
                            name: 'keyboard-arrow-up',
                            size: 20,
                            color: 'black',
                        }}
                        onPress = {() => {
                            let isPressed = upPressed.includes(item.id);
                            if (isPressed) {
                                setUpPressed(upPressed.filter((id) => id !== item.id));
                            }else{
                                setUpPressed([item.id, ...upPressed]);
                            }
                            setDownPressed(downPressed.filter((id) => id !== item.id));
                        }}
                    />
                    <Text h4>0</Text>
                    <Button
                        type = {downPressed.includes(item.id) ? 'solid' : 'outline'}
                        icon = {{
                            name: 'keyboard-arrow-down',
                            size: 20,
                            color: 'black',
                        }}
                        onPress = {() => {
                            let isPressed = downPressed.includes(item.id);
                            if (isPressed) {
                                setDownPressed(downPressed.filter((id) => id !== item.id));
                            }else{
                                setDownPressed([item.id, ...downPressed]);
                            }
                            setUpPressed(upPressed.filter((id) => id !== item.id));
                        }}
                    />
                </View>
            </View>
        </Card>
    )

    return(
        <FlatList
            data = {DATA}
            renderItem = {renderCard}
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
                <TopChoice
                    name = {'BC Burger'}
                    img = {'https://via.placeholder.com/80'}
                />
                <Divider/>
                <View style = {{flex: 1}}>
                    <MenuItems/>
                </View> 
            </View>
        </SafeAreaProvider>
    );
}

export default MainPage;