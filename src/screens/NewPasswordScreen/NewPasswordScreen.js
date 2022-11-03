import { useState } from "react";
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput";


const NewPasswordScreen = () => {
    const [ code, setCode ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');

    // const { height } = useWindowDimensions();

    const onSubmitPressed = ()=>{
        console.log('Confirm Pressed')
    }

    const onBackToSignInPressed = ()=>{
        console.warn('Back to sign in pressed')
    }
    return ( 
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                {/* <Image source={Logo} style={[ styles.logo, {height: height * 0.3 }]} resizeMode="contain"/> */}
                <Text style={styles.title}>Reset your password</Text>
                
                <CustomInput 
                    placeholder="Code" 
                    value={code} 
                    setValue={setCode}
                />

                <CustomInput 
                    placeholder="Enter your new password" 
                    value={newPassword} 
                    setValue={setNewPassword}
                />
                

                <CustomButton 
                    onPress={onSubmitPressed} 
                    text={'Submit'}
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
export default NewPasswordScreen
