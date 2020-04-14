import React, { Component } from "react";
import { fetchData } from "../../api";
import { Movies } from "../../components";
import { Wrapper } from "../../components";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LatestMovies.scss";
/*
  API ENDPOINT PARAMETER: [sort_by]
  *-----------------------
    * -> sort_by = title
    * -> sort_by = year
    * -> sort_by = rating
    * -> sort_by = peers
    * -> sort_by = seeds
    * -> sort_by = download_count
    * -> sort_by = like_count
    * -> sort_by = date_added
  *-------------------------
*/
const api = {
  sort: `date_added`,
  limit: 8,
};

class LatestMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestMovies: [],
    };
  }

  async componentDidMount() {
    const { sort, limit } = api;
    const {
      data: { movies },
    } = await fetchData(sort, limit);
    this.setState({ latestMovies: [...movies] });
  }

  render() {
    const { latestMovies } = this.state;
    return (
      <Wrapper className={this.props.className}>
        <Row className="p-0">
          <Col className="p-0 align_col">
            <h5>Latest YIFY Movies Torrents</h5>
            <Link to="/browse-movies" className="browse_link">
              Browse All
            </Link>
          </Col>
        </Row>
        <Movies movie={latestMovies} />
      </Wrapper>
    );
  }
}
export default LatestMovies;
