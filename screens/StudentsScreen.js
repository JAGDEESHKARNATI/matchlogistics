import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getStudents } from '../api';

class StudentsScreen extends Component {
    state = {
        students: []
    };

    async componentDidMount() {
        var students = await getStudents();
        this.setState({students});
    }
    
    static navigationOptions = {
        title: 'Choose a Student',
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
            <View style={{flex:1, alignItems: 'center', backgroundColor: "rgb(240, 240, 240)"}}>
                {this.state.students.map((student) => 
                    <ListItem
                     leftAvatar={{
                         source: {uri: student.avatar_url}
                     }}
                     style={{ marginTop: 10, borderRadius:5, padding: 5, width: '90%', backgroundColor: "rgb(255, 255, 255)"}}
                     key={student.id}
                     title={student.name}
                     chevron
                     />
                )
                }
            </View>
        )
    }
}

export default StudentsScreen;