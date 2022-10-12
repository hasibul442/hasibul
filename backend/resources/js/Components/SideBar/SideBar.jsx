import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {

  return (
      <>
          <div className="left-side-menu">
              <div className="slimscroll-menu">
                  <div id="sidebar-menu">
                      <ul className="metismenu" id="side-menu">
                          <li className="menu-title">Navigation</li>

                          <li>
                              <a href="index.html">
                                  <i className="mdi mdi-view-dashboard"></i>
                                  <span> Dashboard </span>
                              </a>
                          </li>

                          <li>
                              <a href="calendar.html">
                                  <i className="mdi mdi-calendar-month"></i>
                                  <span> Calendar </span>
                              </a>
                          </li>

                          <li>
                              <Link to='/'>
                                  <i className="mdi mdi-flip-horizontal"></i>
                                  <span> Layouts </span>
                                  <span className="badge badge-danger badge-pill float-right">
                                      New
                                  </span>
                              </Link>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="layouts-dark-sidebar.html">
                                          Dark Sidebar
                                      </a>
                                  </li>
                                  <li>
                                      <a href="layouts-small-sidebar.html">
                                          Small Sidebar
                                      </a>
                                  </li>
                                  <li>
                                      <a href="layouts-sidebar-collapsed.html">
                                          Sidebar Collapsed
                                      </a>
                                  </li>
                                  <li>
                                      <a href="layouts-unsticky.html">
                                          Unsticky Layout
                                      </a>
                                  </li>
                                  <li>
                                      <a href="layouts-boxed.html">
                                          Boxed Layout
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-google-pages"></i>
                                  <span> Pages </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="pages-starter.html">
                                          Starter Page
                                      </a>
                                  </li>
                                  <li>
                                      <a href="pages-login.html">Login</a>
                                  </li>
                                  <li>
                                      <a href="pages-register.html">Register</a>
                                  </li>
                                  <li>
                                      <a href="pages-recoverpw.html">
                                          Recover Password
                                      </a>
                                  </li>
                                  <li>
                                      <a href="pages-lock-screen.html">
                                          Lock Screen
                                      </a>
                                  </li>
                                  <li>
                                      <a href="pages-404.html">Error 404</a>
                                  </li>
                                  <li>
                                      <a href="pages-500.html">Error 500</a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-content-copy"></i>
                                  <span> Extra Pages </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="pages-timeline.html">Timeline</a>
                                  </li>
                                  <li>
                                      <a href="pages-invoice.html">Invoice</a>
                                  </li>
                                  <li>
                                      <a href="pages-pricing.html">Pricing</a>
                                  </li>
                                  <li>
                                      <a href="pages-gallery.html">Gallery</a>
                                  </li>
                                  <li>
                                      <a href="pages-maintenance.html">
                                          Maintenance
                                      </a>
                                  </li>
                                  <li>
                                      <a href="pages-comingsoon.html">
                                          Coming Soon
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li className="menu-title mt-2">Components</li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-format-underline"></i>
                                  <span> User Interface </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="ui-buttons.html">Buttons</a>
                                  </li>
                                  <li>
                                      <a href="ui-cards.html">Cards</a>
                                  </li>
                                  <li>
                                      <a href="ui-dropdowns.html">Dropdowns</a>
                                  </li>
                                  <li>
                                      <a href="ui-checkbox-radio.html">
                                          Checkboxs-Radios
                                      </a>
                                  </li>
                                  <li>
                                      <a href="ui-navs.html">Navs</a>
                                  </li>
                                  <li>
                                      <a href="ui-progress.html">Progress</a>
                                  </li>
                                  <li>
                                      <a href="ui-modals.html">Modals</a>
                                  </li>
                                  <li>
                                      <a href="ui-notification.html">
                                          Notification
                                      </a>
                                  </li>
                                  <li>
                                      <a href="ui-alerts.html">Alerts</a>
                                  </li>
                                  <li>
                                      <a href="ui-carousel.html">Carousel</a>
                                  </li>
                                  <li>
                                      <a href="ui-bootstrap.html">
                                          Bootstrap UI
                                      </a>
                                  </li>
                                  <li>
                                      <a href="ui-typography.html">
                                          Typography
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-package-variant-closed"></i>
                                  <span> Components </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="components-grid.html">Grid</a>
                                  </li>
                                  <li>
                                      <a href="components-range-sliders.html">
                                          Range sliders
                                      </a>
                                  </li>
                                  <li>
                                      <a href="components-sweet-alert.html">
                                          Sweet Alerts
                                      </a>
                                  </li>
                                  <li>
                                      <a href="components-ratings.html">
                                          Ratings
                                      </a>
                                  </li>
                                  <li>
                                      <a href="components-treeview.html">
                                          Treeview
                                      </a>
                                  </li>
                                  <li>
                                      <a href="components-tour.html">Tour</a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-puzzle-outline"></i>
                                  <span> Widgets </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="widgets-tiles.html">Tile Box</a>
                                  </li>
                                  <li>
                                      <a href="widgets-charts.html">
                                          Chart Widgets
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-black-mesa"></i>
                                  <span> Icons </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="icons-materialdesign.html">
                                          Material Design
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-ionicons.html">
                                          Ion Icons
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-fontawesome.html">
                                          Font awesome
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-themify.html">
                                          Themify Icons
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-simple-line.html">
                                          Simple line Icons
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-weather.html">
                                          Weather Icons
                                      </a>
                                  </li>
                                  <li>
                                      <a href="icons-pe7.html">PE7 Icons</a>
                                  </li>
                                  <li>
                                      <a href="icons-typicons.html">Typicons</a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-file-document-box-check-outline"></i>
                                  <span className="badge badge-warning badge-pill float-right">
                                      8
                                  </span>
                                  <span> Forms </span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="form-elements.html">
                                          General Elements
                                      </a>
                                  </li>
                                  <li>
                                      <a href="form-advanced.html">
                                          Advanced Form
                                      </a>
                                  </li>
                                  <li>
                                      <a href="form-validation.html">
                                          Form Validation
                                      </a>
                                  </li>
                                  <li>
                                      <a href="form-pickers.html">
                                          Form Pickers
                                      </a>
                                  </li>
                                  <li>
                                      <a href="form-wizard.html">Form Wizard</a>
                                  </li>
                                  <li>
                                      <a href="form-mask.html">Form Masks</a>
                                  </li>
                                  <li>
                                      <a href="form-uploads.html">
                                          Multiple File Upload
                                      </a>
                                  </li>
                                  <li>
                                      <a href="form-xeditable.html">
                                          X-editable
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-table-settings"></i>
                                  <span> Tables </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="tables-basic.html">
                                          Basic Tables
                                      </a>
                                  </li>
                                  <li>
                                      <a href="tables-datatable.html">
                                          Data Tables
                                      </a>
                                  </li>
                                  <li>
                                      <a href="tables-responsive.html">
                                          Responsive Table
                                      </a>
                                  </li>
                                  <li>
                                      <a href="tables-tablesaw.html">
                                          Tablesaw
                                      </a>
                                  </li>
                              </ul>
                          </li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-poll"></i>
                                  <span> Charts </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="charts-flot.html">Flot Charts</a>
                                  </li>
                                  <li>
                                      <a href="charts-morris.html">
                                          Morris Charts
                                      </a>
                                  </li>
                                  <li>
                                      <a href="charts-chartjs.html">Chartjs</a>
                                  </li>
                                  <li>
                                      <a href="charts-peity.html">
                                          Peity Charts
                                      </a>
                                  </li>
                                  <li>
                                      <a href="charts-chartist.html">
                                          Chartist Charts
                                      </a>
                                  </li>
                                  <li>
                                      <a href="charts-c3.html">C3 Charts</a>
                                  </li>
                                  <li>
                                      <a href="charts-sparkline.html">
                                          Sparkline Charts
                                      </a>
                                  </li>
                                  <li>
                                      <a href="charts-knob.html">Jquery Knob</a>
                                  </li>
                              </ul>
                          </li>

                          <li className="menu-title mt-2">More</li>

                          <li>
                              <a href="#">
                                  <i className="mdi mdi-share-variant"></i>
                                  <span> Multi Level </span>
                                  <span className="menu-arrow"></span>
                              </a>
                              <ul
                                  className="nav-second-level nav"
                                  aria-expanded="false"
                              >
                                  <li>
                                      <a href="#">Level 1.1</a>
                                  </li>
                                  <li>
                                      <a href="#" aria-expanded="false">
                                          Level 1.2
                                          <span className="menu-arrow"></span>
                                      </a>
                                      <ul
                                          className="nav-third-level nav"
                                          aria-expanded="false"
                                      >
                                          <li>
                                              <a href="#">Level 2.1</a>
                                          </li>
                                          <li>
                                              <a href="#">Level 2.2</a>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>

                  <div className="clearfix"></div>
              </div>
          </div>
      </>
  );
}

export default SideBar
