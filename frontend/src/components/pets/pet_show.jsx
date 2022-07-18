import React from "react";
import { formatDate, formatDateTime } from '../../util/date_util';


class PetShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.ownProps.location.state;
        this.feed = this.feed.bind(this);
        this.play = this.play.bind(this);
        this.pat = this.pat.bind(this);
        this.shower = this.shower.bind(this);
        this.pickaPet = this.pickaPet.bind(this);
        this.user = this.props.user
        this.points = this.points.bind(this)
        this.userPoints = this.userPoints.bind(this)
    }

    componentDidMount() {
        // debugger;
        this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchUser(this.props.user.id);
        this.props.requestPet(this.props.petId);
        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.petId !== this.props.petId) {
            this.componentDidMount();
        }
    }

    points() {
            this.user.points += 1
            this.props.updateUser(this.user)
            this.props.updatePet(this.props.pet)
    }


    async feed() {
        const action = document.createElement("img");
        action.src = this.props.pet.feedGif;
        action.className = "pet-show-image"
        action.id = "pet-feed-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";
        document.getElementById("feedButton").style.display = "none";
        document.getElementById("playButton").style.display = "none";
        document.getElementById("patButton").style.display = "none";
        document.getElementById("showerButton").style.display = "none";
        
        this.props.pet.last_fed = formatDateTime(Date.now());
        // this.props.updatePet(this.props.pet)

        setTimeout(() => {
            this.points()
        }, 4900)

        setTimeout(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
            document.getElementById("feedButton").style.display = "block";
            document.getElementById("playButton").style.display = "block";
            document.getElementById("patButton").style.display = "block";
            document.getElementById("showerButton").style.display = "block";
        }, 5000);
        // debugger
    }

    async play() {
        const action = document.createElement("img");
        action.src = this.props.pet.playGif;
        action.className = "pet-show-image"
        action.id = "pet-play-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";
        document.getElementById("feedButton").style.display = "none";
        document.getElementById("playButton").style.display = "none";
        document.getElementById("patButton").style.display = "none";
        document.getElementById("showerButton").style.display = "none";

        this.props.pet.last_play = formatDateTime(Date.now());
        // this.props.updatePet(this.props.pet)

        setTimeout(() => {
            this.points()
        }, 6900)

        setTimeout(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
            document.getElementById("feedButton").style.display = "block";
            document.getElementById("playButton").style.display = "block";
            document.getElementById("patButton").style.display = "block";
            document.getElementById("showerButton").style.display = "block";
        
        }, 7000);
    }

    async pat() {
        const action = document.createElement("img");
        action.src = this.props.pet.patGif;
        action.className = "pet-show-image"
        action.id = "pet-pat-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";
        document.getElementById("feedButton").style.display = "none";
        document.getElementById("playButton").style.display = "none";
        document.getElementById("patButton").style.display = "none";
        document.getElementById("showerButton").style.display = "none";

        this.props.pet.last_pet = formatDateTime(Date.now());
        // this.props.updatePet(this.props.pet)

        setTimeout(() => {
            this.points()
        }, 4990)

        setTimeout(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
            document.getElementById("feedButton").style.display = "block";
            document.getElementById("playButton").style.display = "block";
            document.getElementById("patButton").style.display = "block";
            document.getElementById("showerButton").style.display = "block";
        }, 5000);
    }

    async shower() {
        const action = document.createElement("img");
        action.src = this.props.pet.showerGif;
        action.className = "pet-show-image"
        action.id = "pet-shower-image"
        document.querySelector(".image-container").appendChild(action);
        document.getElementById("showPet").style.display = "none";
        document.getElementById("feedButton").style.display = "none";
        document.getElementById("playButton").style.display = "none";
        document.getElementById("patButton").style.display = "none";
        document.getElementById("showerButton").style.display = "none"; 

        this.props.pet.last_bathed = formatDateTime(Date.now());
        // this.props.updatePet(this.props.pet)

        setTimeout(() => {
            this.points()
        }, 4999)

        setTimeout(() => {
            document.querySelector(".image-container").removeChild(action)
            document.getElementById("showPet").style.display = "block";
            document.getElementById("feedButton").style.display = "block";
            document.getElementById("playButton").style.display = "block";
            document.getElementById("patButton").style.display = "block";
            document.getElementById("showerButton").style.display = "block";
        }, 5000);
    }

    adopt(user, petId) {
        // debugger

        if (this.user.points > 50) {
           this.user.points -= 50
           this.props.updateUser(this.user)
           this.props.adoptPet(user, petId)
            .then(this.props.ownProps.history.push(`/users/${this.props.user.id}`))
        
        }

    }

    pickaPet() {      
        debugger;
        if (this.props.adopted) {
            return <div className="pet-show-button">
                <button onClick={this.feed} id="feedButton" className="pet-show-button">Feed</button>
                <button onClick={this.play} id="playButton" className="pet-show-button">Play</button>
                <button onClick={this.pat} id="patButton" className="pet-show-button">Pat</button>
                <button onClick={this.shower} id="showerButton" className="pet-show-button">Shower</button>
            </div> 
        } else {
            return <div className="pet-show-button-adopt">
                {
                    (this.props.user.pets.length < 4 && this.props.user.points > 50) ?
                    <button onClick={() => this.adopt(this.props.user, this.props.pet._id)}>Pick this Pet</button> :
                    <button className="max-pets" disabled>max pets or not enough points</button>
                }
            </div>
        }
    }

    userPoints () {
        // debugger
        if (this.props.user._id === this.props.currentUser.id) {
            return "Points: " + this.props.user.points
        }   else {
            return null
        }
    }

    render() {
        const { pet, user, currentUser } = this.props;
        // console.log(currentUser)
        
        
        
        if(!(pet && user.pets)) return null;

        return (
            <div className="pet-show-container">
                <div className="pet-show-information">
                    <h2>about this pet</h2>
                    <li>Name: {pet.name}</li>
                    <li>Species: {pet.species}</li>
                    <li>Breed: {pet.breed}</li>
                    <li>Birthday: {formatDate(pet.birthday)}</li>
                    <li>Gender: {pet.gender}</li>
                    <li>Last Fed: {pet.last_fed}</li>
                    <li>Last Play: {pet.last_play}</li>
                    <li>Last Pat: {pet.last_pet}</li>
                    <li>Last Shower: {pet.last_bathed}</li>

                    {/* <li className="points">Points: {user.points}</li> */}
                    <li className="points">{this.userPoints()}</li>
                </div>

                <div className="pet-show-interact">
                    {this.pickaPet()}
                    
                    <div className="image-container">
                        <img className="pet-show-image" id="showPet" src={pet.showGif} key={Math.random().toString(36)} />
                    </div>

                </div>

                <div className="pet-show-description">
                    <div className="pet-info-description">
                        <h2>description</h2>
                        {pet.description}
                    </div>
                </div>

            </div>
        );
    }
}

export default PetShow;