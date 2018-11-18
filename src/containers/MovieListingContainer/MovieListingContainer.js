import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Content,
  Button,
  View,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Body,
  Title,
} from 'native-base';
import {
  Image,
  TouchableOpacity,
  Linking,
  TextInput,
  FlatList,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovieList } from '../../actions/movieList';
import MovieItem from '../../components/MovieItem/MovieItem';
import images from '../../constants/image';
import styles from './MovieListingContainer.style';

class MovieListing extends Component {
  static propTypes = {
    getMovieFullList: PropTypes.func,
    movies: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    movies: [],
    getMovieFullList: () => {},
  };

  state = {
    index: 1,
    showSearchBox: false,
    input: '',
  };

  componentDidMount() {
    const { getMovieFullList } = this.props;
    getMovieFullList(1);
  }

  onScrollToBottom(event) {
    const { getMovieFullList } = this.props;
    const { index } = this.state;
    const itemHeight = 500;
    const currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
    const currentItemIndex = Math.ceil(currentOffset / itemHeight);
    if (currentItemIndex > index && this.props.movies.length < this.props.totalCount) {
      getMovieFullList(currentItemIndex);
      this.setState({
        index: currentItemIndex,
      });
    }
  }

  keyExtractor = (item, index) => index;

  showSearchBox() {
    this.setState({
      showSearchBox: true,
    });
  }

  hideSearchBox() {
    this.setState({
      showSearchBox: false,
      input: '',
    });
  }

  renderItem = ({ item }) => <MovieItem item={item} />;

  renderList() {
    const { movies } = this.props;
    const { input } = this.state;
    if (movies) {
      // console.log(this.props.movies.page['content-items']);
      const sortedResult = movies.filter(item => {
        const itemName = item.name.toUpperCase();
        const searchName = input.toUpperCase();
        if (itemName.indexOf(searchName) > -1) {
          return true;
        }
        return false;
      });
      return (
        <FlatList
          data={sortedResult}
          extraData={this.state}
          numColumns={3}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          scrollEventThrottle={500}
          style={styles.listStyle}
          onScroll={event => this.onScrollToBottom(event)}
        />
      );
    }
    return (
      <Text>


No results available for
{' '}
        { input }
            </Text>
    );
  }

  renderTitleView() {
    if (!this.state.showSearchBox) {
      return <Text style={styles.titleText}>{this.props.title}</Text>;
    }
    return (
      <TextInput
        style={{ color: 'white', borderBottomWidth: 1, borderColor: 'white', height: 40, fontSize: 18 }}
        onChangeText={text => this.setState({ input: text })}
        placeholder="Search here..."
        placeholderTextColor="white"
        value={this.state.input}
      />
    );
  }

  render() {
    return (
      <Container>
        <ImageBackground source={images.navBar} style={styles.navBar}>
          <View style={styles.leftIconView}>
            <TouchableOpacity onPress={() => this.hideSearchBox()}>
              <Image style={styles.backImage} source={images.back} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleView}>
            {this.renderTitleView()}
          </View>
          <View style={styles.rightIconView}>
            <TouchableOpacity onPress={() => this.showSearchBox()}>
              <Image style={styles.backImage} source={images.search} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.contentStyle}>
          <ImageBackground source={images.navBar} style={styles.navBar} />

          {this.renderList()}
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    getMovieFullList: data => dispatch(getMovieList(data)),
  };
}
function mapStateToProps(state) {
  return {
    movies: state.movies.data,
    title: state.movies.title,
    totalCount: state.movies.totalCount,
  };
}

export default connect(mapStateToProps, bindAction)(MovieListing);
