import React, { Component } from 'react';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
// import ZenQuote from './Test_LoadingAnimation/ZenQuote';
import GithubUserInfo from './Test_LoadingDataWithAsyncFunctions/GithubUserInfo';

class DadJokes extends Component {
    render() {
        return (
            <div>
                <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
          />
                <GithubUserInfo username="DundarKoray"/>
                <GithubUserInfo username="StevePhuc"/>
                
            </div>
        );
    }
}

export default DadJokes;