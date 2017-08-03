import React from 'react';
import {
  Text,
  View,
  Image,
  SectionList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import Dimensions from 'Dimensions';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

let gender = []
axios.get('http://api.zhuishushenqi.com/ranking/gender').then(res => {
  gender = [
    {
      key: '男生',
      data: res.data.male
    },
    {
      key: '女生',
      data: res.data.female
    }
  ]
})
export default class City extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rankingGender: {}
    }
  }
  componentDidMount() {
    axios.get('http://api.zhuishushenqi.com/ranking/gender').then(res => {
      this.setState({})
    })
  }
  readerHeader = (headerItem) => {
    return <View style={styles.sectionHeaderItem}>
    <Text style={styles.sectionHeader}>{headerItem.section.key}</Text>
    </View>
  }
  readerItem = ({item}) => {
    console.log(item)
    return <View style={styles.readerCenter}>
      <TouchableOpacity onPress={() => this._pressRow(item)} underlayColor="transparent">
        <Text style={styles.readerTitle}><Image style={{width: 25, height: 25,marginRight: 15}}
          source={{uri: 'http://statics.zhuishushenqi.com/'+item.cover}}/>{item.title}</Text></TouchableOpacity>
    </View>
  }
  _pressRow (item) {
    console.log(item)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.navigatorStyle}>排行榜</Text>
        <SectionList
          sections={gender}
          renderItem={this.readerItem}
          renderSectionHeader={this.readerHeader}
          keyExtractor={(item) => item._id}
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
  navigatorStyle: {
    width: '100%',
    height: 35,
    paddingTop:5,
    color:'white',
    fontWeight: '600',
    fontSize:20,
    textAlign: 'center',
    backgroundColor: '#5180ff',
  },
  sectionHeaderItem: {
    width:ScreenWidth,
    height: 25,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: '#f9f0f0',
    marginBottom: 10
  },
  sectionHeader: {
    marginLeft: 10,
    // padding: 6.5,
    width:'100%',
    height: 25,
    lineHeight: 25,
    textAlign: 'left',
    fontSize: 15,
    color: '#787878'
  },
  readerTitle: {
    paddingTop: 5,
    paddingBottom:5
  },
  readerCenter: {
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    padding: 5,
  }
});
