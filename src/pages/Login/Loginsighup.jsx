import React from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
let user="";
export default function Loginsighup() {
	const navigate = useNavigate()
	return (
		<div className="body px-10">
			<div class="main ">
				<input type="checkbox" id="chk" aria-hidden="true" />

				<div class="signup">
					<form>
						<label className="label" for="chk" aria-hidden="true">Sign up</label>
						<div >
							<input className="input" type="text" name="txt" placeholder="User name" required="" />
							<input className="input" type="number" name="email" placeholder="phone number" required="" />
							<input className="input" type="number" name="email" placeholder="pin" required="" />
							<input className="input" type="password" name="pswd" placeholder="Password" required="" />
						</div>

						<button className='button '>Sign up</button>
					</form>
				</div>

				<div class="login">
					<form className="">
						
						<label className="label" for="chk" aria-hidden="true">Login</label>
						<input className="input" type="email" name="email" placeholder="Email" required="" />
						<input className="input" type="password" name="pswd" placeholder="Password" required="" />
						<button  onClick={() => {  
							user="loggedin"
							navigate("/") }} 
							className='buttonla '>Login</button>
					</form>
				</div>
				
			</div>
		</div>
	);
}
export function returnUserlog(){
	return user;
}