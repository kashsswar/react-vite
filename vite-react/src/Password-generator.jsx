import React, { useState, useCallback, useEffect, useRef } from 'react';

function Password() {
  const [length, setLength] = useState(8);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [numbersAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charsAllowed) str += "`~!@#$%^&*(){}-+-*/=";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charsAllowed, numbersAllowed]);

  const copyPasswordToClipBoard= useCallback(()=>{

    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    PasswordGenerator()
  },[length, numbersAllowed, charsAllowed,
    PasswordGenerator])
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: 'black' }}>
        <h1 style={{ color: 'olive' }}>Password Generator</h1>
        <div style={{ height: '100px', width: '450px', backgroundColor: 'lavender', borderRadius: '10px', margin: '20px 10px', padding:'5px 8px',color: 'orange', textShadow: 'initial', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type='text' value={password}
            placeholder='Password'
            style={{ margin: '10px 0', width: '100%', padding:'2px 5px' }}
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px' }}>Copy</button>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type='checkbox'
              checked={numbersAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type='checkbox'
              checked={charsAllowed}
              id='characterInput'
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
