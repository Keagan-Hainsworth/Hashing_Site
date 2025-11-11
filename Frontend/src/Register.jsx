import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === confirmPwd;
    setValidMatch(match);
  }, [pwd, confirmPwd]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, confirmPwd, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd, email);
    setSuccess(true);
  };

  return (
    <>
    {success ? (
      <section>
        <h1>Success!</h1>
        <p>
          <Link to="/login">Sign In</Link>
        </p>
      </section>
    ) : ( 
        
    <div class="container">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div class="row text-center">
        <h1>Registration Page</h1>
      </div>
      <div class="row">
        <form class="col-4 offset-4" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="username" class="form-label">
              Username:
              {validName && (
                <span className="valid">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {!validName && user && (
                <span className="invalid">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              class="form-control"
              type="text"
              id="username"
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              autoComplete="false"
              onChange={(e) => setUser(e.target.value)}
              ref={userRef}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            {userFocus && user && !validName && (
              <p id="uidnote" className={"instructions"}>
                <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            )}
          </div>
          <div class="mb-3">
            <label htmlFor="email" class="form-label">
              Email:
              {validEmail && (
                <span className={"valid"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validEmail && !email && (
                <span className={"hide"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              class="form-control"
              type="email"
              id="email"
              autoComplete="false"
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            {emailFocus && email && !validEmail && (
              <p id="uidnote" className={"instructions"}>
                <FontAwesomeIcon icon={faInfoCircle} /> Please enter a valid
                email address.
              </p>
            )}
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password:
              {validPwd && (
                <span className={"valid"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validPwd && !pwd && (
                <span className={"hide"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
            </label>
            <input
              class="form-control"
              type="Password"
              id="password"
              autoComplete="false"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            {pwdFocus && !validPwd && (
              <p id="pwdnote" className={"instructions"}>
                <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters: ! @ # $ %
              </p>
            )}
          </div>
          <div class="mb-3">
            <label htmlFor="conpassword" class="form-label">
              Confirm Password:
              {validMatch && confirmPwd && (
                <span className={"valid"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
              {validMatch ||
                (!confirmPwd && (
                  <span className={"hide"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                ))}
            </label>
            <input
              class="form-control"
              type="Password"
              id="conpassword"
              required
              autoComplete="false"
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onChange={(e) => setConfirmPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            {matchFocus && !validMatch && (
              <p id="confirmnote" className={"instructions"}>
                <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
                password input field.
              </p>
            )}
          </div>
          <button
            disabled={!validName || !validPwd || !validMatch || !validEmail}
            class="btn btn-primary"
            variant="primary"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    )} 
    </>
  );
}

export default Register;
