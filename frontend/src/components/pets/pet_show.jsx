import React from "react";
import '../../styles/petshow.css';
import { formatDate } from '../../util/date_util';


class PetShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = ""
        this.feed = this.feed.bind(this);
        this.play = this.play.bind(this);
        this.pat = this.pat.bind(this);
        this.shower = this.shower.bind(this);
        // debugger
    }

    componentDidMount() {
        this.props.fetchUser(this.props.ownProps.match.params.id);
        // this.props.fetchUser(this.props.user.id)
        this.props.requestPet(this.props.petId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.petId !== this.props.petId) {
            this.componentDidMount();
        }
    }


    feed() {
        document.getElementById("feedPet").style.display = "block";
        document.getElementById("showPet").style.display = "none";
        setInterval(() => {
            document.getElementById("feedPet").style.display = "none";
            document.getElementById("showPet").style.display = "block";
        }, 5000);

        // var petAction = document.getElementById("pet-actions")
        // document.getElementsByClassName("pet-show-image").src = this.props.pet.feedGif;

        // const feedAction = document.createElement('img')
        // feedAction.src = this.props.pet.feedGif;
        // document.querySelector(".image-container").appendChild(feedAction)

        // document.getElementsByClassName("pet-show-image").key = this.props.pet.feedGif;
        // debugger;
    }
    play() {
        document.getElementById("playPet").style.display = "block";
        document.getElementById("showPet").style.display = "none";
        setInterval(() => {
            document.getElementById("playPet").style.display = "none";
            document.getElementById("showPet").style.display = "block";
        }, 7000);
        // var petAction = document.getElementById("pet-actions")
        // document.getElementsByClassName("pet-show-image").src = this.props.pet.playGif;
        // document.getElementsByClassName("pet-show-image").key = this.props.pet.playGif;
        // debugger;
    }

    pat() {
        document.getElementById("patPet").style.display = "block"
        document.getElementById("showPet").style.display = "none";
        setInterval(() => {
            document.getElementById("patPet").style.display = "none"
            document.getElementById("showPet").style.display = "block";
        }, 5000);
        // var petAction = document.getElementById("pet-actions")
        // document.getElementsByClassName("pet-show-image").src = this.props.pet.patGif;
        // document.getElementsByClassName("pet-show-image").key = this.props.pet.patGif;
        // debugger;

    }
    shower() {
        document.getElementById("showerPet").style.display = "block"
        document.getElementById("showPet").style.display = "none";
        setInterval(() => {
            document.getElementById("showerPet").style.display = "none"
            document.getElementById("showPet").style.display = "block";
        }, 5000);
        // var petAction = document.getElementById("pet-actions")
        // document.getElementsByClassName("pet-show-image").src = this.props.pet.showerGif;
        // document.getElementsByClassName("pet-show-image").key = this.props.pet.showerGif;
        // debugger
    }

    render() {
        const { pet, user } = this.props;
        // console.log(this.props)
        // console.log(this.state)
        // if (!pet) return null;
        if (Object.values(user).length === 0) return null;
        if (Object.values(pet).length === 0) return null;
        if (Object.values(user.pets) === 0) return null;
        // if (Object.values(this.props.pet) === 0) return null;
        // debugger

        let pickaPet = (user.pets.length !== 0 && user.pets.includes(pet._id)) ? (
            <div>


                <div><button onClick={this.feed}>Feed</button></div>
                <div><button onClick={this.play}>Play</button></div>
                <div><button onClick={this.pat}>Pat</button></div>
                <div><button onClick={this.shower}>Shower</button></div>
            </div>
        ) : (
            <div><button>Pick this Pet</button></div>
        );


        return (
            <div className="pet-show-container">
                <div className="pet-show-info-container-1">
                    <div className="pet-show-information">
                        <div className="pet-info">Name: {pet.name}</div>
                        <div className="pet-info">Species: {pet.species}</div>
                        <div className="pet-info">Breed: {pet.breed}</div>
                        <div className="pet-info">Birthday: {formatDate(pet.birthday)}</div>
                        <div className="pet-info">Gender: {pet.gender}</div>
                    </div>
                    <div className="image-container">
                        <img className="pet-show-image" id="showPet" src={pet.showGif} key={Math.random().toString(36)} />
                        <img className="pet-show-image" id="feedPet" src={pet.feedGif} key={Math.random().toString(36)} />
                        <img className="pet-show-image" id="playPet" src={pet.playGif} key={Math.random().toString(36)} />
                        <img className="pet-show-image" id="showerPet" src={pet.showerGif} key={Math.random().toString(36)} />
                        <img className="pet-show-image" id="patPet" src={pet.patGif} key={Math.random().toString(36)} />
                    </div>
                    <div className="pet-show-button">
                        {pickaPet}
                    </div>
                </div>
                <div className="pet-show-info-container-2">
                    <div className="pet-show-description">
                        <div className="pet-info-description"><span>Description:</span> {pet.description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetShow;