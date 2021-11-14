import React from "react";
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const selectProfile = (state) => state.profile;

const EditProfile = ()  => {
    const person = useSelector(selectProfile);

    const dispatch = useDispatch();

    const [name, setName] = useState(person.name);
    const [bio,setBio] = useState(person.bio);
    const [location,setLocation] = useState(person.location);
    const [website,setWebsite] = useState(person.website);

    var date1 = new Date();
    var date2 = date1.toISOString().substr(0,10);

    const datestring = new Date(person.dateOfBirth).toString().split(" ");
    var month = new Date(person.dateOfBirth).getMonth()+1
    var date = datestring[2]
    var year = datestring[3]
    var dob = year + "-" + month + "-" + date
    const [dateOfBirth, setDateOfBirth] = useState(dob);


    const handleNameChange=(event)=>{
        const newName = event.target.value;
        setName(newName)
        console.log(month, year, date)
    }

    const handleBioChange=(event)=>{
        const newBio = event.target.value;
        setBio(newBio)
    }

    const handleLocationChange=(event)=>{
        const newLocation = event.target.value;
        setLocation(newLocation)
    }

    const handleWebsiteChange=(event)=>{
        const newWebsite= event.target.value;
        setWebsite(newWebsite)
    }

    const handleDateOfBirthChange=(event)=>{
        const newDateOfBirth= event.target.value;
        setDateOfBirth(newDateOfBirth)
    }

    const saveProfile = () => {
        dispatch( {
            type: 'edit-profile',
            newName: name,
            newBio: bio,
            newLocation: location,
            newWebsite: website,
            newDateOfBirth: dateOfBirth
        });
    }

    return(<div className="mb-2">
            <div className="row mb-2">
                <Link to="/a7/twitter/profile" className="col-1 mt-1 ps-3">
                    <i className="fas fa-times" style={{fontSize:"18px", color:"white"}}></i>
                </Link>
                <div className="row col-8" style={{float:"left"}}>
                    <label style={{color:"white", fontSize:"20px", float:"left"}}><b>Edit profile</b></label>
                </div>
                <div className="row col-2 ms-5 me-1">
                    <Link to="/a7/twitter/profile">
                        <button onClick = {saveProfile} className="btn wd-button-profile rounded-pill text-nowrap p-1 ms-2 me-1" style={{background:"white", position:"absolute", float:"right", fontSize:"14px", color:"black"}}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mb-2">
                <img src ={person.bannerPicture} style={{width:"100%", height: "200px"}} alt="banner"></img>
            </div>
            <div className="row mb-0">
                <div className="col-7" style={{height:"45px"}}>
                    <img src={person.profilePicture} className="rounded-circle" style={{height:"100px", width:"100px", objectFit:"cover", position:"relative", top:"-60px", left:"15px", border:"solid black 3px"}} alt="profile pic"></img>
                </div>
            </div>

            <form  style={{color:"white"}}>
                <div className="border border-light rounded ps-2 pe-2 mb-2">
                    <span className="wd-textBoxPlaceholder">Name</span>
                    <br/>
                    <textarea className="wd-textBoxInput wd-edit-input" rows="1" maxLength="60" onChange={handleNameChange} value={name}></textarea>
                </div>

                <div className="border border-light rounded ps-2 pe-2 mb-2">
                    <span className="wd-textBoxPlaceholder">Bio</span>
                    <br/>
                    <textarea className="wd-textBoxInput wd-edit-input" rows="3" maxLength="350" onChange={handleBioChange} value={bio}></textarea>
                </div>

                <div className="border border-light rounded ps-2 pe-2 mb-2">
                    <span className="wd-textBoxPlaceholder">Location</span>
                    <br/>
                    <textarea className="wd-textBoxInput wd-edit-input" rows="1" maxLength="60" onChange={handleLocationChange} value={location}></textarea>
                </div>

                <div className="border border-light rounded ps-2">
                    <span className="wd-textBoxPlaceholder">Website</span>
                    <br/>
                    <textarea className="wd-textBoxInput wd-edit-input" rows="1" maxLength="60" onChange={handleWebsiteChange} value={website}></textarea>
                </div>

                <div  className="ps-2 pe-2 mb-2">
                    <span className="wd-textBoxPlaceholder">Birth Date  </span>

                    <br/>
                    <input type="date"  onChange={handleDateOfBirthChange} value={dateOfBirth} max={date2} style={{fontSize:"12px"}}/>
                </div>

            </form>
        </div>
    );
}
export default EditProfile;