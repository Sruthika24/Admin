import './App.css';
import { VictoryPie, VictoryLegend, VictoryTheme } from 'victory';
import StudentsData from './data/Student';
import { useEffect, useState } from 'react';
import { integerPropType } from '@mui/utils';

function App() {

  const [studentsData, setStudentsData] = useState(StudentsData)

  useEffect(() => {
    document.getElementById(studentsData[0].Class).className = "carousel-item active"
  })

  return (
    <div className="App">
      <div className="title">Usage Metrics</div>
      <div className="academic-statistics">
        <div id="academic-stats" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div className="carousel-inner">
            {
              studentsData.map((entry) => {
                return (
                  <div className="carousel-item" id={entry.Class}>
                    <div className="content">Student Academic Statistics :</div>
                    <div className="content">{entry.Class} Standard</div>
                    <div className="content">Student Strength : {entry.NoOfStudents}</div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div>
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "red"]}
                              data={[
                                { x: "Pass", y: entry.NoOfStudents - entry.MarksStats.MarkF },
                                { x: "Fail", y: entry.MarksStats.MarkF }
                              ]}
                            />
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "Pass -" + (entry.NoOfStudents - entry.MarksStats.MarkF) + " - " + Math.round(((entry.NoOfStudents - entry.MarksStats.MarkF) / entry.NoOfStudents) * 100) + "%" },
                                { name: "Fail -" + entry.MarksStats.MarkF + " - " + Math.round((entry.MarksStats.MarkF / entry.NoOfStudents) * 100) + "%" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="row">
                            <VictoryPie
                              radius={100}
                              labels={() => null}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              data={[
                                { x: "90-100%", y: entry.MarksStats.Markab90 },
                                { x: "80-90%", y: entry.MarksStats.Markab80 },
                                { x: "70-80%", y: entry.MarksStats.Markab70 },
                                { x: "60-70%", y: entry.MarksStats.Markab60 },
                                { x: "50-60%", y: entry.MarksStats.Markab50 },
                                { x: "Fail", y: entry.MarksStats.MarkF },
                              ]}
                            />
                          </div>
                          <div className="row">
                            <VictoryLegend x={125} y={50}
                              orientation="vertical"
                              gutter={50}
                              colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                              style={{ border: { stroke: "black" } }}
                              data={[
                                { name: "90-100% - " + entry.MarksStats.Markab90 + " - " + Math.round((entry.MarksStats.Markab90 / entry.NoOfStudents) * 100) + "%" },
                                { name: "80-90% - " + entry.MarksStats.Markab80 + " - " + Math.round((entry.MarksStats.Markab80 / entry.NoOfStudents) * 100) + "%" },
                                { name: "70-80% - " + entry.MarksStats.Markab70 + " - " + Math.round((entry.MarksStats.Markab70 / entry.NoOfStudents) * 100) + "%" },
                                { name: "60-70% - " + entry.MarksStats.Markab60 + " - " + Math.round((entry.MarksStats.Markab60 / entry.NoOfStudents) * 100) + "%" },
                                { name: "50-60% - " + entry.MarksStats.Markab50 + " - " + Math.round((entry.MarksStats.Markab50 / entry.NoOfStudents) * 100) + "%" },
                                { name: "Fail - " + entry.MarksStats.MarkF + " - " + Math.round((entry.MarksStats.MarkF / entry.NoOfStudents) * 100) + "%" }
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content">Student Feedback Statistics :</div>
                    <div className="content">{entry.Class} Standard</div>
                    <div className="content">Student Strength : {entry.NoOfStudents}</div>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <VictoryLegend x={125} y={50}
                            orientation="vertical"
                            gutter={50}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink", "red"]}
                            style={{ border: { stroke: "black" } }}
                            data={[
                              { name: "5 stars - " + entry.FeedbackStats.Review5 + " - " + Math.round((entry.FeedbackStats.Review5 / entry.NoOfStudents) * 100) + "%" },
                              { name: "4 stars - " + entry.FeedbackStats.Review4 + " - " + Math.round((entry.FeedbackStats.Review4 / entry.NoOfStudents) * 100) + "%" },
                              { name: "3 Stars - " + entry.FeedbackStats.Review3 + " - " + Math.round((entry.FeedbackStats.Review3 / entry.NoOfStudents) * 100) + "%" },
                              { name: "2 stars - " + entry.FeedbackStats.Review2 + " - " + Math.round((entry.FeedbackStats.Review2 / entry.NoOfStudents) * 100) + "%" },
                              { name: "1 star - " + entry.FeedbackStats.Review1 + " - " + Math.round((entry.FeedbackStats.Review1 / entry.NoOfStudents) * 100) + "%" }
                            ]}
                          />
                        </div>
                        <div className="col">
                          <VictoryPie
                            radius={100}
                            labels={() => null}
                            colorScale={["#3BFF00", "yellow", "#FFA200", "#BE7CFF", "pink"]}
                            data={[
                              { x: "5 stars", y: entry.FeedbackStats.Review5 },
                              { x: "4 stars", y: entry.FeedbackStats.Review4 },
                              { x: "3 stars", y: entry.FeedbackStats.Review3 },
                              { x: "2 stars", y: entry.FeedbackStats.Review2 },
                              { x: "1 star", y: entry.FeedbackStats.Review1 }
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#academic-stats" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#academic-stats" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
