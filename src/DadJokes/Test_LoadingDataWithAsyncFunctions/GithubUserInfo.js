import { Component } from 'react';
import axios from "axios";
import styles from '../Test_LoadingAnimation/zenQuote.module.css'

class GithubUserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            picture: "",
            name: "",
            url: ""
        };
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`
        let response = await axios.get(url);

        const {name, avatar_url, html_url} = response.data
        // console.log(response.data)

        setTimeout(
            function () {
                this.setState({
                    isLoading: false,
                    picture: avatar_url,
                    name: name,
                    url: html_url
                })
            }.bind(this),
            3000
          );

       
    }
    render() {
        return (
<div>
            {this.state.isLoading ? 
            <div className={styles.loader}></div>
            :
            <div style={{marginBottom: "15rem"}}>
                <h2>GITHUB USER</h2>
                <img style={{width: "200px"}} src={this.state.picture}/>
                <p>{this.state.name}</p>
                <a href={this.state.url}>Learn More</a>
            </div>
        }
</div>
        );
    }
}

export default GithubUserInfo;