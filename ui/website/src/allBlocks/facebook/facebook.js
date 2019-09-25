import React, { Component} from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <div className="sharefacebook">
        <FacebookProvider appId="2384256901838973">
          <ShareButton href="http://www.facebook.com">
            Share
          </ShareButton>
        </FacebookProvider>
      </div>
    );
  }
}