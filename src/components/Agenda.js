import React from "react";
import Link from "gatsby-link";

const Agenda = () => (
  <section id="agenda">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Agenda</h1>
      </div>
    </div>
    <div className="row">
      <div className="text">
        <div id="agenda-timeline">
          <div id="agenda-timeline-left">
            <TimelineHeader name="Day 1" />
            <TimelineSection
              name="Badge Collection"
              time="8:00 - 9:00 AM"
              body="Pick up your badges"
            />
            <TimelineSection
              name="Keynote"
              time="9:00 - 10:00 AM"
              body="Someone Cool will talk about awesome devops stuff"
            />
          </div>
          <div id="agenda-timeline-right">
            <TimelineHeader name="Day 2" />
            <TimelineSection
              name="Badge Collection"
              time="8:00 - 9:00 AM"
              body="Pick up your badges"
            />
            <TimelineSection
              name="Keynote"
              time="9:00 - 10:00 AM"
              body="Someone Cool will talk about awesome devops stuff"
            />
          </div>
        </div>
        <p>
          We will be announcing speakers closer to the date - follow us on <a href="https://www.twitter.com/devopsdaysnewy">Twitter</a> for up-to-date announcements!
        </p>
      </div>
    </div>
  </section>
);

const TimelineHeader = (props) => (
  <section className="timeline-header">
    <h3>{props.name}</h3>
  </section>
);

const TimelineSection = (props) => (
  <section className="timeline-section-header">
    <h4>{props.name}</h4>
    <h5>{props.time}</h5>
    <p>{props.body}</p>
  </section>
);

export default Agenda;
