import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../redux/pokeReducer';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getPokemon();
    }

    render(){
        const {pokemon} = this.props.pokeReducer;
        return (
            <main className='dashboard'>
                <h1>Your Pokemon</h1>
                <section>
                    <img src={pokemon.data?.sprites.front_default} alt={pokemon.data?.name}/>
                    <h3>{pokemon.data?.name}</h3>
                    <button onClick={this.props.getPokemon}>Change Pokemon</button>
                </section>
            </main>
        )
    }
}

const mapStateToProps = reduxState => ({pokeReducer: reduxState.pokeReducer});

export default connect(mapStateToProps, {getPokemon})(Dashboard);