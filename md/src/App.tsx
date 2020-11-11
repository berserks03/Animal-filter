import React, { useState } from 'react';
import 'flexboxgrid';
import './App.css';

const avots = [
  {
    id: 1,
    name: 'default',
    description: 'default',
    imgSrc: 'https://freesvg.org/img/WoodlandAnimals.png',
  },
  {
    id: 2,
    name: 'Suņi',
    description: 'Suns jeb mājas suns zināms arī kā cilvēka labākais draugs(Canis lupus familiaris) ir suņu dzimtas (Canidae) plēsējs, kas ir viena no pelēkā vilka (Canis lupus) pasugām.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Afra_011.jpg',
  },
  {
    id: 3,
    name: 'Kaķi',
    description: 'Mājas kaķis jeb kaķis (Felis silvestris catus), arī domesticētais kaķis ir mazs, plēsīgs kaķu dzimtas zīdītājs, kurš pieradināts pirms vairāk nekā 9500 gadiem.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Domestic_cat_cropped.jpg',
  },
  {
    id: 4,
    name: 'Zirgi',
    description: 'Zirgs jeb mājas zirgs (Equus caballus) ir liels zīdītājs, piederošs vienai no septiņām Equus ģints mūsdienu sugām. Pie zirgiem pieder arī ēzelis, kulans un zebras.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/lv/0/05/Gatlings3.jpg',
  },
  {
    id: 5,
    name: 'Ziloņi',
    description: 'Ziloņi ir vislielākie uz sauszemes dzīvojošie zīdītāji. Izšķir 3 ziloņu sugas, kas tiek iedalītas 2 ģintīs: Āfrikas savannas zilonis (Loxodonta africana), Āfrikas meža zilonis (Loxodonta cyclotis) un Āzijas zilonis (Elephas maximus). Vislielākais no visiem ir Āfrikas savannas zilonis, kura tēviņš var sasniegt gandrīz 4 metru augstumu skaustā un 9 tonnas masu.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg',
  },
  {
    id: 6,
    name: 'Sikspārņi',
    description: 'Sikspārņi (Chiroptera) ir zīdītāju klases (Mammalia) kārta. To iedala divās apakškārtās: dižsikspārņos un sīksikspārņos.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg',
  },
  {
    id: 7,
    name: 'Delfīni',
    description: 'Par delfīniem sauc lielāko daļu zobvaļu apakškārtas (Odontoceti) dzīvnieku. Tie ir tuvi radinieki vaļiem un cūkdelfīniem. Ir gandrīz 40 delfīnu sugas, kas iedalītas 17 ģintīs.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Common_dolphin.jpg',
  },
];

const AnimalApp = () => {
  const [result, setResult] = useState([1]);
  const [clicked, setClicked] = useState(false);
  
  const onToggleArray = (item:number) => (
    (result.includes(item) ? result.filter(i => i !== item).map(filtered => filtered) : [ ...result, item ])
  );
  
  return (
    
    <div className="animal-app">
      <div className="container">
        <div className="row center-xs">
          <br />
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(2));setClicked(false);}}>Suņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(3));setClicked(false);}}>Kaķi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(4));setClicked(false);}}>Zirgi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(5));setClicked(false);}}>Ziloņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(6));setClicked(false);}}>Sikspārņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>{setResult(onToggleArray(7));setClicked(false);}}>Delfīni</button>
          </div>
        </div>
      </div>
      <div className="div">
        Selected is : {result};
        <br />
        Clicked is : {String(clicked)};
        <br />
        <button type="button" onClick={()=>{setResult([1]);setClicked(false);}} className="reset">Reset</button>
      </div>
      <br />
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(result.some(i=> i===2)&&!clicked)}>
              {!(result.some(i=> i===2) && clicked)?<img src={result.some(i=> i===2)?avots[1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[1].description}</p>}
            </button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked((result.some(i=> i===3))&&!clicked)}>
              {!((result.some(i=> i===3)) && clicked)?<img src={(result.some(i=> i===3))?avots[2].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[2].description}</p>}
            </button>            
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked((result.some(i=> i===4))&&!clicked)}>
              {!((result.some(i=> i===4)) && clicked)?<img src={(result.some(i=> i===4))?avots[3].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[3].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked((result.some(i=> i===5))&&!clicked)}>
              {!((result.some(i=> i===5)) && clicked)?<img src={(result.some(i=> i===5))?avots[4].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[4].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked((result.some(i=> i===6))&&!clicked)}>
              {!((result.some(i=> i===6)) && clicked)?<img src={(result.some(i=> i===6))?avots[5].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[5].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked((result.some(i=> i===7))&&!clicked)}>
              {!((result.some(i=> i===7)) && clicked)?<img src={(result.some(i=> i===7))?avots[6].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[6].description}</p>}
            </button> 
          </div>
        </div>
      </div>
      
    </div>
    
  );
  
};

export default AnimalApp;
