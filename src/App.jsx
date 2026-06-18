import { Component } from 'react'
import Header from './Header/Header'
import AddForm from './AddForm/AddForm'
import Book from './Book/Book'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <AddForm></AddForm>
        <Book></Book>
      </div>
    )
  }
}
