import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SectionList
} from 'react-native';
import axios from 'axios'


export default class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      statistics: {},
      male: [],
      female: [],
      picture:[],
      press: []
    };
  }
  componentWillMount() {
    axios.get('http://api.zhuishushenqi.com/cats/lv2/statistics').then(res => {
      this.setState({
        statistics: res.data,
        male: res.data.male,
        female: res.data.female,
        picture: res.data.picture,
        press: res.data.press
      })
    })
  }


  _renderItem = (info) => {
        var txt = 'index:' + info.index + '     ' + info.item.title;
        var bgColor = info.index % 2 == 0 ? 'red' : 'blue';
        return <Text
            style={{height:100,textAlignVertical:'center',backgroundColor:bgColor,color:'white',fontSize:15}}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = 'key:' + info.section.key;
        return <Text
            style={{height:50,textAlign:'center',textAlignVertical:'center',backgroundColor:'black',color:'white',fontSize:30}}>{txt}</Text>
    }

  render() {    
    var sections = [];
    for (var i = 0; i < 10; i++) {
        var datas = [];
        for (var j = 0; j < 10; j++) {
            datas.push({title: 'title:' + j});
        }
        sections.push({key: i, data: datas});
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!,{'\n'}
          Stack,{'\n'}
        </Text>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}/>
        <FlatList
          style={{width:'100%',flex:5,}}
          data = {this.state.male}
          renderItem ={({item}) =>
            <View style={{width:'33.33%',alignItems: 'center'}}>
              <Text style={{fontSize:25}}>{item.name}</Text>              
              <Text style={{fontSize:25}}>{item.bookCount}</Text>              
            </View>
          }
          onEndReachedThreshold={0.3}
          refreshing={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});