import React from 'react';
import {Text, View, TextInput, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from './Styles/MainScreenStyle'

const MainScreen = () => {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>        
                    <Text style={styles.searchTitle}>Search an employee</Text>
                    <View style={styles.searchBox}>
                        <TextInput
                            style={{backgroundColor:'white', width: '50%'}}
                            placeholder="Employee name"
                        />
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default MainScreen;