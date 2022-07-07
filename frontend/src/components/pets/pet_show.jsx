import React from "react";
import { formatDate } from '../../util/date_util';


class PetShow extends React.Component {
    constructor(props) {
        super(props);
        this.feed = this.feed.bind(this);
        this.play = this.play.bind(this);
        this.pat = this.pat.bind(this);
        this.shower = this.shower.bind(this);
        this.pickaPet = this.pickaPet.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchUser(this.props.currentUser.id);
        this.props.requestPet(this.props.ownProps.match.params.petId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.petId !== this.props.petId) {
            this.componentDidMount();
        }
    }

    feed() {
        const action = document.createElement("img");
        action.src = this.props.pet.feedGif;
        action.className = "pet-show-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";

        setInterval(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
        }, 5000);
    }

    play() {
        const action = document.createElement("img");
        action.src = this.props.pet.playGif;
        action.className = "pet-show-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";

        setInterval(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
        }, 7000);
    }

    pat() {
        const action = document.createElement("img");
        action.src = this.props.pet.patGif;
        action.className = "pet-show-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";

        setInterval(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
        }, 5000);
    }
    shower() {
        const action = document.createElement("img");
        action.src = this.props.pet.showerGif;
        action.className = "pet-show-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";

        setInterval(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
        }, 5000);
    }

    pickaPet() {      
        // debugger;    
        if (this.props.ownProps.location.state && this.props.ownProps.location.state.prevPath === '/pets') {
            return <div>
                <button>Pick this Pet</button>
            </div>
        } else {
           return <div>
                <div><button onClick={this.feed} className="pet-show-button">Feed</button></div>
                <div><button onClick={this.play} className="pet-show-button">Play</button></div>
                <div><button onClick={this.pat} className="pet-show-button">Pat</button></div>
                <div><button onClick={this.shower} className="pet-show-button">Shower</button></div>
            </div> 
        }
    }

    render() {
        const { pet, user, prevPath } = this.props;

        if(!(pet && user.pets)) return null;
        // debugger;

        return (
            <div className="pet-show-container">
                <div className="pet-show-information">
                    <li>Name: {pet.name}</li>
                    <li>Species: {pet.species}</li>
                    <li>Breed: {pet.breed}</li>
                    <li>Birthday: {formatDate(pet.birthday)}</li>
                    <li>Gender: {pet.gender}</li>
                </div>

                <div className="pet-show-interact">
                    <div className="image-container">
                        <img className="pet-show-image" id="showPet" src={pet.showGif} key={Math.random().toString(36)} />
                    </div>

                    <div className="pet-show-button">
                        {this.pickaPet()}
                    </div>
                </div>

                <div className="pet-show-description">
                    <div className="pet-info-description">Description: {pet.description}</div>
                </div>

            </div>
        );
    }
}

export default PetShow;