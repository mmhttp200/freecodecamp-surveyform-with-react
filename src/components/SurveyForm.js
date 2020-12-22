import {Fragment, useEffect, useState} from 'react'

export default function SurveyForm(props){

    const [nextStep, setNextStep] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [improvement, setImprovement] = useState([]);
    const [favorites, setFavorites] = useState({
                                                'Front-end Projects': false,
                                                'Back-end Projects': false,
                                                'Data Visualization': false,
                                                'Open Source Community': false,
                                                'Gitter help rooms': false,
                                                'Videos': false,
                                                'City Meetups': false,
                                                'Wiki': false,
                                                'Forum': false,
                                                'Challenges': false,
                                                'Additional Courses': false
                                                });
    const [suggestions, setSuggestions] = useState('');

    const errors = {
        name: false,
        email: false,
        age: false,
        role: false,
        recommendation: false,
        improvement: false,
        favorites: false,
        suggestions: false
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setNextStep(true);
    }

    const handleFavorites = (e)=>{
        const prop = e.target.getAttribute('data-item');
        setFavorites({...favorites, [prop]: e.target.value});
    }

if(nextStep){

    return (
        <div className="text-center">
            <h1>Result</h1>
            <label>
                <p>
                <b>Name:</b><br />
                <output>{name}</output>
                </p>
            </label>
            <label>
            <p>
            <b>Email:</b><br />
                <output>{email}</output>
                </p>
            </label>
            <label>
            <p>
            <b>Age:</b><br />
                <output>{age}</output>
                </p>
            </label>
            <label>
            <p>
            <b>Role:</b><br />
                <output>{role}</output>
                </p>
            </label>
            <label>
            <p>
            <b>Recommendation:</b><br />
                <output>{recommendation}</output>
                </p>
            </label>
            <label>
            <p>
            <b>Improvement:</b><br />
                <output>{improvement}</output>
            </p>
            </label>
            <label>
            <p>
            <b>Favorites:</b><br />
                <output><ul>{Object.keys(favorites).map(fav=>{
                    return <li>{fav}</li>
                })}</ul></output>
            </p>
            </label>
            <label>
            <p>
            <b>Suggestions:</b><br />
                <output>{suggestions}</output>
                </p>
            </label>
            
        </div>
    )

}else{

    return (
        <form method="post" onSubmit={(e)=>handleSubmit(e)}>
            <h1>Form</h1>
            <p>
            <label htmlFor="name"><b>Name</b><br />
            {errors.name && <sub>{errors.name}</sub>}
                <input required type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name"  id="name" placeholder="Write your name" />
            </label>
            </p>
            <p>
            <label htmlFor="email"><b>Email</b><br />
            {errors.email && <sub>{errors.email}<br /></sub>}
                <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  id="email" placeholder="Write your email" />
            </label>
            </p>
            <p>
            <label htmlFor="age"><b>Age</b><br />
            {errors.age && <sub>{errors.age}<br /></sub>}
                <input required type="number" value={age} onChange={(e)=>setAge(e.target.value)} name="age"  min="0" name="age" id="age" placeholder="Your age (only numbers)" />
            </label>
            </p>
            <p>
            <label htmlFor="current-role"><b>Which option best describes your current role?</b><br />
            {errors.role && <sub>{errors.role}<br /></sub>}
                <select required id="current-role" defaultValue="none" value={role} onChange={(e)=>setRole(e.target.value)} name="current-role"  >
                    <option key="none" hidden>Choose one option</option>
                    <option key="0">Student</option>
                    <option key="1">Fulltime Job</option>
                    <option key="2">Part-time job</option>
                    <option key="3">Other</option>
                </select>
            </label>
            </p>
            <p>
            <fieldset>
            <legend><b>Would you recommend freeCodeCamp to a friend?</b></legend>
            {errors.recommendation && <sub>{errors.recommendation}<br /></sub>}
            <input type="radio" value="definetely" onChange={(e)=>setRecommendation(e.target.value)} id="definetely" name="recommendation-rate"  /> <label htmlFor="definetely">Definetely</label><br />
            <input type="radio" value="maybe" onChange={(e)=>setRecommendation(e.target.value)} id="maybe" name="recommendation-rate"  /> <label htmlFor="maybe">Maybe</label><br />
            <input type="radio" value="not-sure" onChange={(e)=>setRecommendation(e.target.value)} id="not-sure" name="recommendation-rate"  /> <label htmlFor="not-sure">Not sure</label><br />
            </fieldset>
            </p>
            <p>
            <label htmlFor="improvement"><b>What would you like to see improved?</b><br />
            {errors.improvement && <sub>{errors.improvement}<br /></sub>}
            <select required id="improvement" defaultvalue="none" value={improvement} onChange={(e)=>setImprovement(e.target.value)} name="improvement" >
                    <option key="none" hidden>Choose one option</option>
                    <option key="0">Challenges</option>
                    <option key="1">Projects</option>
                    <option key="2">Community</option>
                    <option key="3">Open Source</option>
                </select>
            </label>
            </p>
            <p>
            <fieldset>
            <legend><b>What is your favorite feature of freeCodeCamp? </b></legend>
            {errors.favorite && <sub>{errors.favorites}<br /></sub>}
            <input type="checkbox" key="0" id="front-end-projects" name="favorite" checked={favorites.frontEndProjects} onChange={(e)=>handleFavorites(e)} data-item="Front-end Projects" /> <label htmlFor="front-end-projects">Front-end Projects</label><br />
            <input type="checkbox" key="1" id="back-end-projects" name="favorite" checked={favorites.backEndProjects} onChange={(e)=>handleFavorites(e)} data-item="Back-end Projects" /> <label htmlFor="back-end-projects">Back-end Projects</label><br />
            <input type="checkbox" key="2" id="data-visualization" name="favorite" checked={favorites.dataVisualization} onChange={(e)=>handleFavorites(e)} data-item="Data Visualization" /> <label htmlFor="data-visualization">Data Visualization</label><br />
            <input type="checkbox" key="3" id="challenges" name="favorite" checked={favorites.challenges} onChange={(e)=>handleFavorites(e)} data-item="Challenges" /> <label htmlFor="challenges">Challenges</label><br />
            <input type="checkbox" key="4" id="open-source-community" checked={favorites.openSourceCommunity} name="favorite" onChange={(e)=>handleFavorites(e)} data-item="Open Source Community" /> <label htmlFor="open-source-community">Open Source Community</label><br />
            <input type="checkbox" key="5" id="gitter-help-rooms" checked={favorites.gitterHelpRooms} name="favorite" onChange={(e)=>handleFavorites(e)} data-item="Gitter help rooms" /> <label htmlFor="gitter-help-rooms">Gitter help rooms</label><br />
            <input type="checkbox" key="6" id="videos" name="favorite" checked={favorites.videos} onChange={(e)=>handleFavorites(e)} data-item="Videos" /> <label htmlFor="videos">Videos</label><br />
            <input type="checkbox" key="7" id="city-meetups" checked={favorites.cityMeetups} name="favorite" onChange={(e)=>handleFavorites(e)} data-item="City Meetups" /> <label htmlFor="city-meetups">City Meetups</label><br />
            <input type="checkbox" key="8" id="wiki" name="favorite" checked={favorites.wiki} onChange={(e)=>handleFavorites(e)} data-item="Wiki" /> <label htmlFor="wiki">Wiki</label><br />
            <input type="checkbox" key="9" id="forum" name="favorite" checked={favorites.forum} onChange={(e)=>handleFavorites(e)} data-item="Forum" /> <label htmlFor="forum">Forum</label><br />
            <input type="checkbox" key="10" id="additional-courses" checked={favorites.additionalCourses} name="favorite" onChange={(e)=>handleFavorites(e)} data-item="Additional Courses" /> <label htmlFor="additional-courses">Additional Courses</label><br />
            </fieldset>
            </p>
            <p>
                <label htmlFor="suggestions">
                    <b>Any comments or suggestions?</b><br />
                    {errors.suggestions && <sub>{errors.suggestions}<br /></sub>}
                    <textarea value={suggestions} onChange={(e)=>setSuggestions(e.target.value)} placeholder="Write your suggestions" name="suggestions" id="suggestions"  />
                </label>
            </p>
            <p>
            <button type="submit">Submit</button>
            </p>
        </form>
    )
}
}