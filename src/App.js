import React from 'react';
import { BrowserRouter, Route, Link,Redirect } from 'react-router-dom'
import LandingPage from './components/LandingPage.js'
import Login from "./components/Login";
import Post from './components/Post'
import Library from './components/Library'

import MyPage from './components/Mypage'
import Posts from './components/Posts'
import './bower_components/materialize/dist/css/materialize.css'
import firebase from './firebase'
import Index from './components/Index'
import { db } from './firebase'
import LoginHeader from './components/items/Login-header.js'
import IndexHeader from './components/items/Index-header.js'
import Detail from './components/Detail'


class App extends React.Component{
  constructor(){
    super()
    this.state ={
    user:null,
    isLogging:false,
    course: null,
    nickname: '',
    logined: true
    }

    this.save = this.save.bind(this);

  }


  save = (e) => {
    
      const user = firebase.auth().currentUser
      if (user) {
          db.collection("users").doc(user.uid).set({
              name: user.displayName,
              pic: user.photoURL || '/images/profile_placeholder.png',
              email: user.email,
              course: this.state.course,
              nickname: this.state.nickname
          })
              .then(() => {
                  this.setState({
                      logined : true
                  })
                  console.log(`追加に成功しました `);
              })
              .catch((error) => {
                  console.log(`追加に失敗しました (${error})`);
              });
      }

      
  }
  
handleInputcourse(event) {
  this.setState({

      course: event.target.value
  })
  
}
handleInputnickname(event) {
  this.setState({
      nickname: event.target.value

  })
}
    


 
componentDidUpdate() {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user })
  })
}

  login=()=> {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    this.setState({ isLogging:true }) 
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
      console.log(this.state.user)
      this.setState({ course:db.collection("users").doc(this.state.user.uid).course }) 
    })       
  }


  logout=()=> {
    firebase.auth().signOut()
    this.setState({ isLogging:false,user:null }) 
   
  }

   render(){
     console.log(this.state.course)
    return(
      <div>
        
       
      
      <BrowserRouter>
      
        <div>
          
        {this.state.user?(
            this.state.course?(
        
              <div>
              <IndexHeader login={this.login } logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging}/>
              <Route  path='/form' render={()=><Post  logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging} index ={this.state.index}/>}/>
              <Route  path='/posts' render={(props)=><Posts match={props.match} logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging} index ={this.state.index}/>}/>
              <Route  path='/library' component={Library}/>
              <Route  path='/mypage' component={MyPage}/>
              </div>
        
            )
            :
            (
            <div>
              <LoginHeader login={this.login } logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging}/>
              <Route  path='/posts/login' render={() => <Login handleInputcourse={this.handleInputcourse} handleInputnickname={this.handleInputnickname}save={this.save} nickname={this.state.nickname} course={this.state.course} logout={this.logout} user={this.state.user} isLogging={this.state.isLogging} />}/>
              <Redirect to={'./login'}/>
              
            </div>
            )
        )
        :
        (      
          <div>
          <LoginHeader login={this.login } logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging}/>
          <Route exact path='/' render={()=> <LandingPage login={this.login } logout={this.logout} user ={this.state.user} isLogging = {this.state.isLogging}/>}/>
          </div>
          
        )
        }
        
         
        
        </div>
       
      </BrowserRouter>
      
      
      </div>
    )
  }
}

export default App;
