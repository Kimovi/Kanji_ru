import React from 'react'

const KanjiExp = ({example , kanji}) => {
        let audio = new Audio(example.audio.opus);
        const start = () => {
          audio.play()
        }

    return (
        <div className = "kanjiExample">
                <p>{example.japanese}
                {example.meaning.english}</p>
                <button onClick = {start} id = "audioBtn"><ion-icon name="caret-forward-circle-outline" id="audio-icon"></ion-icon></button>
        </div>
    )
}

export default KanjiExp;