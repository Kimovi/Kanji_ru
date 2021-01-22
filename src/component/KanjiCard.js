import React, { useState } from 'react';
import KanjiExp from './KanjiExample';

const KanjiCard = ({kanjiElement }) => {
    const [showExample, setState] = useState(false);

    const toggleExampleHandler = () =>{
        const doesShow = this.state.showExample;
        // return this.state.kanji_list.map(kanji => kanji.references.kodansha).filter(eachkodansha => eachkodansha !== tgt) ? console.log("true"):console.log("false")
      }

    const handleClick = (clickEvent) =>{
        console.log('clicked')
        setState(true);
        console.log(showExample)
        return 
        // toggleExampleHandler(kanjiElement.references.kodansha)
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
                {kanjiElement.examples.slice(0, showExample?kanjiElement.examples.length : 1).map(example => {return(
                    <KanjiExp example = {example}/>
                )})}          
            </li>
            </ul>       
        </div>
    );
};

export default KanjiCard;