const flexCard = (props) => {
    return (
        <div className="sm:flex sm:justify-center sm:flex-wrap sm:m-4 md:w-80">
            {props.children}
        </div>
    )
}

export default flexCard
