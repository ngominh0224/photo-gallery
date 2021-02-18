import React from 'react';
import './App.css';
import Header from './header.js';
import images from './data.js';
import ImageList from './ImageList.js';
import Dropdown from './dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  };

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value),
    });
  };

  render() {
    let theKey = this.state.keyword;
    let theHorn = this.state.horns;
    const filteredHorns = images.filter((image) => {
      if (!theKey && !theHorn) return true;

      if (theKey && !theHorn) {
        if (image.keyword === theKey) return true;
      }

      if (!theKey && theHorn) {
        if (image.horns === theHorn) return true;
      }

      if (theKey && theHorn) {
        if (image.keyword === theKey && image.horns === theHorn) return true;
      }

      return false;
    });

    return (
      <>
        <Header />
        <div className="image-sorter">
          <form>
            Sort images by keyword <br />
            <Dropdown
              currentValue={this.state.keyword}
              handleChange={this.handleKeywordChange}
              options={[
                'narwhal',
                'rhino',
                'mouflon',
                'markhor',
                'triceratops',
                'addax',
                'chameleon',
                'lizard',
                'dragon',
              ]}
            />
            <label>horns: </label>
            <Dropdown
              currentValue={this.state.horns}
              handleChange={this.handleHornsChange}
              options={[1, 2, 3, 100]}
            />
            <br />
            <button>View All</button>
          </form>
        </div>

        <div className="image-view">
          <ImageList images={filteredHorns} />
        </div>
      </>
    );
  }
}
