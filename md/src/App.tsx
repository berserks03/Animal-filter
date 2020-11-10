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
  const [result, setResult] = useState(1);
  const [clicked, setClicked] = useState(true);
  

  return (
    
    <div className="animal-app">
      <div className="container">
        <div className="row center-xs">
          <br />
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(2)}>Suņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(3)}>Kaķi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(4)}>Zirgi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(5)}>Ziloņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(6)}>Sikspārņi</button>
          </div>
          <div className="col-xs-2">
            <button type="button" onClick={()=>setResult(7)}>Delfīni</button>
          </div>
        </div>
      </div>
      <div className="div">
        Selected is : {result}
        <br />
        <button type="button" onClick={()=>setResult(1)} className="reset">Reset</button>
      </div>
      <br />
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===2)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button>
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===3)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button>            
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===4)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===5)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===6)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button> 
          </div>
          <div className="col-xs-4">
            <button type="button" onClick={() => setClicked(!clicked)}>
              {clicked?<img src={(result===7)?avots[result-1].imgSrc:avots[0].imgSrc} alt="" />:<p>{avots[result-1].description}</p>}
            </button> 
          </div>
        </div>
      </div>
      
    </div>
    
  );
  
};

export default AnimalApp;
