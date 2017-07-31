import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SectionList,
  TouchableOpacity
} from 'react-native';
import axios from 'axios'

const sections = new Array(4)
axios.get('http://api.zhuishushenqi.com/cats/lv2/statistics').then(res => {
  sections[0] = {key: '男生', data: res.data.male};
  sections[1] = {key: '女生', data: res.data.female};
  sections[2] = {key: '其他', data: res.data.picture}
  sections[3] = {key: '出版', data: res.data.press}
})
console.log(sections)

export default class Stack extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('http://api.zhuishushenqi.com/cats/lv2/statistics').then(res => {
      let statistics = []
      statistics.push({key: 0, data: res.data.male});
      statistics.push({key: 1, data: res.data.female});
      statistics.push({key: 2, data: res.data.picture});
      statistics.push({key: 3, data: res.data.press});
      this.setState({
        statistics: statistics,
        male: res.data.male,
        female: res.data.female,
        picture: res.data.picture,
        press: res.data.press
      })
    })
  }

  // _extraUniqueKey(item ,index){
  //   return "index"+index+item;
  // }
  readerItem = (item) => {
    return <View style={styles.text}><Text>{item.item.name}</Text><Text>{item.item.bookCount}</Text></View>
  }
  readerHeader = (headerItem) => {
    return <Text style={styles.header}>{headerItem.section.key}</Text>
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.navigatorStyle}> 发现 </Text>
        <View>
          <SectionList
            renderItem={this.readerItem}
            contentContainerStyle={styles.list}//设置cell的样式
            renderSectionHeader={this.readerHeader}
            showsVerticalScrollIndicator={false}
            sections={sections}
            // pageSize={4}  // 配置pageSize确认网格数量
            keyExtractor={(item) => item.name}
          />
        </View>
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
  navigatorStyle: {
    height: 35,
    paddingTop:5,
    color:'white',
    fontWeight: '600',
    fontSize:20,
    textAlign: 'center',
    backgroundColor: '#5180ff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  list: {
    // justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  text: {
    width:'33.33%',
    borderColor:'#ff8e45',
    borderWidth:1,
    margin:5
  },
  header: {
  }
});