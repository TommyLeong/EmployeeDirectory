import React, {useState} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Button
} from 'react-native'
import styles from './Styles/MainScreenStyle'


const MainScreen = ({navigation}) => {

    const [employeeName, setEmployeeName] = useState('')
    const [missingName, setMissingName] = useState(false)

    const exploreEmployee = () => {
        if(employeeName.trim().length < 1) return setMissingName(true)
        setMissingName(false)
        navigation.navigate('Result', {searchEmployee: employeeName});
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>        
                    <Text style={styles.searchTitle}>Search an employee</Text>
                    <View style={styles.searchBox}>
                        <TextInput
                            style={{
                                backgroundColor:'white',
                                width: '50%', 
                                borderColor: missingName ? 'red' : 'transparent',
                                borderWidth: 1
                            }}
                            placeholder="Employee name"
                            onChange={({nativeEvent})=>{
                                setEmployeeName(nativeEvent.text);
                            }}
                            onSubmitEditing={async() => { exploreEmployee(); }}
                        />
                        <Button 
                            title="Search"
                            onPress={()=>{ exploreEmployee(); }}
                        />
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default MainScreen;