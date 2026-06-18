import { Component } from 'react'

export default class AddForm extends Component {

  render() {
    return (
      <>
        <form action="" id="book-form">

          <div className="form-group">
            <label For="title">Title</label>
            <input type="text" id="title" className="form-control" />
          </div>

          <div className="form-group">
            <label For="author">Author</label>
            <input type="text" id="author" className="form-control" />
          </div>

          <div className="form-group">
            <label For="year">Year</label>
            <input type="text" id="year" className="form-control" />
          </div>

          <input type="submit" value="Add Book" className='btn' />
          
        </form>


      </>
    )
  }
}
