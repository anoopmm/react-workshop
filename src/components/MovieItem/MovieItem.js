import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import styles from './MovieItem.style';
import images from '../../constants/image';

export default class ProjectItem extends Component {
  static propTypes = {
    item: PropTypes.shape(),
  };

  static defaultProps = {
    item: null,
  };

  render() {
    const { item } = this.props;
    return (
      <View style={styles.mainView}>
        <View style={styles.containerView}>
          <Image style={styles.image} source={images[item['poster-image'].replace(/\.[^/.]+$/, '')]} />
          <View style={styles.titleView}>
            <Text style={styles.titleText} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
