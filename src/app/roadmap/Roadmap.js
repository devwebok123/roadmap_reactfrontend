import React, { Component } from "react";
import Widgets from "../widgets";

import Gantt from 'react-gantt-antd'
import 'react-gantt-antd/lib/css/style.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { CircularProgressbar } from "react-circular-progressbar";

const tasks_a = [
  {
    id: "title1",
    title: "I'm some test task",
    start: new Date('2020-06-01'),
    end: new Date('2020-08-02'),
  }
]

const tasks_b = [
  {
    id: "title1",
    title: "Am Another task",
    start: new Date('2020-07-01'),
    end: new Date('2020-09-02'),
  }
]

// const sub_projects = [
//   {
//     id: "sub_project1",
//     title: "子项目",
//     tasks: tasks_b,
//   }
// ]

const projects = [
  {
    id: "project1",
    title: "A Project",
    tasks: tasks_a,
    // projects: sub_projects,
    isOpen: true,
  }
]

const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export class Roadmap extends Component {
  constructor(props) {
    super(props);

    let numberDays = new Date(2020, 1, 0).getDate();
    let num = 0;
    let arr = [];
    for (let i = 0; i < numberDays; i++) {
      arr.push(i+1);
      num++;
    }
    this.state = {
      dateArr: arr,
      numberDays: num,
      isMonthCalendar: false,
      year: new Date().getFullYear(),
      month: monthArr[new Date().getMonth()],
      enddate: new Date().getFullYear() +
        "-" +
        ("0" + (new Date().getMonth() + 1)).substr(-2) +
        "-" +
        ("0" + new Date().getDate()).substr(-2)
    };
  }
  toggleMonthCalendar() {
    this.setState({ isMonthCalendar: !this.state.isMonthCalendar });
  }
  render() {
    let monthCalendar = "";
    if (this.state.isMonthCalendar) {
      monthCalendar = <div id="calendar">
        <div className="text-center">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 122.88 122.88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 leftarrow"
              onClick={() => this.setState({year: this.state.year-1})}
            >
              <g>
                <path
                  d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z"
                  fill="#000"
                />
              </g>
            </svg>
          </span>
          {this.state.year}
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 122.88 122.88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
              onClick={() => this.setState({year: this.state.year+1})}
            >
              <g>
                <path
                  d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z"
                  fill="#000"
                />
              </g>
            </svg>
          </span>
        </div>
        <table>
          <tbody>
            <tr>
              <td onClick={() => this.setState({month: "Jan"})}>Jan</td>
              <td onClick={() => this.setState({month: "Feb"})}>Feb</td>
              <td onClick={() => this.setState({month: "Mar"})}>Mar</td>
            </tr>
            <tr>
              <td onClick={() => this.setState({month: "Apr"})}>Apr</td>
              <td onClick={() => this.setState({month: "May"})}>May</td>
              <td onClick={() => this.setState({month: "Jun"})}>Jun</td>
            </tr>
            <tr>
              <td onClick={() => this.setState({month: "Jul"})}>Jul</td>
              <td onClick={() => this.setState({month: "Aug"})}>Aug</td>
              <td onClick={() => this.setState({month: "Aug"})}>Sep</td>
            </tr>
            <tr>
              <td onClick={() => this.setState({month: "Oct"})}>Oct</td>
              <td onClick={() => this.setState({month: "Nov"})}>Nov</td>
              <td onClick={() => this.setState({month: "Dec"})}>Dec</td>
            </tr>
          </tbody>
        </table>
      </div>;
    }
    return (
      <div>
        {/* Pulls data metrics */}
        <Widgets />

        {/* Roadmap timeline */}
        <div className="card roadmap">
          <div className="card-body">
            <div className="toolbar justify-content-between align-items-center">
              <div className="title col-md-2 float-left mb-3 mt-lg-3">Time Roadmap</div>
              <div className="button-list  col-md-7 float-left mb-3 mt-lg-3">
                <button className="btn btn-rounded btn-outline-dark">
                  All
                </button>
                <button className="btn btn-rounded btn-gradient-success">
                  Developer Team
                </button>
                <button className="btn btn-rounded btn-gradient-danger">
                  Design Team
                </button>
                <button className="btn btn-rounded btn-gradient-primary">
                  Management Team
                </button>
                <button className="btn btn-rounded btn-gradient-warning">
                  QA Team
                </button>
              </div>
              <div className="col-md-3 float-left mb-3 mt-lg-3">
                <div className="month" onClick={() => this.toggleMonthCalendar()}>
                  <div className="icon">
                    <img
                      src={require("../../assets/images/icons/calendar2.svg")}
                      alt="Calendar icon"
                    />
                  </div>
                  <div className="date">{this.state.month}, {this.state.year}</div>
                  {monthCalendar}
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="agile-progress">
              <div>
                <h3>Progress Overall</h3>
                <div className="col-md-4 float-left text-center">
                  <button className="btn btn-rounded btn-gradient-primary">
                    Design Prototype
                  </button>
                </div>
                <div className="col-md-4 float-left text-center">
                  <button className="btn btn-rounded btn-gradient-success">
                    Coded Prototype
                  </button>
                </div>
                <div className="col-md-4 float-left">
                  <div className="endate float-right p-1">
                    <div className="w-25 float-left">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.2667 3.86041H8.17778V2.05555C8.17778 1.77284 7.94937 1.54444 7.66667 1.54444H1.15V0.905549C1.15 0.835271 1.0925 0.777771 1.02222 0.777771H0.127778C0.0575 0.777771 0 0.835271 0 0.905549V13.4278C0 13.498 0.0575 13.5555 0.127778 13.5555H1.02222C1.0925 13.5555 1.15 13.498 1.15 13.4278V9.2111H5.11111V11.016C5.11111 11.2987 5.33951 11.5271 5.62222 11.5271H12.2667C12.5494 11.5271 12.7778 11.2987 12.7778 11.016V4.37152C12.7778 4.08881 12.5494 3.86041 12.2667 3.86041ZM1.15 8.0611V2.69444H7.02778V8.0611H1.15ZM11.6278 10.3771H6.26111V9.2111H8.05C8.12028 9.2111 8.17778 9.1536 8.17778 9.08333V5.01041H11.6278V10.3771Z"
                          fill="#0F5BCE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.16652 2.4444H2.63874V3.97217H1.11096V5.49995H2.63874V7.02773H1.11096V8.55551H2.63874V7.02773H4.16652V8.55551H5.6943V7.02773H7.22207V5.49995L5.6943 5.49995V3.97217H7.22207V2.4444H5.69429L5.6943 3.97217H4.16652V2.4444ZM4.16652 5.49995H5.6943V7.02773H4.16652V5.49995ZM4.16652 5.49995V3.97217H2.63874V5.49995H4.16652Z"
                          fill="#0F5BCE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.6111 4.66669H7.08332V6.19446H8.6111V7.72224H7.08332V9.25002H5.55554V10.7778H7.08332V9.25002H8.6111V10.7778H10.1389V9.25002L11.6667 9.25002V7.72224H10.1389V6.19446H11.6667V4.66669H10.1389V6.19446H8.6111V4.66669ZM10.1389 7.72224V9.25002H8.6111V7.72224H10.1389Z"
                          fill="#0F5BCE"
                        />
                      </svg>
                    </div>
                    <div className="w-75 float-left">
                      <p>End Date</p>
                      <b>
                        {this.state.enddate.substr(8, 2)}, {monthArr[this.state.enddate.substr(5, 2) - 1]}, {this.state.enddate.substr(0, 4)}
                        <img
                          src={require("../../assets/images/icons/calendar2.svg")}
                          alt="Calendar icon"
                        />
                      </b>
                      <input
                        type="date"
                        className="pickdate"
                        onChange={(e) => this.setState({enddate: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline">
            {/* <Gantt
              start={new Date('2020-06-01')}
              end={new Date('2020-10-01')}
              now={new Date('2020-7-01')}
              zoom={1}
              projects={projects}
              enableSticky
              scrollToNow='true'
            /> */}
              <table>
                <thead>
                  <tr>
                    {this.state.dateArr.map(date => (
                      <td className="pl-2">
                        {date}
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={68} className="blue" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td colSpan="3">
                                <div className="labelTxt blue">
                                  <div className="percent">68%</div>
                                  <div className="titledate">
                                    <b>Researching and Planning</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={68} className="blue" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td></td>
                              <td colSpan="3">
                                <div className="labelTxt blue">
                                  <div className="percent">68%</div>
                                  <div className="titledate">
                                    <b>Research Sprint 1</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="3"></td>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={98} className="blue" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td></td>
                              <td></td>
                              <td></td>
                              <td colSpan="3">
                                <div className="labelTxt blue">
                                  <div className="percent">98%</div>
                                  <div className="titledate">
                                    <b>Planning and Sprint</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face6.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="5"></td>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={81} className="red" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td colSpan="3">
                                <div className="labelTxt red">
                                  <div className="percent">81%</div>
                                  <div className="titledate">
                                    <b>Design Sprint</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="yellow" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="yellow" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="6"></td>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={52} className="green" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td colSpan="3">
                                <div className="labelTxt green">
                                  <div className="percent">52%</div>
                                  <div className="titledate">
                                    <b>Development Sprint</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={this.state.numberDays} className="td-relative">
                      <div className="fc-bg">
                        <table>
                          <tbody>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="fc-content">
                        <table>
                          <thead>
                            <tr>
                              {this.state.dateArr.map(date => (
                                <td></td>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan="8"></td>
                              <td colSpan="3">
                                <ProgressBar variant="success" now={31} className="green" />
                              </td>
                            </tr>
                            <tr className="text">
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td colSpan="3">
                                <div className="labelTxt green">
                                  <div className="percent">31%</div>
                                  <div className="titledate">
                                    <b>Development Sprint</b>
                                    <p>July 11, 2020</p>
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face2.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                  <div className="photo">
                                    <CircularProgressbar className="red" value={80} />
                                    <img src={require("../../assets/images/faces/face3.jpg")} alt="profile" className="img-sm profile-pic" />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Roadmap;
