import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as moviesAPI from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
      like: false,
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    like: Joi.boolean(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    await moviesAPI.saveMovie(data);
    this.props.history.push("/movies");
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }
  async populateMovies() {
    const { id } = this.props.match.params;
    if (id !== "new") {
      try {
        const { data: movie } = await moviesAPI.getMovie(id);
        this.setState({ data: this.mapToViewModel(movie) });
      } catch (ex) {
        if (ex.response && ex.response.status === 404)
          this.props.history.replace("/not-found");
      }
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovies();
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      like: movie.like,
    };
  };
  render() {
    console.log();
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
