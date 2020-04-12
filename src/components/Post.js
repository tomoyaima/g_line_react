import React from "react";
import "../bower_components/materialize/dist/css/materialize.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { db } from '../firebase'
import firebase from '../firebase'
import { storage } from '../firebase'



class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body : "",
            title : "",
            favcount: 0,
            librarycount: 0,
            answered:false,
            timestamp:null,
            files:[],
            postimageurls:[]
            

        }

        this.save = this.save.bind(this);
        this.handleInputtitle = this.handleInputtitle.bind(this);
        this.handleInputbody = this.handleInputbody.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
    }

    handleInputtitle(event) {
        this.setState({

            title: event.target.value
        })
    }

    handleInputbody(event) {
        this.setState({
            body: event.target.value

        })
    }

    handleFileSelect = (e) => {
        const files = e.target.files
        Array.prototype.forEach.call(files,(file) => {
            const reader = new FileReader()
            reader.addEventListener("load",()=>{
                this.setState((state)=>{
                    state.postimageurls.push(reader.result)
                    state.files.push(file)
                    return state
                })

             })
            if(file){
                reader.readAsDataURL(file)
            }
        });
        
    }

    

    save = (e) => {

        

       if(this.state.files!=[]){
            e.preventDefault()
            this.state.files.forEach((file)=>{
               
                storage.ref().child(`${file.name}`).put(file).then(snap => {
                    console.log('Uploaded a blob or file!');
                });
            })
        }   
        let id =0;
        let post_id = String(id)
        const user = firebase.auth().currentUser
        const userdb = db.collection("users").doc(user.uid);
        userdb.get().then((userdb) => {
            if (userdb.exists) {
                console.log("Document data:", userdb.data());
            
                    if(this.state.files==null){
                        db.collection("posts").doc().set({
                            post_id : db.collection("posts").doc(),
                            name: userdb.data().name,
                            pic: userdb.data().pic,
                            email: userdb.data().email,
                            course: userdb.data().course,
                            nickname: userdb.data().nickname,
                            body: this.state.body,
                            title: this.state.title,
                            favcount: 0,
                            librarycount: 0,
                            timestamp: new Date(),
                            answered:this.state.answered,
                            postimageurl:[]

                        })        
                        .then(() => {
                            this.setState({
                                post_id : db.collection("posts").doc(),
                                name: userdb.data().name,
                                pic: userdb.data().pic,
                                email: userdb.data().email,
                                course: userdb.data().course,
                                nickname: userdb.data().nickname,
                                body: this.state.body,
                                title: this.state.title,
                                favcount: 0,
                                librarycount: 0,
                                timestamp: new Date(),
                                index : true
                            })
                            console.log(`追加に成功しました `);
                            this.props.changepost()
                        })
                        .catch((error) => {
                            console.log(`追加に失敗しました (${error})`);
                        });
                    }else{
                        db.collection("posts").doc().set({
                            post_id : db.collection("posts").doc(),
                            name: userdb.data().name,
                            pic: userdb.data().pic,
                            email: userdb.data().email,
                            course: userdb.data().course,
                            nickname: userdb.data().nickname,
                            body: this.state.body,
                            title: this.state.title,
                            favcount: 0,
                            librarycount: 0,
                            timestamp: new Date(),
                            answered:this.state.answered,
                            postimageurl:this.state.postimageurls

                        })        
                        .then(() => {
                            // this.setState({
                            //     post_id : db.collection("posts").doc(),
                            //     name: userdb.data().name,
                            //     pic: userdb.data().pic,
                            //     email: userdb.data().email,
                            //     course: userdb.data().course,
                            //     nickname: userdb.data().nickname,
                            //     body: this.state.body,
                            //     title: this.state.title,
                            //     favcount: 0,
                            //     librarycount: 0,
                            //     timestamp: new Date(),
                            //     index : true
                            // })
                            console.log(`追加に成功しました `);
                            this.props.changepost()
                        })
                        .catch((error) => {
                            console.log(`追加に失敗しました (${error})`);
                        });



                    }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
                    
        })
        .catch(function(error){
        console.log(`取得失敗 (${error})`);
            });
    }
         
       
   

    render() {
      
        return (
            
         
                <div>
   
                    <div className="main">
                        <div className="App">
                            <p className="App-intro">

                            </p>


                        </div>
                        
                        {this.props.user&&
                            <div>
                              <h4>質問を投稿</h4>
                             
                                <form>
                                    
                                    <div className="posttitle">タイトルを入力:
                                        <input type='text' value={this.state.title} onChange={this.handleInputtitle.bind(this)} />
                                    </div>
                                    <div className="postbody">投稿内容を入力:
                                        <input type='text' value={this.state.body} onChange={this.handleInputbody.bind(this)} />
                                    </div>
                                    <div className="file-field input-field">
                                        <div className="btn">
                                            <span>File</span>
                                            <input type="file" onChange={this.handleFileSelect.bind(this)} multiple />
                                        </div>
                                        <div className="file-path-wrapper">
                                            <input className="file-path validate" type="text"/>
                                        </div>
                                        {
                                            this.state.postimageurls.map((imageurl,i)=>{
                                                return (
                                                <div key={i}>
                                                    <img src={imageurl}></img>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                    

                                    {this.state.title == ''?
                                        (
                                            <div>タイトルを入力してください</div>
                                        ) : (
                                             this.state.body != ''?
                                                (
                                                    <button onClick={this.save}  ><Link to='/posts/index'>質問を投稿する</Link></button>

                                                ) : (
                                                    <div>投稿内容を入力してください</div>

                                                )
                                        )
                                    }


                                </form>
                               
                            </div>
                        
                           
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



export default Post
