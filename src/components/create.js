import React, { Component } from "react";


export default class SignUp extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
           
            news: JSON.parse(localStorage.getItem('document'))
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
getNews(){
    return this.state.news
   }
  
onAdd(Headline,Description,Author,Date){
    const news = this.getNews();
    news.push({
    Headline,
    Description,
    Author,
    Date
    })
    this.setState({news})

}

handleFormSubmit(e) {
    console.log(this.headline.value);
    e.preventDefault()
    let news = this.getNews();
    if(news == null){
        let newsa=[]
        newsa.push({
            headline: this.headline.value,
            description: this.description.value,
            author: this.author.value,
            date: this.date.value
           })
           this.setState({news})
           localStorage.setItem('document',JSON.stringify(newsa));
    }   
    else{
        news.push({
            headline: this.headline.value,
            description: this.description.value,
            author: this.author.value,
            date: this.date.value
           })
           this.setState({news})
           localStorage.setItem('document',JSON.stringify(this.state.news));
    }
    this.props.history.push('/news');

   
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
//     if (localStorage.getItem('document')) {
//         this.setState({
//             name: this.documentData.name,
//            lname: this.documentData.lname,
//            email: this.documentData.email,
//            password:this.documentData.password
//     })
// } else {
    this.setState({
        name: '',
            lname: '',
            email: '',
            password:'',
    })
//}
}
    
    render() {
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3>Create News</h3>
                <div className = "row">
                    <div className = "col-md-12">
                        <div className="form-group">
                            <label>Headline</label>
                            <input type="text" className="form-control"  name="headline" ref={headline => this.headline = headline} placeholder="Headline" value={this.state.headline} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-md-12">
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="textfield" className="form-control"  name="description" placeholder="Description"  ref={description => this.description = description} value={this.state.description} onChange={this.handleChange} />
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col-md-6">
                        <div className="form-group">
                            <label>Author</label>
                            <input type="textfield" className="form-control"  name="Author" placeholder="Author name" ref={author => this.author = author} value={this.state.author} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className = "col-md-6">
                        <div className="form-group">
                            <label>Date</label>
                            <input type="date" className="form-control" name="date" placeholder="select date" ref={date => this.date = date} value={this.state.date} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Add News</button>
                
            </form>
        );
    }
}