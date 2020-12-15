import React, {useState, useRef} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import styles from './Styles/MainScreenStyle'


const MainScreen = ({navigation}) => {

    const [employeeName, setEmployeeName] = useState('')
    const [missingName, setMissingName] = useState(false)
    const searchEmpRef = useRef(null);

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
                            onSubmitEditing={async() => {
                                if(employeeName.trim().length < 1) return setMissingName(true)
                                setMissingName(false)
                                navigation.navigate('Result', {searchEmployee: employeeName});
                            }}
                        />
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default MainScreen;