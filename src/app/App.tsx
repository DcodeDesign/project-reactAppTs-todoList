import React from 'react';
import './App.css';
import Todo from "./components/todo/Todo";
import {Heroes} from "./components/heroes/Heroes";
import {ParentElem} from "./components/Child-to-parent/ParentElem/ParentElem";
import {ChildToParent} from "./components/Child-to-parent/ChildToParent";

const TASKS = [
    {name: "Course", description: "Acheter du pain et de la viande.", isFinished: false},
    {name: "Cours de SooBakhDoo", description: "16 h 30 salle DOJO3", isFinished: false},
    {name: "Aller chercher les enfants à l'école", description: "Xavier et Maxime finissent à 15 h 20 et Guillaume à 15h 15 ", isFinished: false},
    {name: "Apprentissage : Javascript - Promise", description: "Acheter du pain et de la viande?", isFinished: false},
    {name: "15h45: Entretien téléphonique", description: "Entretien téléphonique pour la formation dev Web Apps", isFinished: false}
];

class App extends React.Component<any, any>{
  public title: string;

  constructor(props: any) {
    super(props);
    this.title = 'AppReact';
  }

  render() {
    return (
        <React.Fragment>
          <h1>{this.title}</h1>
            <Todo todo={TASKS} />
            {/*<Heroes superhero={"Spiderman"} />*/}
            {/*<ChildToParent />*/}
        </React.Fragment>
    );
  }
}
export default App;
