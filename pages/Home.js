import React from 'react';
import { Text, Skeleton, Image } from '@rneui/themed';
import { View, StyleSheet} from 'react-native';

const HomePage = () => {
    bc_seal = require('../assets/bcseal_1in_gold.png');
    return(
        <View style = {styles.contianer}>
            <Text style ={styles.title}>BC-Bites</Text>
            <Image
                style = {styles.logo}
                source = {bc_seal}
                PlaceholderContent = {<Skeleton animation="wave" width={80} height={80} circle={true}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contianer:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
    },
    logo : {
        width : 80,
        height : 80,
    }
});

export default HomePage;