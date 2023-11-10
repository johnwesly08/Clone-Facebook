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
                    <input type="date" name='dob' id='dob'/>
                    <label htmlFor="gender">Gender</label>
                    <input type="radio" name="female" id="female" />
                    <input type="radio" name="male" id="male" />
                    <input type="radio" name="custom" id="custom" onClick={customGen = () => {
                        return (
                        <select name="pronoun" id="pronoun">
                            <option value="she">She</option>
                            <option value="he">He</option>
                            <option value="they">They</option>
                        </select>
                        )
                    }}/>

               </form>
            </div>
        </>
    )
}

