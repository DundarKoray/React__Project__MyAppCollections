import React, { Component } from "react";
import headsPic from "./heads.png";
import tailsPic from "./tails.png";
import {flip} from './helpers';
import './style.css';
import InnerNavBar from "../InnerNavBar/InnerNavBar";

class FlipCoinV2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clickState: 0,
          active: false,
          count: 0,
          countHead: 0,
          countTail: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.zoom = this.zoom.bind(this);
      }

      
      zoom(){
          if(this.state.active === true ){
              this.setState({
                  active: false
              })
          } else {
              this.setState({
                  active: true
              })
          }
          
      }
      
      handleClick(){
        this.setState((st) =>{
            return{

                count: st.count +1
            }
        })
        if(this.state.clickState ===1){
            this.setState({
                clickState: 0
            })
          } else {
            this.setState({
                clickState: 1
            })
          }
      }
  

  render() {
    return (
        
      <div>
          <InnerNavBar text="back" link="https://github.com/DundarKoray/React__Project__GameCollections/tree/master/src/FlipCoinV2" />
        <h2>FLIP THE COIN V2</h2>
        <p>{this.state.count}</p>
        {/* <img className="boy-flipping-coin" src="https://res.cloudinary.com/koraydundar/image/upload/v1559739488/hand1_mqddvc.jpg"> */}
        <div onClick={this.handleClick} className="cards">
          <div className="maincontainer">
              {this.state.clickState === 0 ? <div style={{transform: `rotateX(${flip()}deg)`, transition: 'all 2s'}} className="thecard">
              <div className="thefront">
                <div className="imagewrapper">
                    
                    
                  <img alt="" className="image2" src={headsPic} />
                </div>
              </div>

              <div className="theback">
                <div className="image-wrapper">
                  <img alt="" className="image2" src={tailsPic} />
                  {/* <img className="image2" src="https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"> */}
                </div>
              </div>
            </div> : <div style={{transform: `rotateX(-${flip()}deg)`, transition: 'all 2s'}} className="thecard">
              <div className="thefront">
                <div className="imagewrapper">
                    
                    
                  <img alt="" className="image2" src={headsPic} />
                </div>
              </div>

              <div className="theback">
                <div className="image-wrapper">
                  <img alt="" className="image2" src={tailsPic} />
                  {/* <img className="image2" src="https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"> */}
                </div>
              </div>
            </div>}
            
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCoinV2;




