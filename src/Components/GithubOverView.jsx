"use client";
import { getListDataFromDatabase } from "@/Helper/DatabaseHelper";
import { fetchGithubData, getGithubProfileData } from "@/Helper/GitDataFatchHelper";
import { db } from "@/lib/firebase";
import {doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

function GithubOverView() {
  const [gitdata, setGitData] = useState({});

  //get data from firebase
  const getMyData = async () => {
    const data = await getListDataFromDatabase("github_profile_data");
    setGitData(data[0]);
  };

  const handleGithubRefresh = async () => {
    const publicRepos = await getGithubProfileData();
    const total_stars = await fetchGithubData();
    return setDoc(doc(db, "github_profile_data", "hasibul442"), {
      id: "hasibul442",
      username: "hasibul442",
      public_repos: publicRepos.public_repos,
      total_stars: total_stars,
      followers: publicRepos.followers,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
      .then(() => {
        console.log("GitHub data updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating GitHub data:", error);
      });
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <>
      <div className="card shadow h-100">
        <div className="card-header pb-0 p-3">
          <h6 className="mb-0">Overview</h6>
        </div>
        <div className="card-body pb-0 p-3">
          <ul className="list-group">
            <li className="list-group-item border-0 d-flex align-items-center px-0 mb-0">
              <div className="w-100">
                <div className="d-flex mb-2">
                  <span className="me-2 text-sm font-weight-bold text-dark">
                    Total Public Repositories
                  </span>
                  <span className="ms-auto text-sm font-weight-bold">
                    {gitdata.public_repos}
                  </span>
                </div>
                <div>
                  <ProgressBar
                    now={gitdata.public_repos}
                    variant="success"
                    animated
                    max={100}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
              <div className="w-100">
                <div className="d-flex mb-2">
                  <span className="me-2 text-sm font-weight-bold text-dark">
                    Total Stars
                  </span>
                  <span className="ms-auto text-sm font-weight-bold">
                    {gitdata.total_stars}
                  </span>
                </div>
                <div>
                  <ProgressBar
                    now={gitdata.total_stars}
                    variant="primary"
                    animated
                    max={200}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
              <div className="w-100">
                <div className="d-flex mb-2">
                  <span className="me-2 text-sm font-weight-bold text-dark">
                    Followers
                  </span>
                  <span className="ms-auto text-sm font-weight-bold">
                    {gitdata.followers}
                  </span>
                </div>
                <div>
                  <ProgressBar
                    now={gitdata.followers}
                    variant="primary"
                    animated
                    max={100}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-footer pt-0 p-3 d-flex align-items-center">
          <div className="w-60">
            <p className="text-sm">
              <span className="font-weight-bold">Note:</span> The data is
              fetched from GitHub API and may not be up-to-date. Please refresh
              the page to get the latest statistics.
            </p>
          </div>
          <div className="w-40 text-end">
            <button
              className="btn btn-dark mb-0 text-end"
              onClick={handleGithubRefresh}
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubOverView;
