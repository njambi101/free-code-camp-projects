export function Son (props){
    return (
    <>
    <p>i love you</p>
    <div>{props.children}</div>
    </>
    )    
}

export function User ({name, age, gender}) {
    return(
        <>
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        <h1>gender: {gender}</h1>
        </>
    )
}

 export function card({children}){
    return (
        <div className="card">{children}</div>
    )

}


function open({children}){
    return(
        <p>{children}</p>
    )
}