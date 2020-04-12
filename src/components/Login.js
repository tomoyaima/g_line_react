import React from "react";
import "../bower_components/materialize/dist/css/materialize.css";

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { db } from '../firebase'
import firebase from '../firebase'
import Index from './Index'
import PropTypes from 'prop-types';

import "./style.css"
import LoginHeader from './items/Login-header'



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:[],
            course: '',
            nickname: '',
            logined: true
        }

       
    }

    componentDidMount() {
        console.log("login")
       
        const user = firebase.auth().currentUser
        const userdb = db.collection("users").doc(user.uid);
        this.setState({user:userdb})
        
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
    // coursecheck = () => {
    //     var userdb = db.collection('users').doc('user.uid');
    //     if (userdb.course == "") {

    //         return true
    //     } else {
    //         return false
    //     }
    // }


  




    render() {
        console.log(this.props.user)
        return (
            
            
                <div>
               
                    <div className="main">
                        <div className="App">
                            <p className="App-intro">

                            </p>


                        </div>
                    {this.state.logined?(
                        
                        this.props.user ? (
                            <div>
                                <div className="plfname">名前: {this.props.user && this.props.user.displayName}</div>
                                <div className="plfemail">E-mail: {this.props.user && this.props.user.email}</div>
                                <div className="plf">コース: {this.props.user && this.props.user.web}</div>
                               <form>
                                    <div className="plfnickname">ニックネームを入力:
                    <input type='text' value={this.props.nickname} onChange={this.props.handleInputnickname.bind(this)} />
                                    </div>
                                    <div className="plfcourse">コースを入力:
                    <input type='text' value={this.props.course} onChange={this.props.handleInputcourse.bind(this)} />
                                    </div>
                                    

                                    {this.state.nickname == '' ?
                                        (
                                            <div>名前を入力してください</div>
                                        ) : (
                                            this.state.course == 'game' || this.state.course == 'web' || this.state.course == 'iphone' ?
                                                (
                                                    <button onClick={this.props.save}><Link to='/index'>geek-lineに登録</Link></button>

                                                ) : (
                                                    <div>コースを入力してください(WEBコース="web",GAMEコース="game",iPhoneコース="iphone")</div>

                                                )
                                        )
                        
                                    }


                                </form>

                                <li className="gline-logout" onClick={this.props.logout}><Link to='/'>ログアウト</Link></li>
                            </div>
                        ) : (
                                <div></div>
                            )
        
          
                        
                    
                    )
                    :
                    (
                        <div></div>  
                    )
                    }

</div>
                    <footer>
                        <div className="footer-content">

                        </div>
                    </footer>
                </div>
                
            
            
        );
    }
}
Login.propTypes = {
      user: PropTypes.string.isRequired,
    };
    
     


export default Login
