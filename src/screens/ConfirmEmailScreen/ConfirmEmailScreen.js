import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
// import Logo from '../../../assets/images/Logo_1.png';a
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
    const [ code, setCode ] = useState('');

    // const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onConfirmPressed = ()=>{
        navigation.navigate('ConfirmPassword')
    }

    const onResendCodePressed = ()=>{
        console.warn('Resend Pressed')
    }

    const onBackToSignInPressed = ()=>{
        console.warn('Back to sign in pressed')
    }
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                {/* <Image source={Logo} style={[ styles.logo, {height: height * 0.3 }]} resizeMode="contain"/> */}
                <Text style={styles.title}>Confirm your email</Text>
                
                <CustomInput 
                    placeholder="Enter your Confirmation Code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomButton 
                    onPress={onConfirmPressed} 
                    text={'Confirm'}
                />

                <CustomButton 
                    onPress={onResendCodePressed} 
                    text={"Resend Code"} 
                    type="SECONDARY"                
                />

                <CustomButton 
                    onPress={onBackToSignInPressed} 
                    text={"Back to Sign in"} 
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
export default ConfirmEmailScreen
