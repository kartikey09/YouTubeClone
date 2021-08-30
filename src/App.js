import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {

    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(!sidebar);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const {accessToken, loading} = useSelector(state => state.auth)
    const history = useHistory()
    useEffect(()=>{

        if(!loading && !accessToken){
            history.push('/auth')
        }

    }, [accessToken, loading, history])

    return (
            <Switch>
                <Route path = '/' exact>
                    <Layout>
                        <HomeScreen/>
                    </Layout>
                </Route>
                <Route path = '/auth'>
                    <LoginScreen/>
                </Route>
                <Route path = '/search'>
                    <Layout>
                        <h1>Search </h1>
                    </Layout>
                </Route> 
                <Route>
                    <Redirect to = '/'/>
                </Route>
            </Switch>
    )
}

export default App
