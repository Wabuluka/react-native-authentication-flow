import { View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButtons = () => {

    const onSignInFacebook = ()=>{
        console.log('Sign In with Facebook')
    }

    const onSignInGoogle = ()=>{
        console.log('Sign In with Google')
    }

    const onSignInApple = ()=>{
        console.log('Sign In with Apple')
    }

    const onForgotPasswordPressed = ()=>{
        console.log('Forgot Password!')
    }
    
    return ( 
        <>
            <CustomButton 
                onPress={onSignInFacebook} 
                text={'Sign Up with Facebook'}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton 
                onPress={onSignInGoogle} 
                text={'Sign Up with Google'}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton 
                onPress={onSignInApple} 
                text={'Sign Up with Apple'}
                bgColor="#E3E3E3"
                fgColor="#363636"
            />
        </>
     );
}
 
export default SocialSignInButtons;