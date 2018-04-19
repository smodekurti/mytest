import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './Styles';

export default class ScrollableHeader extends Component {

  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={styles.header}>
            <View style={styles.bar}>
                <Text style={styles.title}>Title</Text>
            </View>
            </Animated.View>
      </View>
    );
  }
}

