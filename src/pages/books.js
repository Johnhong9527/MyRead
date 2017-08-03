import React from 'react';
import {
  Text,
  View,
  Modal,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import axios from 'axios'
export default class BookStand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      chapterBody: '',
      chapterTitle: ''
    };
  }

  componentWillMount() {
    axios.get('http://chapterup.zhuishushenqi.com/chapter/http://read.shuhaha.com/Html/Book/0/122/4199572.shtml').then(res=>{
      // console.log(res.data.chapter.body.replace('↵','\n').split('\n'));
      // console.log(res.data.chapter.body.split('\n'))
      let chapterBody = res.data.chapter.body.replace('↵','\n').split('\n')
      for (let i in chapterBody) {
        chapterBody[i] = {
            name: '       ' + chapterBody[i],
            key: i
        }
      }
      this.setState({
        chapterBody: chapterBody,
        chapterTitle:res.data.chapter.title
      })
    })
  }

  render() {
    console.log(this.state.chapterBody)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.chapterTitle}</Text>
        <FlatList
          data={this.state.chapterBody}
          horizontal={false}
          numColumns={1}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <Text style={styles.textItem}>{item.name}</Text>}
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
    backgroundColor: '#dad9d4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    borderBottomWidth: 1
  },
  textItem: {
    color: '#000',
    margin: 5,
    fontSize: 20,
    lineHeight: 30
  }
});
