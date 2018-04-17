import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet , Dimensions} from 'react-native';

export default EStyleSheet.create(
    {
    container:{
       padding: 20,
       
    },

    input:{
        height: 50,
        fontSize:18,
        color: '#FFF',
        marginBottom:10,
        paddingHorizontal : 10,
        backgroundColor: '$textBackground',
        borderRadius : 3
    },
    loginButtonContainer:{
        
        backgroundColor:'$darkButton',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom:5
    },
    signUpButtonContainer:{
        backgroundColor:'$darkButton',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom:5
    },
    socialLogin:{
        margin: .0000000000001,
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
        color: '$white'
    }

})

