import '../CSS/Customer.css'


function Review({ profile, name, designation, logo, image, context }) {
  return (
    <div>
    <div className="review-container d-flex">
      <div>
        <div className="context text-start fs-5">{context}</div>
        <div className="details">
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
          <div className="name-designation text-start fs-5">
            <p><b>{name}</b></p>
            <p>{designation}</p>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={image} alt="food" height="1000px"/>
      </div>
      </div>
    </div>
  );
}

export default Review;
