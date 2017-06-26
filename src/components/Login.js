import React, { Component } from 'react'
import { Button } from 'react-md'

class Login extends Component {
    handleFBLogin(){
        const { onClick } = this.props;
        
        if ( onClick )
            onClick();
    }
    render() {
        return (
            <div>
                <Button raised primary
                    id='rc-login'
                    label='使用 Facebook 一鍵登入'
                    iconClassName="fa fa-facebook-official"
                    onClick={this.handleFBLogin.bind(this)}></Button>
                <div className="rc-info-group">
                    <div className="rc-info">請先登入以便抓取 Facebook 資訊，此將只會提供您 <b>已公開的資訊</b></div>
                    <div className="rc-info">我們不會在您的動態塗鴉牆上貼文，更不會利用及散布您的資訊，請安心服用。</div>
                </div>
            </div>
        );
    }
}

export default Login;
