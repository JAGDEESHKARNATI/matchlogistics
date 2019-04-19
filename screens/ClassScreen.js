import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getClasses } from '../api';

class ClassScreen extends Component {

    state = {
        classes: []
    };

    async componentDidMount() {
        const classes = await getClasses();
        this.setState({classes});
    }
    static navigationOptions = {
        title: 'Choose a Class',
        headerStyle: {
            backgroundColor: "rgb(191, 68, 57)"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    }
    render() {
        return(
            <View>
                {this.state.classes.map((val) => 
                    <ListItem
                        key={val.id}
                        title={`Class: ${val.class}`}
                        chevron
                    />
                )}
            </View>
        )
    }
}

export default ClassScreen;