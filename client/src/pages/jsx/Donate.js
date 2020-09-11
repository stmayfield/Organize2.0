import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import { paginate } from "../../utils/paginate";
import API from "../../utils/API";
import "../css/Donate.css";
import Donatejumbo from "../../images/donatejumbo.png";

class Donate extends Component {
  state = {
    links: [],
    pageSize: 5,
    currentPage: 1,
  };

  componentDidMount() {
    API.getLinks().then((res) => {
      const links = res.data;
      this.setState({ links });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePreviousPageChange = () => {
    this.setState((state) => {
      if (state.currentPage <= 1) {
        return { currentPage: 1 };
      }
      return { currentPage: state.currentPage - 1 };
    });
  };

  handleNextPageChange = () => {
    this.setState((state) => {
      const totalPages = Math.ceil(state.links.length / state.pageSize);
      console.log(totalPages);
      if (state.currentPage >= totalPages) {
        return { currentPage: totalPages };
      }
      return { currentPage: state.currentPage + 1 };
    });
  };

  render() {
    const { length: count } = this.state.links;
    const { links: allLinks, currentPage, pageSize } = this.state;

    const links = paginate(allLinks, currentPage, pageSize);

    return (
      <>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <h4 id="search-title">Search Donation Links</h4>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <SearchForm />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                onNextPageChange={this.handleNextPageChange}
                onPreviousPageChange={this.handlePreviousPageChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8" id="donate-img">
              <img className="donate-jumbo" src={Donatejumbo} />
              <div className="donate-jumbo-title">Donate Here</div>
            </div>
            <div className="col-2"></div>
          </div>

          {links.map((link) => (
            <div className="row">
              <div className="col-2" />
              <div className="col-8" key={link._id}>
                <div className="card col-12" id="donation-cards-wrapper">
                  <a href={link.src} className="btn btn" target="_blank">
                    <div className="card-body" id="donate-card">
                      <h4>{link.title}</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-2" />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Donate;
