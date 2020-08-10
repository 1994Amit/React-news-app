import React from "react";

export default class Newsdetails extends React.Component {
 state = {
    loading: true,
    person: null,
    showMessage: false,
    news: JSON.parse(localStorage.getItem('document')),
    id: this.props.match.params.id,
    news_display: {}
  };


  async componentDidMount() {
    this.setState({
      news_display: this.state.news[this.state.id],
      loading: false
    })
  }

  
  showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  deleteNews(){
    let newsa = this.state.news;
    newsa.splice(this.state.id, 1);
    localStorage.setItem('document',JSON.stringify(newsa))
    this.props.history.push('/news');
    }

    backNews(){

      this.props.history.push('/news');
      }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

   
 return (
   
      <form onSubmit={this.handleFormSubmit}>
      <h3>News Details</h3>
      <div className = "row">
          <div className = "col-md-12">
              <div className="form-group">
                  <label>Headline</label>
                  <input  disabled   type="text" className="form-control"  name="headline" placeholder={this.state.news_display.headline} readonly/>
                  
              </div>
          </div>
      </div>

      <div className = "row">
          <div className = "col-md-12">
              <div className="form-group">
                  <label>Description</label>
                  <textarea  disabled type="textfield" className="form-control"  name="description" placeholder= {this.state.news_display.description}/>
              </div>
          </div>
      </div>

      <div className = "row">
          <div className = "col-md-6">
              <div className="form-group">
                  <label>Author</label>
                  <input type="textfield" disabled  className="form-control"  name="Author" placeholder={this.state.news_display.author}  />
              </div>
          </div>
          <div className = "col-md-6">
              <div className="form-group">
                  <label>Date</label>
                  <input type="text" className="form-control"  disabled   placeholder={this.state.news_display.date} />
              </div>
          </div>
      </div>
      <div className = "row">
      <div className = "col-md-6">
      <button onClick={this.deleteNews.bind(this)} className="btn btn-primary btn-block">delete</button></div>
      <div className = "col-md-6">
       <button onClick={this.backNews.bind(this)} className="btn btn-primary btn-block">back</button></div>
  </div></form>
    );
  }
}