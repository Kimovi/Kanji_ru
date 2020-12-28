import React, { Component } from 'react'
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all',
    headers: {
      'x-rapidapi-key': 'a8f2f655a0msh69924ca4957c230p142975jsn6488e962ac27',
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com'
    }
  };
    

export default class Intermediate extends Component {
  state ={
      kanji_list : []
  }

  componentDidMount() {
      axios.request(options).then(({data}) => {
        this.setState({kanji_list : data})
      })
  }
    render() {
    const { kanji_list } = this.state;
    // console.log(kanji_list)
    return (
      <main className ="flex">
       {kanji_list
        .filter((kanjiElement) => kanjiElement.kanji.strokes.count >=9 && kanjiElement.kanji.strokes.count < 14) // use select strokes from 1 to 22 // beginner 1-7 // intermediate 8-14 // advanced 15-22
        .map((kanjiElement)=>{
         return (
          <ul className="card" key={kanjiElement.kanji.character}>
            <h2>{kanjiElement.kanji.character}</h2>
            <li>Onyomi: {kanjiElement.kanji.onyomi.katakana}({kanjiElement.kanji.onyomi.romaji})</li>
            {/* onyomi meaning add */}
            <li>Kunyomi: {kanjiElement.kanji.kunyomi.hiragana}({kanjiElement.kanji.kunyomi.romaji})</li>
            <li>Meaning: {kanjiElement.kanji.meaning.english}</li>
            <hr></hr>
            <li>Examples: {kanjiElement.examples.map(example => {return(
              <div>
                <li>
                {example.japanese}
                {example.meaning.english}
                </li>
              </div>
            )})}</li>
            {/*nedd to add audio, give example only 2 */}
          </ul>
         )
       })}
      </main>
    )
  }
}