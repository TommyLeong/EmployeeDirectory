import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native'
import styles from './Styles/ResultScreenStyle'
import * as ApiManager from '../Services/ApiManager';

const ResultScreen = (props) => {
    const {searchEmployee} = props.route.params
    const [subordinates, setSubordinates] = useState([]);

    const getUsers = async () => {
        const result = await ApiManager.getEmployeeSubordinates(searchEmployee, true)
        setSubordinates(result)
    }

    useEffect(()=>{
        getUsers();
    },[])

    const renderSubordinates = ({ item }) => {
        return (
          <View style={styles.subordinatesCard}>
              <Text>{item}</Text>
          </View>
        );
      };
    
    return(
        <View style={styles.container}>
            <Text>Subordinates of {searchEmployee} are as below:</Text>
            <FlatList
                style={styles.flatlistDesign}
                renderItem={renderSubordinates}
                data={subordinates}
                keyExtractor={(item) => item}
            />
            
        </View>
    )

}

export default ResultScreen;