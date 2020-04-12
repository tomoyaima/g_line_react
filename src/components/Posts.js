import React from "react";
import "../bower_components/materialize/dist/css/materialize.css";
import "./style.css";
import Post from "./Post"
import { db } from '../firebase'
import firebase from '../firebase'
import { BrowserRouter, Route,Redirect, Link } from 'react-router-dom'
import { storage } from '../firebase'
import Detail from "./Detail"
import Index from "./Index"



class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            postpage:false,
            user:null,
            pictureurl:"",
            detail:[]


        }
        
    }

    changepost=()=>{
        this.setState({
        postpage:false
    })
    }

    componentDidMount(){
    
          console.log(this.props.user)
          
        
        
          
        const postsref = db.collection("posts").orderBy('timestamp', 'desc')
        postsref.limit(20).onSnapshot((snapshot) => {
            const posts = snapshot.docs.map( (postdoc) =>{
                
                const post = postdoc.data();
                    
                if(post.postimageurl.length != 0){
                    console.log(post.postimageurl )
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
            
            this.setState({
                posts : posts,
            })
        });
        
    
    }

   
    post = () =>{
        if(this.state.postpage==true){
        this.setState({
            postpage:false
        })
         }else{
        this.setState({
            postpage : true
        })  
    }
    }


    render(){
       
       
     
        return(
            <div>
               
                {this.props.user&&
    
                <div>

                    
                        <div>
                          <Route  exact path='/posts/index' render={()=><Index post={this.post} changepost={this.changepost} pictureurl = { this.state.pictureurl} posts={this.state.posts} postpage={this.state.postpage} user ={this.props.user} post = {this.post}/>}/>
                          <Route  path='/posts/index/:id' render={(props)=><Detail match ={props.match} post={this.post} changepost={this.changepost} pictureurl = { this.state.pictureurl} posts={this.state.posts} postpage={this.state.postpage} user ={this.props.user} post = {this.post}/>}/>
                          </div>
                      
                    
                    
               
                 
                </div>
                }
           
               
                
            </div>
        );
    }
    
}

export default Posts
