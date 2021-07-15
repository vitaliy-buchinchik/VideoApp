import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView, SafeAreaView, Text } from 'react-native';
import { VideoPlayer } from 'react-native-video-player';
import { Card } from '@ui-kitten/components';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const videoApp = () => {
  DATA = [
    {
      title: 'Video 1',
      author: 'Q',
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      id: 1
    },
    {
      title: 'Video 12',
      author: 'QW',
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      id: 2
    },
    {
      title: 'Video 123',
      author: 'QWE',
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      id: 3
    },
    {
      title: 'Video 1234',
      author: 'QWER',
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      id: 4
    },
    {
      title: 'Video 12345',
      author: 'QWERT',
      url: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      id: 5
    },
  ];

  const [cameraVisibility, setCameraVisibility] = useState(false);

  function onSwipe(gestureName) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        continue;
      case SWIPE_DOWN:
        continue;
      case SWIPE_LEFT:
        setCameraVisibility(true);
        break;
      case SWIPE_RIGHT:
        continue;
    }
  }

  return (
    <SafeAreaView style={StyleSheet.area}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <Card
                header={() => {
                  <View style={StyleSheet.header}>
                    <Text>{item.title}</Text>
                  </View>
                }}
                footer={() => {
                  <View style={StyleSheet.footer}>
                    <Text>Author: {item.author}</Text>
                  </View>
                }}>
                <VideoPlayer
                  video={{ uri: item.url }}
                  autoplay={false}
                  defaultMuted={true}
                  videoWidth={1500}
                  videoHeight={1000}
                />
              </Card>
            </ScrollView>
          )
        }}
      />
      <GestureRecognizer {...onSwipe(gestureName)}>
      </GestureRecognizer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'flex-start',
    backgroundColor: '#ccc',
  },

  header: {
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 24
  },

  footer: {
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 14
  },
});
