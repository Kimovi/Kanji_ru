import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class componentName extends Component {
  render() {
    return (
        <div className="main-page">
          <h1>Let's learn Japanese Kanji with us!</h1><br></br>
          <p>Our Kanjiru app has evolved! <br></br>
              We have shined our IT skills and adopted API with React to build up this app. 
              Just discover, learn and so on.
              <br></br>It's important to learn Kanji because it's often used in today's official newspapers, magazines, comicbooks and more.
              Kanji is a script used in the modern Japanese writing system along with Hiragana and Katakana.
              Kanji was adopted from the Chinese writing system(Hanzi) many years ago, and more than 2000 Kanji are taught to students in Japanese schools.
              <br/>Almost every Kanji character can be read in two different ways!!!!
          Onyomi (音読み) and Kunyomi（訓読み) are ways to pronounce Kanji in Japanese. 
          <br></br>Onyomi is the Chinese reading of the Kanji. You will pronounce the word based on the Chinese pronunciation.
          <br></br>Kunyomi is the Japanese reading of the Kanji You will pronounce the word based on the pronunciation of the Japanese word.
          </p>
          <p>
            There are three buttons that you can explore of Kanjis. Just click the below buttons and explore our website to learn Kanji!
          </p>
          
          <Link to ="/beginner" >
          <button type="button" className="main-btn btn btn-primary">Beginner</button>
          </Link>
          <Link to ="/intermediate">
          <button type="button" className="main-btn btn btn-primary">Intermediate</button>
          </Link>
          <Link to="/advanced">
          <button type="button" className="main-btn btn btn-primary">Advanced</button> 
          </Link>
        </div>
    
    )
  }
}
