import { Component } from 'react'
import { FaBookOpen } from "react-icons/fa";
import "./Header.css"

export default class Header extends Component {

  render() {
    return (
      <>

        <h1 className="display-4">
          <FaBookOpen className='fas' />Xrfan

          <span className="text-warning">
            Book
          </span>list
        </h1>
      </>
    )
  }
}
