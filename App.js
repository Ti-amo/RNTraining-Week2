import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import avatar from './assets/avatar.jpg'
import logo from './assets/Instagram_logo.svg.png'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/post1.jpg'),
    likeCount: 128,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/post2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 3,
    name: 'Henry',
    image: require('./assets/post1.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 4,
    name: 'Ozawa',
    image: require('./assets/post2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 5,
    name: 'Mina',
    image: require('./assets/post1.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 6,
    name: 'Jisoo',
    image: require('./assets/post2.jpg'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.headerContainer}
      >
        <Image
          source={logo}
          style={{
            flex: 1,
            width: null,
            height: 44
          }}
          resizeMode="contain"
        />
        <Feather style={{paddingRight: 10}} name="inbox" size={27} color="black" />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={feedData}
          renderItem={({ item, index }) => {
            return (
              <View
                style={styles.flatItem}
                key={index}
              >
                <View style={styles.headerAvatar}>
                  <Image
                    source={avatar}
                    style={styles.avatarImg}
                    resizeMode="cover"
                  />
                  <Text style={styles.textContainer}>{item.name}</Text>
                </View>
                <Image
                  source={item.image}
                  style={styles.postImage}
                  resizeMode="cover"
                />
                <View style={styles.actionView}>
                  <Feather
                    style={{ padding: 3 }}
                    name="heart"
                    size={24}
                    color="black"
                    onPress={() => alert("Liked")}
                  />
                  <Feather
                    style={{ padding: 3 }}
                    name="message-square"
                    size={24}
                    color="black"
                    onPress={() => alert("Commented")}
                  />
                  <AntDesign
                    style={{ padding: 3 }}
                    name="upload"
                    size={24}
                    color="black"
                    onPress={() => alert("Uploaded")}
                  />
                </View>
                <View style={styles.actionView}>
                  <AntDesign
                    style={{ padding: 3 }}
                    name="heart"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.textContainer}>{item.likeCount} likes</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString() }
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bodyContainer: {
    flex: 10,
  },
  headerAvatar: {
    flexDirection: "row",
    padding: 5
  },
  textContainer: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: "bold"
  },
  avatarImg: {
    width: 46,
    height: 46,
    borderRadius: 50 / 2
  },
  flatItem: {
    marginBottom: 5,
    height: 400
  },
  postImage: {
    flex: 1,
    width: null,
    height: null
  },
  actionView: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5
  },
});
