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
    

export default class KanjiList extends Component {
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
      <main>
       {kanji_list
        .filter((kanjiElement) => kanjiElement.kanji.strokes.count === 2) // use select strokes from 1 to 22 // beginner 1-7 // intermediate 8-14 // advanced 15-22
        .map((kanjiElement)=>{
         return (
           <ul key={kanjiElement.kanji.character}>
            <li>{kanjiElement.kanji.character}</li>
            <li>{kanjiElement.kanji.meaning.english}</li>
              <li>{kanjiElement.examples.map(example =>example.japanese)}</li>
            {/* // <li>{kanjiElement.kanji.examples[0].meaning.english}</li> */}
          </ul>
         )
       })}
      </main>
    )
  }
}