import React, { useState, useEffect } from "react";
// import { getEvents } from "../../resources/events";
// import { getArticles } from "../../resources/articles";
// import { getVideos } from "../../resources/videos";
import AddResource from "../../components/AddResource/AddResource";
import AddEvent from "../../components/AddEvent/AddEvent";
import AddVideo from "../../components/AddVideo/AddVideo";

import ListVideo from "../../components/ListVideo/ListVideo";

function Manage() {
  // state = {
  //   events: getEvents(),
  //   articles: getArticles(),
  //   videos: getVideos(),
  // };

 //cocatenate dates and times together with a T together
 //will need to convert 12hr times to 24 before concatenating

    return (
      <>
        <div className="container">
          <h1>Administration Management Page</h1>
          <div className="row">
            <div className="col-5 m-1">
              <AddEvent />
            </div>
            <div className="col-6 m-1">
              <div className="card">
                <div className="card-header">Your posted events</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {this.state.events.map((event) => (
                      <li className="list-group-item">
                        {event.title}: {event.start_date}{" "}
                        <button type="button" className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-5 m-1">
              <AddResource />
            </div>
            <div className="col-6 m-1">
              <div className="card">
                <div className="card-header">Your posted articles</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {this.state.articles.map((article) => (
                      <li className="list-group-item">
                        {article.title}
                        <button type="button" className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-5 m-1">
              <AddVideo />
            </div>
            <div className="col-6 m-1">
              <div className="card">
                <div className="card-header">Your posted videos</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {this.state.videos.map((video) => (
                      <li className="list-group-item">
                        {video.title}
                        <button type="button" className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Manage;
