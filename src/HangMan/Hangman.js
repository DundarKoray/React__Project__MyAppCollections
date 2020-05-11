import React, { Component } from "react";
import { randomWord } from "./words"
import { Link } from 'react-router-dom'
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner"
import { FaArrowLeft} from 'react-icons/fa'


class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord(),
      isVictory: false
    };
    
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this)
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    let gw = this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
      console.log(gw)
      return gw
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  reset() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    })
  } 

  /** render: render game */
  render() {
    const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`
    const isWinner = this.guessedWord().join("") === this.state.answer
    const gameOver = this.state.nWrong >= this.props.maxWrong

    let gameState = this.generateButtons()
    if(isWinner) gameState = <div className="last_chance green win">You win</div>
    if(gameOver) gameState = <div className="last_chance red">You lost</div>

    return (
      <SimpleHero>
        
        <Banner>

      <div className='Hangman'>
      <Link to="/" style={{marginBottom: "3rem"}}className="btn-white"><FaArrowLeft /> Back</Link>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Guessed Wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className='Hangman-btns'>
          {gameState}
        </p>
        
        {(!isWinner) ?
        <p className="last_chance red">
          {(this.state.nWrong + 1) === this.props.maxWrong ? 'Becarefull Your Last Chance' : null }
        </p>
        : null
      }
        
        <button style={{marginBottom:"1rem"}} id="reset" onClick={()=>this.reset()}>Restart</button>
      </div>
      </Banner>
      </SimpleHero>
    );
  }
}

export default Hangman;
