import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to go to Google'
// }


const anotherElement = (
  <a href='https://google.com'>Visit Google</a>
)

const anotheruser = 'chai aur react'
const reactElement = (
  'a',
  {href : 'https://www.google.com', target :'_blank'},
  'Chal google baba k pas le chal',
  anotheruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />  
   {/* App()*/}    
  {/* {anotherElement} */}
  {/* {reactElement} */}
  </>
)
