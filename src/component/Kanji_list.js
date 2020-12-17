import React, { Component } from 'react'
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/%E8%A8%AA',
    headers: {
      'x-rapidapi-key': 'a8f2f655a0msh69924ca4957c230p142975jsn6488e962ac27',
      'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com'
    }
  };
    

export default class Kanji_list extends Component {
  state ={
      kanji_list : []
  }

  componentDidMount() {
    // axios
    //   .get(`https://country-back.herokuapp.com/api/countries`)
    //   .then(({ data }) => {
    //     this.setState({ countries: data, isLoading: false });
    //   });

      axios.request(options).then(function (response) {
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
        });
  }
    render() {
    return (
      <p>
        
      </p>
    )
  }
}