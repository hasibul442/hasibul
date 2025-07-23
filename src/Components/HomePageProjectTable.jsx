import React from "react";

function HomePageProjectTable() {
  const projectData = [
    {
      name: "Soft UI XD Version",
      logo: "../assets/img/small-logos/logo-xd.svg",
      time: "3 month",
      budget: "$14,000",
      completion: 60,
      progressBarClass: "bg-gradient-info",
    },
    {
      name: "Add Progress Track",
      logo: "../assets/img/small-logos/logo-atlassian.svg",
      time: "3 month",
      budget: "$3,000",
      completion: 10,
      progressBarClass: "bg-gradient-info",
    },
    {
      name: "Fix Platform Errors",
      logo: "../assets/img/small-logos/logo-slack.svg",
      time: "3 month",
      budget: "Not set",
      completion: 100,
      progressBarClass: "bg-gradient-success",
    },
    {
      name: "Launch our Mobile App",
      logo: "../assets/img/small-logos/logo-spotify.svg",
      time: "3 month",
      budget: "$20,500",
      completion: 100,
      progressBarClass: "bg-gradient-success",
    },
    {
      name: "Add the New Pricing Page",
      logo: "../assets/img/small-logos/logo-jira.svg",
      time: "3 month",
      budget: "$500",
      completion: 25,
      progressBarClass: "bg-gradient-info",
    },
    {
      name: "Redesign New Online Shop",
      logo: "../assets/img/small-logos/logo-invision.svg",
      time: "3 month",
      budget: "$2,000",
      completion: 40,
      progressBarClass: "bg-gradient-info",
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card-header pb-0">
          <div className="row">
            <div className="col-lg-6 col-7">
              <h6>Recent Projects</h6>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pb-2">
          <div className="table-responsive">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Project Name
                  </th>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Time
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Budget
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Completion
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((project, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img
                            src={project.logo}
                            className="avatar avatar-sm me-3"
                            alt={project.name}
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">{project.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="text-xs font-weight-bold">
                        {project.time}
                      </span>
                    </td>
                    <td className="align-middle text-center text-sm">
                      <span className="text-xs font-weight-bold">
                        {project.budget}
                      </span>
                    </td>
                    <td className="align-middle">
                      <div className="progress-wrapper w-75 mx-auto">
                        <div className="progress-info">
                          <div className="progress-percentage">
                            <span className="text-xs font-weight-bold">
                              {project.completion}%
                            </span>
                          </div>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${project.progressBarClass} w-${project.completion}`}
                            role="progressbar"
                            style={{ width: `${project.completion}%` }}
                            aria-valuenow={project.completion}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageProjectTable;
