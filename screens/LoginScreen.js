import React, { Component } from 'react';
import { 
    TextInput,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Button,
    AsyncStorage,
} from 'react-native';
import {LinearGradient} from 'expo';
import { Ionicons } from '@expo/vector-icons';
class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
    }

    buttonClickHandler = () => {
        
        if(this.state.username === 'teacher@gmail.com' && this.state.password === 'Indianic@123') {
            this.props.navigation.navigate('Main');
        }

        if(this.state.username === 'guardian@gmail.com' && this.state.password === 'Indianic@123') {
           this.props.navigation.navigate('MainG');
        }
        // await AsyncStorage.setItem('@IsTeacher', 'true');
        // this.props.navigation.navigate('Main');
    }
    
    render() {
        return (
            <View style={styles.container}>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 30, color: 'white'}}>
                        <Text style={{fontWeight: 'bold'}}>match</Text>logistics
                    </Text>

                    <Text style={{fontSize: 25, color: 'white', marginTop: 5}}>
                        Welcome Back!
                    </Text>
                </View>

                <View style={styles.card}>
                    <View>
                        <Text style={{color: "#bb3e83", marginBottom: 4}}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            label="Email"
                            placeholder="  abc@gmail.com"
                            value={this.state.username}
                            onChangeText = {(val) => this.setState({username: val})}
                        />
                    </View>
                    
                    <View>
                        <Text style={{color: "#bb3e83", marginBottom: 4}}>Password</Text>
                        <TextInput
                            secureTextEntry={true} 
                            style={styles.textInput}
                            label="Password"
                            placeholder="  ****"
                            value={this.state.password}
                            onChangeText = {(val) => this.setState({password: val})}
                        />
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 15}}>
                        <Text style={{color: '#523575'}}>Forgot Password?</Text>
                    </View>
                   <TouchableHighlight onPress = {this.buttonClickHandler}>
                   <LinearGradient 
                        colors = {["#bb3e83", "#523575"]}
                        start={{x: 1, y: 1}}
                        style={{borderRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Text
                         style={{color: 'white', fontWeight: 'bold'}}
                         
                        >SIGN IN</Text>
                        
                    </LinearGradient>
                    </TouchableHighlight> 
                    
                </View>
                <View style={{flex: 2.5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 15}}>
                
                <View style={{width: '90%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{width: "100%", alignItems: 'center'}}>
                            
                            <Text
                                style={{backgroundColor: 'rgb(43, 116, 200)', color: '#fff', fontWeight: 'bold', padding: 10}}
                                onPress={() => console.log("Facebook")}
                            
                            ><Ionicons name="logo-facebook" style={{fontSize: 30, marginTop: 5}} />
                            <Text style={{fontSize: 20}}>  Sign in With Facebook</Text>
                            </Text>
                 </View>

                 <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                    <View style={{width: "100%", alignItems: 'center', padding: 5, borderRadius: 5}}>
                            
                            <Text
                                style={{backgroundColor: 'rgb(219, 72, 64)', color: '#fff', fontWeight: 'bold', padding: 10}}
                                onPress={() => console.log("Gmail")}
                            
                            ><Ionicons name="ios-mail" style={{fontSize: 30, marginTop: 5}} />
                            <Text style={{fontSize: 20}}>  Sign in With Gmail</Text>
                            </Text>
                 </View>
                 </View>


                <View styles={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text>
                        Don't have an account?
                        <Text style={{color: '#523575'}}>Sign up</Text>
                    </Text>
                </View>
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#bb3e83',
    },
    card: {
        flex: 2,
        flexGrow: 2.7,
        width: "90%",
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: "5%"
    },
    textInput: {
        borderRadius: 5, 
        padding: 5,
        fontWeight: 'bold', 
        backgroundColor: 'rgb(245, 245, 245)', 
        marginBottom: 5
    }
});

export default LoginScreen;

/*
     <LinearGradient
                    colors = {["#bb3e83", "#523575", "#FFF", "#FFF"]}
                >
*/