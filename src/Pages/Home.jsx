import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
    </>
  )
}

export default Home