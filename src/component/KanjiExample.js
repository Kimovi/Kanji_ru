import React from 'react'

const KanjiExp = ({example}) => {
        let audio = new Audio(example.audio.opus);
        const start = () => {
          audio.play()
        }
    
    return (
        <div key={example.japanese}>
        <p>
            {example.japanese}
            {example.meaning.english}
            <button onClick={start} id="audioBtn"><ion-icon name="caret-forward-circle-outline" id="audio-icon"></ion-icon></button>
            <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
        </p>
        </div>
    )
}

export default KanjiExp;