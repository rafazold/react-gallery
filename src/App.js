import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            photos: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(albums => {
                this.setState({albums});
            });
    }

    addGallery(e) {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${e.target.value}`)
            .then(res => res.json())
            .then(photos => {
               this.setState({photos});
            });
    }



    render() {
    return (
        <div className="App">
            <select defaultValue="" onChange={this.addGallery.bind(this)}>
                  <option value="" disabled >Select your option</option>
                      {this.state.albums.map((albums) => {
                          return <option label={albums.title} value={albums.id} key={albums.id}>
                              {albums.title}
                          </option>
                      })}
            </select>
            <div className="photos">
                {this.state.photos.map(item => {
                    return <img src={item.thumbnailUrl} alt="item" key={item.id}/>
                })}
            </div>
        </div>
    );
  }

}

export default App;
