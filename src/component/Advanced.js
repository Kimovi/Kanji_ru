import React, { Component } from 'react'
import axios from "axios";
import Loader from "./Loader"
import KanjiCard from "./KanjiCard"

const options = {
    method: 'GET',
    url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/all',
    headers: {
      'x-rapidapi-key': 'a8f2f655a0msh69924ca4957c230p142975jsn6488e962ac27',
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com'
    }
  };
    

export default class Advanced extends Component {
  state ={
      kanji_list : [],
      isLoading : true,
      showExample : false,

  }

  componentDidMount() {
      axios.request(options).then(({data}) => {
        this.setState({kanji_list : data, isLoading:false})
      })
  }

  toggleExampleHandler = (e) =>{
    const doesShow = this.state.showExample;
    this.setState({showExample : !doesShow})
  }


    render() {
      const { kanji_list, isLoading, showExample } = this.state;
      if(isLoading) return <Loader/>;

    return (
      <div>
      <h3>Advanced / 高級 </h3>
      <main className="flex">
       {kanji_list
        .filter((kanjiElement) => kanjiElement.kanji.strokes.count >= 15) //>= 15 use select strokes from 1 to 22 // beginner 1-7 // intermediate 8-14 // advanced 15-22
        .map((kanjiElement)=>{
         return (
           <KanjiCard kanjiElement = {kanjiElement}/>
         )
       })}
      </main>
      </div>
    )
  }
}