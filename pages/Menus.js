import React, {useState, useEffect} from 'react';
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
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
    },
    {
        name: "Chicken & 2 Sides",
        img: 'https://via.placeholder.com/80',
        hall: 'lower',
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

const MenuItem = ({item}) => {
    return(
        <Card>
            <Card.Title>{item.name}</Card.Title>
            <Card.Divider/>
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Image
                    source = {{uri : item.img}}
                    PlaceholderContent = {<Skeleton animation = "pulse" width={80} height={80}/>}
                />
                <Text h4>Dining Hall: {item.hall}</Text>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        type = 'outline'
                        icon = {{
                            name: 'keyboard-arrow-up',
                            size: 20,
                            color: 'black',
                        }}
                    />
                    <Text h4>0</Text>
                    <Button
                        type = 'outline'
                        icon = {{
                            name: 'keyboard-arrow-down',
                            size: 20,
                            color: 'black',
                        }}
                    />
                </View>
            </View>
        </Card>
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
                <View style={{flex: 1}}>
                    <FlatList
                        data = {DATA}
                        renderItem = {MenuItem}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

export default MainPage;