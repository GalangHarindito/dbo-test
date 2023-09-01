const Button = ({type, classname, label, onClick}) => {

    return(
        <div>
            <button type={type} class={`btn ${classname}`} onClick={onClick}>{label}</button>
        </div>
    )
}

export default Button