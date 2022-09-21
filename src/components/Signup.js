
import "../css/signup.css"
function Signup() {
   
   
    return (
        <div className="all">
         <div className="container">

            <div className="forms">
                
                <p className="title"><span>Create Account</span></p>
                
                <h1>Welcome to <br/>
                    Qraft
                    <br/>
                    Store
                </h1>
                <h5>Sign Up  get your fevourate Gig</h5>
        
            </div>
            <div />
            <div className="col1">
                <label className="myname">Name
                <input type="name" name="fullname" placeholder=""></input>
                </label>
                <div/>
          
            <div className='col'>

                    <div className='txt-fld'>
                        <label className="form-label">Email
                         <input type="email" name="emailAddress" placeholder=""  />
                        
                        </label>
                </div>
                <div className='txt-fld'>
                        <label>Password
                        <input type="password" name="password" placeholder="" />
                        </label>
                </div>

                <div className='check_box'>
                        {/* <label>
                            <input type="checkbox" name="text" />
                            Keep me logged in
                        </label> */}
                       {/* <label className='forget'>forget Password?</label> */}
                  </div>

                <div>
                        <button type="login">Sign in</button>
                    </div>
        

                    <p>____________________________ or Signup with _____________________________</p>

                <div class='myicons'>
                {/* <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-google" aria-hidden="true"></i> */}
                    </div>
            

            </div>
        </div>
        <div/>
        <div/>
        <div className="container2">
            <div className="sub">
            <h5>Qraft is the most marketable platform that contacts<br/>independence artist to people or business with gig</h5>
            <h5>Qraft Market Place</h5>
            <p>From Experts</p>
            </div>

        </div>
        </div>
        </div>
    );
    
}
export default Signup