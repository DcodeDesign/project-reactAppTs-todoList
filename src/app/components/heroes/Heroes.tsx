import React from "react";

interface IProps {
    superhero: string;
}

interface IState {
    health: number;
}

const getInitialHealth = (props: IProps) => props.superhero === "Spiderman" ? 100 : 0;


export class Heroes extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            health: getInitialHealth(this.props)
        }
    }

    // readonly state = { health: getInitialHealth(this.props) };

    render() {
        return <span>{`${this.props.superhero} health is: ${this.state.health}`}</span>
    }
}


/* Quick fix

interface IProps {
  superhero: string;
}

interface IState {
  health: number;
}

export class MyComponent extends React.PureComponent<IProps, IState> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = { health: 100 };
  }

  render() {
    return <span>{`${this.props.superhero} health is: ${this.state.health}`}</span>
  }
}

 */
