import { Link, useNavigate } from "react-router-dom";

export const CreateAccount = ({setEmail}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormData = {
            username: e.target.email.value, password: e.target.password.value,
        };
        
        setEmail(FormData.username.split("@")[0]);
        navigate('/?username=FormData.username');
    };

    return (
        <div className="signIn">
            <div>
                <img className='signIn-img' src='https://plus.unsplash.com/premium_photo-1661299419297-afe05358400d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className="signIn-div">
                <h3 className='signIn-div-h'>Create Account</h3>
                <p className='signIn-div-p'>We suggest using email address you use at work</p>

                <form className='signIn-div-form' onSubmit={handleSubmit}>
                <label>Email address</label>
                <input type='email' name='email' placeholder='eg.johndoe@gmail.com' required/>
                <label>Set Password</label>
                <input type='password' name='password' placeholder='At least 6 characters' required/>

                <button type='submit' className='btn signIn-btn'>CreateAccount</button>
            </form>
            
            <p className="signIn-link">Already Login? <Link to='/signIn' style={{color: "#ffd900"}}>Sign In</Link></p>
        </div>
        </div>
    )
}


export const SignIn = ({setEmail}) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormData = {
            username: e.target.email.value,
            password: e.target.password.value,
        };

        setEmail(FormData.username.split("@")[0]);
        navigate('/?username=FromData.username');
    };

     return (
        <div className='signIn'>
            <div>
                <img className='signIn-img' src='https://plus.unsplash.com/premium_photo-1661299419297-afe05358400d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </div>
            <div className='signIn-div'>
            <h3 className='signIn-div-h'>Sign-in</h3>
            <p className='signIn-div-p'>Please fill in your information below to continue</p>

            <form className='signIn-div-form' onSubmit={handleSubmit}>
                <label>Email address</label>
                <input type='email' name='email' placeholder='eg.johndoe@gmail.com' required/>
                <label>Enter Password</label>
                <input type='password' name='password' placeholder='At least 6 characters' required/>

                <button type='submit' className='btn signIn-btn'>Sign in</button>
            </form>
            
            <p className="signIn-link">New to HomeGroom? <Link to='/signUp' style={{color: "#ffd900"}}>Create Account</Link></p>
        </div>
        </div>
    )
}