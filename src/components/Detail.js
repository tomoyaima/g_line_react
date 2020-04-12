import React from "react";
import "../bower_components/materialize/dist/css/materialize.css";
import "./style.css";
import Post from "./Post"
import { db } from '../firebase'
import firebase from '../firebase'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { storage } from '../firebase'
import Posts from "./Posts";
import Response from "./Response"

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
           post:[],
           answered:false,
           answerdisplay:false
        }
        this.answered=this.answered.bind(this)
    }

  
    componentWillMount(){

        

        const postsref = db.collection("posts")
        postsref.onSnapshot((snapshot) => {
            const posts = snapshot.docs.map( (postdoc) =>{
                
                const post = postdoc.data();
                    //  console.log(post);
                if(post.postimageurl !=[]){
                    console.log(post.postimageurl)
                    const pathref = storage.ref().child(`images/${post.postimageurl}`)
                    pathref.getDownloadURL().then((url)=>{ 

                        this.setState((state)=>{
                            const index =  state.posts.findIndex((post)=>{
                                return post.id === postdoc.id;
                            })
                            state.posts[index].postimageurl.push(url)
                            
                            return state
                        })
                    })

                    
                }
                return {...post,id:postdoc.id}
                
               
            })
            
            const uid =this.props.match.params.id
            const post= posts.find((posts) => {return (posts.id === uid);})
            const user = firebase.auth().currentUser
            if(user.email==post.email){
                this.setState({
                answerdisplay:true
                })
            }
            this.setState({
                post:post
            })
           
        });
       
       
    
    }
    answered(isAnswered){
        this.setState((state)=>{
            state.post.answered=isAnswered
            
        })
        console.log(this.state.post);
        console.log(this.state.post.answered);
        const ansewredPost = {
            ...this.state.post,
            answered: this.state.post.answered
        }
        db.collection("posts").doc(this.state.post.id).set(ansewredPost)        
        
    }
   

    render(){
        console.log(this.state.post.answered)
        return(
            <div>

                {this.props.user&&
                        
                           <div>
                                {this.state.post.title}
                                {this.state.post.body}
                                {this.state.post.name}
                                {this.state.post.pictureurl}
                               
                                {this.state.post.course}
                                {this.state.post.nickname}
                                {this.state.post.favcount}
                                {this.state.post.librarycount}
                                {this.state.post.answered}
                                {this.state.post.postimageurl&&
                                    this.state.post.postimageurl.map((imageurl,j)=>{
                                        return (
                                        <div key={j}>
                                        <img src={imageurl} className="post-image"></img>
                                        </div>
                                        )
                                    })
                                }
                            </div> 
                         
                           
                   
                }

                {this.state.answerdisplay?(
                    this.state.post.answered?(
                    <div>
                        解決済み
                        <button onClick={()=>{this.answered(false)}}>回答済み取り消し</button>
                    </div>
                )
                :
                (
                    <div>
                        未解決
                    <button onClick={()=>{this.answered(true)}}>回答済みにする</button>
                    </div>
                )
                ):(<div></div>)
                }
            
            <Response match={this.props.match}/>
            <Link to='/posts/index'>ホームへ戻る</Link>
            </div>
        )
    }
}

export default Detail
