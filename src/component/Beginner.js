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
    

export default class Beginner extends Component {
  state ={
      kanji_list : [],
      isLoading : true
  }

  componentDidMount() {
      axios.request(options).then(({data}) => {
        this.setState({kanji_list : data, isLoading : false})
      })
  }
    render() {
    const { kanji_list, isLoading } = this.state;
    if(isLoading) return <Loader/>;
    // console.log(kanji_list)
    return (
      <div>
      <h3>Beginner / 初級</h3>
      <main className="flex">
        
       {kanji_list
        .filter((kanjiElement) => kanjiElement.kanji.strokes.count <= 2) // use select strokes from 1 to 22 // beginner 1-7 // intermediate 8-14 // advanced 15-22
        .map((kanjiElement)=>{
         return (
          <ul className="card" key={kanjiElement.kanji.character}>
            <div className="kanji-bookmark">
              <h2>{kanjiElement.kanji.character}</h2>
              <li><span><i class="fa fa-bookmark" aria-hidden="true"></i></span></li>
            </div>
          <li><strong>Onyomi:</strong> {kanjiElement.kanji.onyomi.katakana}({kanjiElement.kanji.onyomi.romaji})</li>
          {/* onyomi meaning add */}
          <li><strong>Kunyomi:</strong> {kanjiElement.kanji.kunyomi.hiragana}({kanjiElement.kanji.kunyomi.romaji})</li>
          <li><strong>Meaning:</strong> {kanjiElement.kanji.meaning.english}</li>
          <hr></hr>
          <li> <strong>Examples:</strong>
          {kanjiElement.examples.map(example => {return(
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

