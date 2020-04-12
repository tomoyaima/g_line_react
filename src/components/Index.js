import React from "react";
import "../bower_components/materialize/dist/css/materialize.css";
import "./style.css";
import Post from "./Post"

import { BrowserRouter, Route, Link } from 'react-router-dom'



class Index extends React.Component{
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

   

   

   
 

    render(){
       
        return(
            <div>

                {this.props.user&&
                this.props.postpage==false&&
                     this.props.posts.map((post,i) => { 
                       
                        
                      return(
                            <div key={i}>
                                <Link to={`/posts/index/${post.id}`}>{post.title}</Link>
                                {post.body}
                                
                                {post.postimageurl&&
                                    post.postimageurl.map((imageurl,j)=>{
                                        return (
                                        <div key={j}>
                                        <img src={imageurl} className="post-image"></img>
                                        </div>
                                        )
                                    })
                                }
                                {post.course}
                                {post.nickname}
                                {post.favcount}
                                {post.librarycount}
                                {/* {post.timestamp.toString()} */}
                            </div>
                     
                      )
                            })
                    
               
                }
            {this.props.user&&
                this.props.postpage?(
                    <div>
                    <div><Post user = {this.props.user} postpage={this.props.postpage} changepost={this.props.changepost}/></div>
                    <button onClick={this.props.changepost}>投稿をやめる</button>
                    </div>
                )
                :
                (
                    <a className="btn-floating btn-large waves-effect waves-light red"onClick={this.props.post}><i className="material-icons">add</i></a>
                    
                )
                
            }
               
                
            </div>
        );
    }
    
}

export default Index
