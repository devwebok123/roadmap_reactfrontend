import React, { useRef, useLayoutEffect, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";

import GradientSVG from "./utils/GradientSVG";
import LeadAndCycleTimeGraph1 from "./utils/LeadAndCycleTimeGraph1";

import "react-circular-progressbar/dist/styles.css";

import firstAvatar from "../../assets/images/faces/face11.jpg";
import secondAvatar from "../../assets/images/faces/face4.jpg";

export const Widgets = () => {
  const spendProgressRef = useRef();
  const taskProgressRef = useRef();
  const [SliderWidth, setSliderWidth] = useState({
    budgetWidth: 0,
    taskWidth: 0,
  });

  useLayoutEffect(() => {
    if (spendProgressRef.current && taskProgressRef.current) {
      setSliderWidth({
        budgetWidth: spendProgressRef.current.offsetWidth,
        taskWidth: taskProgressRef.current.offsetWidth,
      });
    }
  }, []);

  // SSRR

  const [SSRR_percent, setSSRR_percent] = useState({
    Status: 76,
    Schedule: 21,
    Risks: 52,
    "Resource allocation": 88,
  });

  // Budget

  const [budget, setBudget] = useState({
    "Total Budget": 100000,
    "Total Spend": 70000,
    "Budget Left": 30000,
  });

  const totalSpendDecimal = budget["Total Spend"] / budget["Total Budget"];

  // Tasks

  const [tasks, setTasks] = useState({
    "Open Task": 20,
    "Closed Task": 39,
    "Block Task": 17,
  });

  const RCTime = {
    "Reaction Time": "14d4h",
    "Cycle Time": "4d8h",
  };

  var taskSum = 78;

  const [openTaskWidth, setopenTaskWidth] = useState(
    tasks["Open Task"] / taskSum
  );
  const [closedTaskWidth, setclosedTaskWidth] = useState(
    tasks["Closed Task"] / taskSum
  );
  const [blockTaskWidth, setblockTaskWidth] = useState(
    tasks["Block Task"] / taskSum
  );

  // Teams card

  const [teams, setTeams] = useState([
    {
      team: "Development Team",
      percentWorkDone: 34,
      tasksStatus: {
        openTask: 12,
        closedTask: 9,
        blockTask: 2,
      },
      membersAvatar: [firstAvatar, secondAvatar],
    },
    {
      team: "Design Team",
      percentWorkDone: 59,
      tasksStatus: {
        openTask: 12,
        closedTask: 9,
        blockTask: 2,
      },
      membersAvatar: [firstAvatar, secondAvatar],
    },
    {
      team: "Management Team",
      percentWorkDone: 30,
      tasksStatus: {
        openTask: 12,
        closedTask: 9,
        blockTask: 2,
      },
      membersAvatar: [firstAvatar, secondAvatar],
    },
  ]);

  // upcoming events

  const [upEvents, setUpEvents] = useState([
    {
      title: "Login & Sign up Page",
      dueDate: "17 Aug, 2020",
      tasksStatus: {
        openTask: 12,
        closedTask: 9,
        blockTask: 12,
      },
      totalTasks: 33,
      // 'progressPercent': 70,
      taskCompleted: 5,
      taskTotal: 15,
      riskPercent: 35,
    },
    {
      title: "Landing Page",
      dueDate: "26 Aug, 2020",
      tasksStatus: {
        openTask: 12,
        closedTask: 9,
        blockTask: 12,
      },
      totalTasks: 33,
      // 'progressPercent': 45,
      taskCompleted: 9,
      taskTotal: 12,
      riskPercent: 75,
    },
  ]);

  return (
    <div className="widgets">
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin">
          <div className="row">
            {Object.entries(SSRR_percent).map(([key, val], i) => (
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 sub-column">
                <div className="card card-statistics">
                  <div className="card-body">
                    <div className="SSRR-title">{key}</div>
                    <div className="SSRR-progressBar">
                      <div className="vertical-SSRR-progress">
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                      </div>
                      <div
                        className="SSRR-percent"
                        style={{
                          bottom: `calc(${val}% - calc(23.56px * ${
                            val / 100
                          }))`,
                        }}
                      >
                        {val}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-md-12 sub-column fix-padding mt-2">
              <div className="card card-statistics">
                <div className="card-body">
                  <div className="Budget-title">Budget</div>
                  <div className="Budget-progress">
                    <div className="col-md-4 Budget-progressBar progress1"></div>
                    <div className="col-md-4 Budget-progressBar progress2"></div>
                    <div className="col-md-4 Budget-progressBar progress3"></div>
                    <div
                      className="spend-progress"
                      ref={spendProgressRef}
                      style={{
                        left: `calc(${totalSpendDecimal * 100}% - calc(${
                          SliderWidth.budgetWidth
                        }px * ${totalSpendDecimal}))`,
                      }}
                    >
                      ${budget["Total Spend"].toLocaleString()}
                    </div>
                  </div>
                  <div className="Budget-details">
                    {Object.entries(budget).map(([key, val], i) => (
                      <div>
                        <div className="Budget-detail-title">{key}</div>
                        <div className="budget-value">
                          ${val.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-margin">
          <div className="card card-team">
            <div className="card-body">
              <div className="timeElapsedDiv">
                <div className="timeElapsed">20d 12h</div>
              </div>

              <div className="Budget-progress d-flex">
                <div
                  item
                  style={{ width: `calc(${openTaskWidth * 100}% + 8px)` }}
                  className="team-performance-progressBar progress1"
                ></div>
                <div
                  item
                  style={{ width: `calc(${closedTaskWidth * 100}% + 8px)` }}
                  className="team-performance-progressBar progress2"
                ></div>
                <div
                  item
                  style={{ width: `calc(${blockTaskWidth * 100}% + 8px)` }}
                  className="team-performance-progressBar progress3"
                ></div>
                <div
                  className="spend-progress task-progress"
                  ref={taskProgressRef}
                  style={{
                    left: `calc(${closedTaskWidth * 100}% - calc(${
                      SliderWidth.taskWidth
                    }px * ${closedTaskWidth}))`,
                  }}
                >
                  {(closedTaskWidth * 100).toFixed(0)}%
                </div>
              </div>

              {/* Label for start work */}
              <div className="some-label d-flex">
                <div
                  item
                  style={{ width: `calc(${openTaskWidth * 100}% )` }}
                  className="task-taskCreated"
                >
                  <div>Task Created</div>
                </div>
                <div
                  item
                  style={{ width: `calc(${closedTaskWidth * 100}% )` }}
                  className="task-startWork"
                >
                  <div>Start Work</div>
                </div>
                <div
                  item
                  style={{ width: `calc(${blockTaskWidth * 100}% )` }}
                  className="task-complete"
                >
                  <div>Complete</div>
                </div>
              </div>

              {/* Reaction Time */}
              <div className="row">
                {Object.entries(RCTime).map(([key, val], i) => (
                  <div className="col-md-6" key={i}>
                    <div className="RCTime-div">
                      <div className="row">
                        <div className="RCTime-type col-md-7">{key}</div>
                        <div className="RCTime-time col-md-5">{val}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Task Insight */}
              <div className="taskTypesDiv">
                <div className="row no-gutters">
                  {Object.entries(tasks).map(([key, val], i) => (
                    <div
                      className={"tasksdiv col-md-4 tasksdivPos" + i}
                      style={{ display: "flex" }}
                    >
                      <div className={"taskdiv" + i}>{val}</div>
                      <span className="taskText">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 team-thing">
            <div className="row">
              {teams.map((team, i) => (
                <div className="col-md-4">
                  <div className="card each-team">
                    <div className="card-body">
                      <div className="teamTitle">{team.team}</div>

                      <div className="percentTaskStatus-div">
                        <div className="row">
                          <div item className="percentWorkDone col-md-3">
                            {team.percentWorkDone}%
                          </div>
                          {Object.entries(team.tasksStatus).map(
                            ([key, val], i) => (
                              <div
                                key={i}
                                className={
                                  "col-md-3 teamTasksStatus teamTasksStatus" + i
                                }
                              >
                                {val}
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          paddingBottom: "3px",
                          marginLeft: "-8px",
                          marginRight: "-8px",
                        }}
                      >
                        <LeadAndCycleTimeGraph1 />
                      </div>

                      <div className="teamsMembersAvatar">
                        {team.membersAvatar.map((avatar, i) => (
                          <CircularProgressbarWithChildren
                            className="teamMemberCircular"
                            counterClockwise
                            value={75}
                            strokeWidth={6}
                            styles={buildStyles({
                              pathColor: "",
                              trailColor: "#DEECF3",
                            })}
                          >
                            <img
                              src={avatar}
                              alt="Assigned member"
                              width="20"
                              height="20"
                            />
                            <GradientSVG
                              startColor="#F0138A"
                              endColor="#FF1E54"
                              idCSS="teamMemberGradient"
                              rotation={30}
                            />
                          </CircularProgressbarWithChildren>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-xl-4 grid-margin">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h5 className="text-uppercase font-weight-normal upcomingmilestone">
              Upcoming Milestone
            </h5>
            <div className="action">
              <button className="btn btn-light btn-rounded btn-md text-small text-uppercase viewall">
                View all
              </button>
            </div>
          </div>

          <div className="milestones">
            <div className="row">
              {upEvents.map((event, i) => (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body pb-4">
                    <div className="eventTitle">{event.title}</div>
                    <div className="event-dueDate-div d-flex align-items-start mt-4 mb-4">
                      <img
                        src={require("../../assets/images/icons/calendar.svg")}
                        alt="calendar icon"
                      />
                      <div style={{ textAlign: "left" }}>
                        <div className="event-dueDate p-1">{event.dueDate}</div>
                        <div>Due date</div>
                      </div>
                    </div>
                    <div className="row no-gutters-2">
                      <div className="col-md-6">
                        <div className="event-progress-div events-circular-progress">
                          <CircularProgressbarWithChildren
                            className="events-circular-progress-open"
                            style={{ position: "relative" }}
                            counterClockwise
                            value={
                              ((event.tasksStatus.openTask +
                                event.tasksStatus.closedTask) /
                                event.totalTasks) *
                              100
                            }
                            styles={buildStyles({
                              pathColor: "#B9F33C",
                              trailColor: "#FF1E54",
                              strokeLinecap: "butt",
                            })}
                          >
                            <div className="eventTaskStatusPercent">
                              {(
                                (event.tasksStatus.closedTask /
                                  event.totalTasks) *
                                100
                              ).toFixed(0)}
                              %
                            </div>
                            <CircularProgressbar
                              className="events-circular-progress-closed"
                              counterClockwise
                              value={
                                (event.tasksStatus.closedTask /
                                  event.totalTasks) *
                                100
                              }
                              styles={buildStyles({
                                trailColor: "transparent",
                                strokeLinecap: "butt",
                              })}
                            />
                          </CircularProgressbarWithChildren>
                        </div>
                      </div>
                      <div>
                        <GradientSVG
                          startColor="#24CAEE"
                          endColor="#9924F5"
                          idCSS="event-progress-gradient0"
                          rotation={
                            ((event.tasksStatus.closedTask / event.totalTasks) *
                              360) /
                              2 +
                            90
                          }
                        />
                        <GradientSVG
                          startColor="#B9F33C"
                          endColor="#08C86C"
                          idCSS="event-progress-gradient1"
                          rotation={
                            (((event.tasksStatus.openTask / 2 +
                              event.tasksStatus.closedTask) /
                              event.totalTasks) *
                              360) /
                              2 -
                            90
                          }
                        />
                        <GradientSVG
                          startColor="#FF1E54"
                          endColor="#F0138A"
                          idCSS="event-progress-gradient2"
                          rotation={
                            (((event.tasksStatus.openTask +
                              event.tasksStatus.closedTask +
                              event.tasksStatus.blockTask / 2) /
                              event.totalTasks) *
                              360) /
                              2 -
                            90
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="event-progress-div">
                          <div className="event-progress-percent">
                            {event.taskCompleted}/{event.taskTotal}
                          </div>
                          <ProgressBar
                            className="event-progress-bar"
                            variant="determinate"
                            now={(event.taskCompleted / event.taskTotal) * 100}
                          />
                          <div className="event-progess-title">Tasks</div>
                        </div>
                      </div>
                    </div>
                    <div className="event-risk-div row">
                      <div className="col-md-6">
                        <CircularProgressbar
                          className={
                            "event-risk-percent event-risk-percent" + i
                          }
                          strokeWidth={7}
                          counterClockwise
                          value={event.riskPercent}
                          text={`${event.riskPercent}%`}
                          styles={buildStyles({
                            textColor: "#224171",
                            pathColor: "",
                            trailColor: "#DEECF3",
                          })}
                        />
                        <GradientSVG
                          startColor="#B9F33C"
                          endColor="#08C86C"
                          idCSS="riskGradient1"
                          rotation={45}
                        />
                        <GradientSVG
                          startColor="#FFE70C"
                          endColor="#FF5E03"
                          idCSS="riskGradient2"
                          rotation={45}
                        />
                      </div>
                      <div style={{ textAlign: "start" }} className="col-md-6">
                        <div className="event-risk-title">Risk Level</div>
                        <div className="event-risk-type">
                          {event.riskPercent <= 35
                            ? "Low Risks"
                            : event.riskPercent > 35 && event.riskPercent <= 70
                            ? "Medium Risks"
                            : "High Risks"}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
