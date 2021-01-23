import React, { useState } from 'react';
import KanjiExp from './KanjiExample';

const KanjiCard = ({kanjiElement }) => {
    const [showExample, setState] = useState(false);

    const handleClick = (clickEvent) =>{
        setState(!showExample);
    }

    return (
        <div>
            <ul className="card" key={kanjiElement.references.kodansha}>
            <div className="kanji-bookmark">
            <h2>{kanjiElement.kanji.character}</h2>
            <li><span><i className="fa fa-bookmark" aria-hidden="true"></i></span></li>
            </div>
            <li><strong>Onyomi:</strong> {kanjiElement.kanji.onyomi.katakana}({kanjiElement.kanji.onyomi.romaji})</li>
            <li><strong>Kunyomi:</strong> {kanjiElement.kanji.kunyomi.hiragana}({kanjiElement.kanji.kunyomi.romaji})</li>
            <li><strong>Meaning:</strong> {kanjiElement.kanji.meaning.english}</li>
            <hr></hr>
            <li> 
                <button className="expBtn" id = {kanjiElement.references.kodansha} onClick = {handleClick}>More Examples</button>
                {kanjiElement.examples.slice(0, showExample?kanjiElement.examples.length : 1).map(example => {return(
                    <KanjiExp example = {example} kanji = {kanjiElement.references.kodansha}/>
                )})}          
            </li>
            </ul>       
        </div>
    );
};

export default KanjiCard;