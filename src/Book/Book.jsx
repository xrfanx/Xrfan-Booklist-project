import { Component } from 'react'
import "./Book.css"

export default class Book extends Component {
    
  render() {
    return (
      <div className="book-row">
        <div>{this.props.title}</div>
        <div>{this.props.author}</div>
        <div>{this.props.year}</div>
      </div>
    )
  }
}