import React, { Component } from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Hotels from './components/Hotels/Hotels';

class App extends Component {

  hotels = [
    {
      id: 1,
      name: 'Wielki Hotel',
      city: 'Warszawa',
      rating: '4,4/5',
      description: 'cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis ',
      image: ''
    },
    {
      id: 2,
      name: 'Akacjowy Hotel',
      city: 'Warszawa',
      rating: '4,9/5',
      description: 'cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis cos cos opis coscos opis coscos opis ',
      image: ''
    },
  ];
  state = {
  hotels: this.hotels
  };


  searchHandler(term) {
    const hotels = [...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()));
    this.setState({ hotels })
  }

  render() {
    return (
      <div className="App" >
        <Header onSearch={term => this.searchHandler(term)} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;