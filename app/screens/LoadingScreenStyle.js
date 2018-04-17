import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width/2;

export default EStyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '$primaryBlue',
            alignItems : 'center',
            justifyContent: 'space-evenly'
        },
        logoContainer: {
           
            flexGrow:1,
            alignItems : 'center',
            justifyContent: 'center'
            
        },
        formContainer :{
           flex:2,
           marginBottom: 0
        },
        imageContainer : {
            alignItems: 'center',
            justifyContent: 'center',
            height:50,
            width:50
        },
        text: {
            
            fontWeight: '600',
            fontSize: 28,
            letterSpacing:-0.5,
            color: '$white',
            marginTop:15,

        }
    }
)