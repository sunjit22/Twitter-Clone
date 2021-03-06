const person = {
    name : 'Sunjit Dhillon',
    handle: 'sunjit22',
    profilePicture: '/images/profile_pic.jpg',
    bannerPicture: '/images/cover_image.png',
    bio: 'MS CS Grad Student, Aspiring Software Engineer, Microbiologist, Google CSRMP Scholar. Seeking internship/coop opportunities for summer 2022.',
    website: 'linkedin.com/sunjit-dhillon',
    location: 'Boston, MA',	dateOfBirth: '10/22/1995',	dateJoined: '4/2017',
    followingCount: 312,	followersCount: 180
}

const profileReducer = (state=person, action)=> {
    switch(action.type) {
        case 'change-firstName':
            break;
        case 'change-lastName':
            break;
        default:
            return state;
    }
}
export default profileReducer;