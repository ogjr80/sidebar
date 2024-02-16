import './App.css'

import {Route, Routes} from 'react-router-dom'; 

import RootLayout from './layouts/RootLayout'; 
import AllApps from './pages/AllApps'; 
import Analytics from './pages/Analytics'; 
import Authentication from './pages/Authentication'; 
import Build from './pages/Build'; 
import Settings from './pages/Settings'; 
import Storage from './pages/Storage'; 


function App() {
  return (
        <RootLayout> 
          <Routes> 
            <Route path="/" element={<AllApps /> }/> 
            <Route path="/authentication" element={<Authentication /> }/> 
            <Route path="/storage" element={<Storage /> }/> 
            <Route path="/settings" element={<Settings /> }/> 
            <Route path="/build/:bID" element={<Build /> }/> 
            <Route path="/Analytics/:aID" element={<Analytics /> }/> 
          </Routes>
        </RootLayout>
  )
}

export default App
