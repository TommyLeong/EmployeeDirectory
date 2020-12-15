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

    const renderSubordinatesCard = ({ item }) => {
        return (
          <View style={styles.subordinatesCard}>
              <Text>{item}</Text>
          </View>
        );
      };

    const renderSubordinates = () => {
        if(subordinates.length > 0)
        return(
            <FlatList
                style={styles.flatlistDesign}
                renderItem={renderSubordinatesCard}
                data={subordinates}
                keyExtractor={(item) => item}
            />
        )

        return(<View><Text>No subordinates found</Text></View>)
    }
    
    return(
        <View style={styles.container}>
            <Text>Subordinates of employee {searchEmployee}:</Text>
            {renderSubordinates()}
        </View>
    )

}

export default ResultScreen;