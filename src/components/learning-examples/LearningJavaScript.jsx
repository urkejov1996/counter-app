
const person = {
    name: 'Uros',
    address: {
        line1: 'Kamenica',
        city: 'Nis',
        country: 'Srbija',
    },
    profiles: ['twitter', 'linkedIn', 'instagram'],
    printProfile: () => {

        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )

        console.log(person.profiles[0])
    }
}

// function printProfile() {
//     console.log(person.profiles[0])
// }


export default function LearningJavaScript() {

    person.printProfile()

    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.profiles[0]}</div>
        </>
    )

}