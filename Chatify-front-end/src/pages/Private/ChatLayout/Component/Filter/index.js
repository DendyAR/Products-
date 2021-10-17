const Filter = () =>{
    return(
        <div className="filter">
            <div className="d-flex align-items-center my-3 me-3">
                <small className="active bg-purple rounded-pill fw-bold me-4" aria-current="page">All</small>
                <small className="text-black fw-bold mx-4">Important</small>
                <small className="text-black fw-bold mx-4">Unread</small>
                <small className="text-black fw-bold ms-4">Read</small>
            </div>
        </div>
    )
}

export default Filter