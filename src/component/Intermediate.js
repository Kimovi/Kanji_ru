import React, { Component } from 'react'
import axios from "axios";
import Loader from "./Loader"
import ReactAudioPlayer from 'react-audio-player';
import Paginate from './Paginate'
import paginationBasic from './Paginate';

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
      kanji_list : [],
      isLoading : true,
      showExample : false,

  }

  componentDidMount() {
      axios.request(options).then(({data}) => {
        this.setState({kanji_list : data, isLoading : false })
      })
  }

  toggleExampleHandler = (e) =>{
    const doesShow = this.state.showExample;
    this.setState({showExample : !doesShow})
  }

    render() {
    const { kanji_list, isLoading, showExample} = this.state;
    if(isLoading) return <Loader/>;
    // console.log(kanji_list)
    return (
      <div>
      <h3>Intermediate / 中級 </h3>
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
            <button id = {kanjiElement.references.kodansha} onClick = {this.toggleExampleHandler}>Examples</button>
            <li> <strong>Examples:</strong>
            {kanjiElement.examples.slice(0, showExample?kanjiElement.examples.length : 2).map(example => {return(
              <div key={example.japanese}>
                <p>
                {example.japanese}
                {example.meaning.english}
                </p>
              <ReactAudioPlayer
              src={example.audio.opus}
              controls
              />
                </div>
            )})}          
              </li>
          </ul>
         )
       })}
      </main>
      </div>
    )
  }
}