import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
// import Logo from '../../../assets/images/Logo_1.png';a
import CustomInput from "../../components/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = ()=>{
        // Validate User
        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = ()=>{
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = ()=>{
        navigation.navigate('SignUp')
    }

    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                {/* <Image source={Logo} style={[ styles.logo, {height: height * 0.3 }]} resizeMode="contain"/> */}
                <Text>XanYu Pak - Sign In</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton 
                    onPress={onSignInPressed} 
                    text={'Sign In'}
                />

                <CustomButton 
                    onPress={onForgotPasswordPressed} 
                    text={'Forgot Password?'} 
                    type="TERTIARY"                
                />
                
                <SocialSignInButtons/>

                <CustomButton 
                    onPress={onSignUpPressed} 
                    text={"Don't have an account? Create One"} 
                    type="TERTIARY"                
                />

            </View>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    root:{
        marginTop: 200,
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
    }
})
export default SignInScreen
