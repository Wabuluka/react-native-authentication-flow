import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
// import Logo from '../../../assets/images/Logo_1.png';a
import CustomInput from "../../components/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordRepeat, setPasswordRepeat ] = useState('');

    // const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onRegisterPressed = ()=>{
        navigation.navigate('SignIn')
    }

    const onSignInPressed = ()=>{
        navigation.navigate('SignIn')
    }

    const onTermsOfUsePressed = ()=>{
        console.warn('Terms of Use')
    }

    const onPrivacyPolicyPressed = ()=>{
        console.warn('Privacy Policy')
    }
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                {/* <Image source={Logo} style={[ styles.logo, {height: height * 0.3 }]} resizeMode="contain"/> */}
                <Text style={styles.title}>Create an account</Text>
                
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail}
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomInput 
                    placeholder="Repeat Password" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton 
                    onPress={onRegisterPressed} 
                    text={'Register'}
                />

                <Text style={ styles.text }>By registering, you confirm that you accept our 
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text> 
                </Text>

                <SocialSignInButtons/>

                <CustomButton 
                    onPress={onSignInPressed} 
                    text={"Have an account? Sign In"} 
                    type="TERTIARY"                
                />

            </View>
        </ScrollView>
     );
}

const styles = StyleSheet.create({
    root:{
        marginTop: 150,
        alignItems: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    link: {
        color: '#051C60'
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    }
})
export default SignUpScreen
