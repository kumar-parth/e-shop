import React, { Component } from 'react';
import '../../css/searchbar.css';
import { connect } from 'react-redux';
import { setSearchQuery } from '../../actions';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    handleChange = (e) => {
        this.props.setSearchQuery(e.target.value);
    }

    handleClick = () => {
        this.props.setSearchQuery(this.textInput.current.value);
    }
    render() {
        return (
            <div className="searchbar">
                <input className="search_input" ref={this.textInput} type="text" name="" placeholder="Search..."
                    onChange={this.handleChange} />
                <a href="#" className="search_icon" onClick={this.handleClick}><i className="fas fa-search"></i></a>
            </div>
        )
    }
}

export default connect(null, { setSearchQuery })(SearchBar);