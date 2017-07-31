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
  _renderItem = ({ item}) => (

    <View  style={styles.list}>
      {
        item.map((item, i) => this.renderExpenseItem(item, i))
      }
    </View>

  );
  readerItem = (item) => (
     <View style={styles.list}>
       {
         item.section.data.map((i)=>{
           this._readerList(i)
         })
       }
    </View>
  )
  // item.section.data
  _readerList = (item) => {
    console.log(item)
    return <TouchableOpacity key={item.bookCount} onPress={() => this._pressRow(item)} underlayColor="transparent">
      <View style={styles.row}>
        <Text>{item.name}</Text>
        <Text>{item.bookCount}</Text>
      </View>
    </TouchableOpacity>
  }
  readerHeader = (headerItem) => {
    return <View style={{height: 25, borderBottomWidth: 1, borderColor: '#d3d3d3', margin: 10, paddingBottom: 5}}>
      <Text style={styles.sectionHeader}>{headerItem.section.key}</Text>
    </View>
  }

  _pressRow(item) {
    console.log(item)
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.navigatorStyle}> 发现 </Text>
        <View style={{ flex: 1, backgroundColor: '#F7F6F8' }}>
          <SectionList
            contentInset={{top:0,left:0,bottom:49,right:0}}
            renderItem={this.readerItem}
            renderSectionHeader={this.readerHeader}
            showsVerticalScrollIndicator={false}
            sections={sections}
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
    // width: '100%',
    marginBottom: 5,
    height: 50,
    color: 'white',
    backgroundColor: '#ff3b0f',
    flexDirection: 'row',//设置横向布局
    flexWrap: 'wrap',  //设置换行显示
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
    width:'100%',
    textAlign: 'left',
    fontSize: 12,
    color: '#787878'
  },
  row: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: (ScreenWidth - 1) / 4,
    height: (ScreenWidth - 1) / 4,
    alignItems: 'center',
  }
});