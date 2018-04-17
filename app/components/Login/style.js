
import { StyleSheet , Dimensions} from 'react-native';

const style = StyleSheet.create({
    container:{
       padding: 20,
       
    },

    input:{
        height: 50,
        fontSize:18,
        color: '#FFF',
        marginBottom:10,
        paddingHorizontal : 10,
        backgroundColor: '#16a085',
        borderRadius : 3
    },
    loginButtonContainer:{
        backgroundColor:'#5352ed',
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom:5
    },
    signUpButtonContainer:{
        backgroundColor:'#5352ed',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom:5
    },
    socialLogin:{
        margin: 1,
        paddingVertical: 12,
        borderRadius:5,
        marginBottom:5,
        
    },
    button:{
        
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize:16,
    },
    registrationContainer :{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical : 10
    },
    registrationButtons:{
        fontSize : 30,
        color: 'white'
    }

})

export default style;