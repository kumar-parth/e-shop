import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center"
                style={{
                    background: '#2375F3',
                    position: 'fixed',
                    width: '100%',
                    bottom: '0px'
                }}>
                <p style={{ marginTop: '6px' }}><a style={{ color: 'white' }} href="/" rel="nofollow noopener"> © Copyright </a></p>
            </div>
        )
    }
}
export default Footer;