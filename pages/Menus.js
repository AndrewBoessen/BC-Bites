import React, {useState, useEffect} from 'react';
import { Text, Skeleton, Image, Header, Icon, Chip, Divider, useTheme, Card } from '@rneui/themed';
import { View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'

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

const MenuItem = (props) => {
    return(
        <Card>
            <Card.Title>{props.name}</Card.Title>
            <Card.Divider/>
            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Image
                    source = {{uri : props.img}}
                    PlaceholderContent = {<Skeleton animation = "pulse" width={80} height={80}/>}
                />
                <Text h4>Dining Hall: {props.hall}</Text>
            </View>
        </Card>
    );
}

const MainPage = (props) => {
    const {theme, updateTheme} = useTheme();
    return(
        <SafeAreaProvider>
            <View>
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
                <ScrollView>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                    <MenuItem name = {"Chicken & 2 Sides"} img = {"https://via.placeholder.com/80"} hall = {"lower"}/>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

export default MainPage;