import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import details from "./Details"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
export default class Display extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            Author:[]
            
           
    }
}


  
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
     
      
    }

    gotoNews(index){
      this.props.history.push('/news/' + index)
    }

   

    render() {
      let news = JSON.parse(localStorage.getItem('document'))
      let displayer = '';
      if(news != null && news != []){
        displayer = news.map((values, index) => {
          return(
            <div>

          <MDBCol>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>{values.headline}</MDBCardTitle>
                    <div className="row">
                      <div className="col-md-1">
                        <MDBCardText>
                          {values.author}
                        </MDBCardText>
                      </div>
                      <div className="col-md-11" >
                        <MDBCardText style={{ color:'green' ,textAlign: "right"}}>
                          {values.date}
                        </MDBCardText>
                      </div>
                    </div>
                    <a href={"/news/" + index} class="stretched-link"></a>
                    {/* <MDBBtn onClick={this.gotoNews.bind(this,index)}>View News</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                  </div> 
          )
          
        })
      }
        return (displayer);
    }
}