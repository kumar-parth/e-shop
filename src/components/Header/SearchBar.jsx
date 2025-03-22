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
        console.log(this.textInput.current);
        return (
            <React.Fragment>
                <div className="searchbar">
                    <input className="search_input" ref={this.textInput} type="text" name="" placeholder="Search..."
                        onChange={this.handleChange} />
                    <a href="#" className="search_icon" onClick={this.handleClick}><i className="fas fa-search"></i></a>
                    <div className={this.props.searchQuery ? "list" : ""}>
                        {this.props.searchQuery ?
                            this.props.suggestions.map((item) => {
                                return (
                                    <div className="list-item" key={item.name}>
                                        {item.name}
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.products,
        searchQuery: state.searchQuery
    }
}

export default connect(mapStateToProps, { setSearchQuery })(SearchBar);