import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState}from 'react'
import { auth } from '../firebase'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry     // Password, input looks like "*****""
            />
        </View>

        <View style={styles.buttonContainer}>
            {/*Login button */}
            <TouchableOpacity   //Button press, opacity option
                onPress={() =>{} }
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/*Register button */}
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',   // backgroundColor of text area
        paddingHorizontal: 15,  // empty space left/right of text
        paddingVertical: 10,    // empty space above/below text
        borderRadius: 10,   // Round corners
        marginTop: 5,       // space button 'Login' 'Register
    },
    buttonContainer: {
        width: '60%',           // shrink a bit
        justifyContent: 'center',
        alignItems: 'center',      // center buttons on screen
        marginTop: 40,      // space button 'Login' 'Register' from text input
    },
    button: {   // Button containers
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {    // Register button 
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {      // Login text
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {    // Register text
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    
})