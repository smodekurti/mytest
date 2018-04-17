import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width/2;

export default EStyleSheet.create(
    {
        $largeContainerSize : imageWidth,
        $largeImageSize :  imageWidth/1.2,
        $smallContainerSize : imageWidth/2,
        $smallImageSize : imageWidth/3,

        container: {
            
            alignItems: 'center',
            //paddingBottom:30
         },
        containerImages: {
            
            alignItems: 'center',
            justifyContent: 'center',
            width: '$largeContainerSize',
            height: '$largeContainerSize',
        },
        image:{
            opacity: 0.9,
            backgroundColor: 'rgba(0,0,0,0)',
            width:'$largeImageSize',
            tintColor: '$primaryBlue',
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