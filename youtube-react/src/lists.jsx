export function City(){
    const cities = ['Nairobi', "Mombasa", "Kisumu", "Nakuru", "Eldoret", "London"]
    return(
        <ul>
            {cities.map(C => <li>{C}</li>)}
        </ul>
    )
}

export function List () {
    const users = [
   { id: 1, name: 'Geeks', age: 50},
    { id: 2, name: 'for', age: 31 },
    { id: 3, name: 'Geeks', age: 20 },
];

return (
    <>
    <ul>
      {users.map((user) => (<li key={user.id}>
        {user.name} is {user.age}</li>))}
    </ul>

    <ul>
      {users.map((L) => ( 
        L.age > 30 ? <li key={L.id}>{L.name} is above 30 years</li> : <li key={L.id}>{L.name} is below the age of 30</li>
      ))}
    </ul>
        </>

)
}