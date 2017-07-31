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
import Dimensions from 'Dimensions'

const sections = new Array(4)
axios.get('http://api.zhuishushenqi.com/cats/lv2/statistics').then(res => {
  sections[0] = {key: '男生', data: res.data.male};
  sections[1] = {key: '女生', data: res.data.female};
  sections[2] = {key: '其他', data: res.data.picture}
  sections[3] = {key: '出版', data: res.data.press}
})
console.log(sections)

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

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
  readerItem = (item) => (
    <View  style={styles.list}>
      <TouchableOpacity onPress={() => this._pressRow(item)}>
        <View style={styles.row}>
          <Text>{item.item.name}</Text>
          <Text>{item.item.bookCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
  /*
      <TouchableOpacity onPress={() => this._pressRow(item)}>
        <View style={styles.row}>
          <Text>{item.item.name}</Text>
        </View>
      </TouchableOpacity>

  * */

  readerHeader = (headerItem) => {
    return <View style={{ height: 25 }}>
      <Text style={styles.sectionHeader} >{headerItem.section.key}</Text>
    </View>
  }
  _pressRow (item) {
    console.log(item)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={styles.navigatorStyle}> 发现 </Text>
        <View>
          <SectionList
            renderItem={this.readerItem}
            // contentContainerStyle={styles.list}//设置cell的样式
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
    // width: '100%',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  text: {
    width: 100,
    alignItems: 'center',
    borderWidth:1,
    margin: 5,
    padding:5
  },
  sectionHeader: {
    marginLeft: 10,
    padding: 6.5,
    // width:'100%',
    textAlign: 'left',
    fontSize: 12,
    color: '#787878'
  },
  row: {
    width: 100,
    alignItems: 'center',
    borderWidth:1,
    margin: 5,
    padding:5
  }
});