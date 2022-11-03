import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
    const [ username, setUsername ] = useState('');

    // const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSendPressed = ()=>{
       navigation.navigate('ConfirmEmail')
    }

    const onBackToSignInPressed = ()=>{
        navigation.navigate('SignIn')
    }
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                {/* <Image source={Logo} style={[ styles.logo, {height: height * 0.3 }]} resizeMode="contain"/> */}
                <Text style={styles.title}>Reset your password</Text>
                
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                

                <CustomButton 
                    onPress={onSendPressed} 
                    text={'Send'}
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
export default ForgotPasswordScreen
