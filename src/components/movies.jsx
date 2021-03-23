import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenreMovies } from "../utils/genre";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import { toast } from "react-toastify";
class movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: 0,
    sortOptions: { path: "dailyRentalRate", order: "asc" },
    search: "",
  };
  async componentDidMount() {
    const { data: movies } = await getMovies();
    let { data } = await getGenres();
    const genres = [{ name: "All Genres", _id: 0 }, ...data];
    this.setState({ movies, genres });
  }
  handleDelete = async (id) => {
    const originalMovies = this.state.movies;

    const movies = originalMovies.filter((movie) => movie._id !== id);
    this.setState({ movies });

    try {
      await deleteMovie(id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Movie has already been deleted!");

      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  getPagedData = (allMovies) => {
    const {
      currentPage,
      pageSize,
      selectedGenre,
      sortOptions,
      search,
    } = this.state;

    let filtered = allMovies;
    if (search) {
      filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    } else if (selectedGenre) {
      filtered = getGenreMovies(allMovies, selectedGenre);
    }

    const sorted = _.orderBy(filtered, [sortOptions.path], [sortOptions.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return {
      movies,
      length: filtered.length,
    };
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = (genreId) => {
    this.setState({ selectedGenre: genreId, currentPage: 1, search: "" });
  };
  handleSort = (sortOptions) => {
    this.setState({ sortOptions });
  };
  handleSearch = ({ currentTarget: input }) => {
    this.setState({ search: input.value, selectedGenre: 0, currentPage: 1 });
  };
  render() {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      genres,
      selectedGenre,
      sortOptions,
      search,
    } = this.state;

    const { movies, length } = this.getPagedData(allMovies);

    if (length === 0)
      return (
        <div>
          <p>Table is empty!</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ search: "", selectedGenre: 0 });
            }}
          >
            Try again
          </button>
        </div>
      );

    return (
      <div className="row my-4">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {this.props.user && (
            <Link to={`/movies/new`} className="btn btn-primary mb-3">
              New Movie
            </Link>
          )}

          <p>{`showing ${length} movies in the datebase`}</p>

          <SearchBox value={search} onChange={this.handleSearch} />

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            sortedColumn={sortOptions}
            onSort={this.handleSort}
          />
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              selectedPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default movies;
