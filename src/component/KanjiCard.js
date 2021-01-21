import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const KanjiCard = ({kanjiElement, showExample, toggleExampleHandler}) => {
    const handleClick = (clickEvent) =>{
        toggleExampleHandler(kanjiElement.references.kodansha)
    }

    return (
        <div>
            <ul className="card" key={kanjiElement.kanji.character}>
            <div className="kanji-bookmark">
            <h2>{kanjiElement.kanji.character}</h2>
            <li><span><i class="fa fa-bookmark" aria-hidden="true"></i></span></li>
            </div>
            <li><strong>Onyomi:</strong> {kanjiElement.kanji.onyomi.katakana}({kanjiElement.kanji.onyomi.romaji})</li>
            <li><strong>Kunyomi:</strong> {kanjiElement.kanji.kunyomi.hiragana}({kanjiElement.kanji.kunyomi.romaji})</li>
            <li><strong>Meaning:</strong> {kanjiElement.kanji.meaning.english}</li>
            <hr></hr>
            <li> <strong>Examples:</strong>
                <button id = {kanjiElement.references.kodansha} onClick = {handleClick}>More Examples</button>
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
        </div>
    );
};

export default KanjiCard;