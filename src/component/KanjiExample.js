import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';


const KanjiExp = ({example}) => {
    return (
        <div key={example.japanese}>
        <p>
        {example.japanese}
        {example.meaning.english}
        </p>
            <button data-source="opus" data-audioid={example.audio.opus}><ion-icon name="alarm-outline"></ion-icon></button>
            <audio source src={example.audio.opus} controls />
            <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>

        </div>
    )
}

export default KanjiExp;

