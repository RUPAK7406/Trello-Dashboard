import React from 'react';
import ReactDOM from 'react-dom';
import './LikeButton.css';
import Button from 'react-bootstrap/Button';
import TrelloButton from './TrelloButton';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  
  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like'
    return (
      <div className="customContainer">
      <Button variant="success" id="one" onClick={this.handleClick}>{label}</Button>
       
          <p>
          </p>
        
      </div>
    );
  }
}

export default LikeButton;
