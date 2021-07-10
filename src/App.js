import React, { Component } from 'react'
import CardList from "./components/CardList/CardList"
import './App.css';
import SearchBox from './components/searchBox/SearchBox';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resonse => resonse.json())
      .then(users => this.setState({ monsters: users }))
  }

onChangeHandle = (e)=>{
  this.setState({ searchField: e.target.value }, () => console.log(this.state))
  // console.log(this.state )
}

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="heading">Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" onChangeHandle={this.onChangeHandle} />
        <CardList monsters={filteredMonster} />
      </div>

    )
  }
}

export default App
