import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'lightgray',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    searchTitle:{
        fontSize: 18
    }, 

    searchBox:{
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        flexDirection:'row',
    }

})

export default styles;