import { Link } from "react-router-dom"

const CallHistory = () =>{
    return(
    <div className="row overflow-hidden">
  <aside className="col-sm-3 d-block col-md-5 d-block col-lg-3 col-xl-3 d-block px-4 bg-white">
    <div className="d-flex align-items-center mb-3 mt-3">
      <Link to='/:username/chat' className="ps-0 float-md-start btn-lg back-btn"><img src={process.env.PUBLIC_URL + '/images/i_back'} alt="..." /></Link>
      <h4 className="flex-grow-1 text-center text-purple mt-2">Call History</h4>
    </div>
    <div className="list-call">
      <div className="d-flex-grow-1 row my-3">
        <div className="col-4">
          <img src={process.env.PUBLIC_URL + '/images/photos/photo4.png'} className="img-fluid" alt="..." />
        </div>
        <div className="col-8">
          <div className="d-flex align-items-start row">
            <h5 className="fw-bold text-md-start">Brother</h5>
            <span className="flex-grow-1 text-muted text-sm-start"><img src={process.env.PUBLIC_URL + '/images/i_union'} className="img-fluid" alt="..." /> 18.02.2020 at 19:30</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <main className="col-sm-9 col-lg-9 col-xl-9 py-3">
    <div className="splashscreen">
      <span className="text-muted">Please select a chat to start messaging</span>
    </div>
  </main>
</div>

    )
}

export default CallHistory