import { useState } from "react";
import '../css/home.css';

const Home = () => {

    const [animal, setAnimal] = useState('Black Bear'); //initial value
    // why state? Because every time state is MUTATED the component will
    // reload/render/update

    // const changeAnimal = () => {
    //     console.log('BUTTON CLICKED!!');
    //     animal ='Tiger';
    // }
    // this is the wrong way to change state
    // in order to properly change state:
    // we have to make a copy
    // change the copy
    // set the state to that copy; specifically using the setter!

    const changeAnimal = () => {
        if (animal === 'Black Bear'){
            setAnimal('Tiger');
        }else{
            setAnimal('Black Bear');
    };
    }
    return (
        <div>
            <h1>This will be the home page</h1>
            <h3>{animal}</h3>
            {/* <h3>{}</h3> */}
            <button className="btn btn-warning" onClick={changeAnimal}>Change Animal</button>
            <h4>Do you like black bears or tigers</h4>
            <h5>A bunch of home page stuff</h5>
            <h6>More home page stuff</h6>
        </div>
    );
}
export default Home;