{
    // interface Profile with properties name, age, and email.


    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
    }

    //Input
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    // here , age and name updated value 
    console.log(updateProfile(myProfile, { age: 26, name:'Shanto' }));

    // 
}