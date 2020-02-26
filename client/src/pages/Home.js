import React from 'react'
import UserList from '../components/Users/UserList';
import Layout from '../components/Layout';

 const Home = () => {
    return (
        <Layout>
             <h1>Home Page</h1> 
             <UserList />
        </Layout>
    )
}


export default Home;