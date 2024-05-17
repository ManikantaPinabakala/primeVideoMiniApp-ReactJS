import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-logo"
      />
      <div className="movies-section">
        <h1 className="genre-heading">Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider genreMovieList={actionMovieList} />
        </div>
        <h1 className="genre-heading">Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider genreMovieList={comedyMovieList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
