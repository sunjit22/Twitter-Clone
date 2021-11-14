import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const selectProfile = (state) => state.profile

const ProfileComponent = ()  => {
    const profile = useSelector(selectProfile);


    return(<div>
            <div className="row mb-2">
                <div className="col-1 mt-3 ps-3">
                    <i className="fas fa-long-arrow-alt-left" style={{fontSize:"24px", color:"white"}}></i>
                </div>
                <div className="row col-11">
                    <label className="mb-0" style={{color:"white", fontSize:"20px"}}><b>{profile.name}</b></label>
                    <label style={{color:"gray", fontSize:"14px"}}>5,196 Tweets</label>
                </div>
            </div>
            <div className="mb-2">
                <img src ={profile.bannerPicture} style={{width:"100%", height: "200px"}} alt="profileBanner"></img>
            </div>
            <div className="row mb-0">
                <div className="col-7" style={{height:"45px"}}>
                    <img src={profile.profilePicture} className="rounded-circle" style={{height:"100px", width:"100px", objectFit:"cover", position:"relative", top:"-60px", left:"15px", border:"solid black 3px"}} alt="profile pic"></img>
                </div>
                <div className="col-5 pe-3">
                    <Link to="/a7/twitter/profileEdit">
                        <button type="button" className="btn rounded-pill text-nowrap" style={{border:"solid gray 1px", float:"right", color:"white", fontSize:"14px"}}>
                            <b>Edit Profile</b>
                        </button>
                    </Link>
                </div>

            </div>
            <div className="row mt-0">
                <label className="mb-0" style={{color:"white", fontSize:"18px"}}><b>{profile.firstName} {profile.lastName}</b></label>
                <label className="mt-0" style={{color:"gray", fontSize:"14px"}}>@{profile.handle}</label>
            </div>
            <div style={{color:"white", fontSize:"16px"}}>
                <p className="mt-2 mb-2">
                    {profile.bio}
                </p>
            </div>
            <div className="mt-0 mb-2" style={{color:"gray", fontSize:"14px"}}>

                <i className="pe-2 fas fa-map-marker-alt"></i>
                {profile.location}

                <i className="ps-3 pe-2 fas fa-globe-europe"></i>
                <label>
                    Born {profile.dateOfBirth}
                </label>

                <i className="ps-3 pe-2 far fa-calendar-alt"></i>


                <label>
                    Joined {profile.dateJoined}
                </label>

            </div>
            <div className="mb-2">
                <label className="pe-3" style={{color:"gray", fontSize:"16px"}}> <b style={{color:"white"}}>{profile.followingCount} </b>Following  </label>
                <label style={{color:"gray", fontSize:"16px"}}> <b style={{color:"white"}}>{profile.followersCount}</b> Followers </label>
            </div>


        </div>
    );
}
export default ProfileComponent;