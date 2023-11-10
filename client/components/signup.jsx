import React from 'react'

export default function SignUp() {
    return (
        <>
            <div className="container">
                <form>
                    <title>Sign Up</title>
                    <p>It's quick and easy</p>

                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Surname' />
                    <input type="text" placeholder='Mobile number or email address' />
                    <input type="password" placeholder='New Password' />
                    <label htmlFor="dob">Date of Birth</label>
                    <div className="day"><select >
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10"></option>
                        <option value="11" selected="1"></option>
                        <option value="12"></option>
                        <option value="13"></option>
                        <option value="14"></option>
                        <option value="15"></option>
                        <option value="16"></option>
                        <option value="17"></option>
                        <option value="18"></option>
                        <option value="19"></option>
                        <option value="20"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                        <option value="1"></option>
                    </select>
                    </div>



                </form>
            </div>
        </>
    )
}

