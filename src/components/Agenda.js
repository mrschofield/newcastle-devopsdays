import React from "react";
import Link from "gatsby-link";

const Agenda = () => (
  <section id="agenda">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Agenda</h1>
        <p className="centered bigger">Click or tap through for more information on a talk!</p>
      </div>
    </div>
    <div className="row">
      <div className="text">
        <div id="agenda-timeline">
          <div className="agenda-timeline-day">
            <TimelineHeader name="Day 1" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00 AM"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:15 AM"
            />
            
            <TimelineSection
              name="Keynote"
              speakers="David McRaney"
              speakerId="david-mcraney"
              time="9:15 - 10:00 AM"
            />

            <TimelineSection
              name="Sponsors"
              time="10:00 - 10:10 AM"
              body=""
            />
            <TimelineSection
              name="10 Years of DevOps - How Did We Get Here and Where Are We Going?"
              speakers="Matt Ray"
              speakerId="matt-ray"
              time="10:10 - 10:40 AM"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:40 - 11:00 AM"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:00 - 11:15 AM"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Agile Chatbots"
              speakers="Shilpa Cheruvu, Jemimah Irvin & Hailey Martin"
              speakerId="shilpa-cheruvu-jemimah-irvin-hailey-martin"
              time="11:15 - 11:45 AM"
            />
            <TimelineSection
              name="Sponsors"
              time="11:45 - 11:55 AM"
              body=""
            />
            <TimelineSection
              name="Lunch"
              time="11:55 - 12:55 PM"
              body="Catered Lunch"
            />
            <TimelineSection
              name="Ignite Talks"
              time="12:55 - 13:25 PM"
              body="Quick, to the point talks"
            />
            <TimelineSection
              name="Sponsors"
              time="13:25 - 13:35 PM"
              body=""
            />
            <TimelineSection
              name="From A and B to ~150 Microservices, The Journey and Learnings"
              speakers="Geshan Manandhar"
              speakerId="geshan-manandhar"
              time="13:35 - 14:20 PM"
              body=""
            />
            <TimelineSection
              name="Afternoon Tea"
              time="14:20 - 14:50 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 1"
              time="14:50 - 15:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 2"
              time="15:35 - 16:20 PM"
              body=""
            />
            <TimelineSection
              name = "Open Space 3"
              time="16:20 - 16:50 PM"
              body=""
            />
            <TimelineSection
              name="Closing Remarks"
              time="16:50 - 17:00 PM"
              body=""
            />
            <TimelineSection
              name="Evening Social Event"
              time="19:00 PM"
              body="Fun & Games at NEX"
            />

          </div>
          <div className="agenda-timeline-day">
            <TimelineHeader name="Day 2" />
            <TimelineSection
              name="Registration"
              time="8:00 - 9:00 AM"
            />
            <TimelineSection
              name="Welcome"
              time="9:00 - 9:15 AM"
              body=""
            />
            <TimelineSection
              name="Keynote"
              speakers="Aurynn Shaw"
              speakerId="aurynn-shaw"
              time="9:15 - 10:00 AM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="10:00 - 10:10 AM"
              body=""
            />
            <TimelineSection
              name="Hacking Major Companies for Fun and Profit"
              speakers="Rhys Elsmore"
              speakerId="rhys-elsmore"
              time="10:10 - 10:40 AM"
              body=""
            />
            <TimelineSection
              name="Break"
              time="10:40 - 11:00 AM"
              body="Tea, Coffee"
            />
            <TimelineSection
              name="Open Spaces Brainstorm"
              time="11:00 - 11:15 AM"
              body="Present your ideas for open spaces"
            />
            <TimelineSection
              name="Failure Is Not An Option (It's a Core Feature!)"
              speakers="James Boswell"
              speakerId="james-boswell"
              time="11:15 - 11:45 AM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="11:45 - 11:55 AM"
              body=""
            />
            <TimelineSection
              name="Lunch"
              time="11:55 - 12:55 PM"
              body="Catered Lunch"
            />
            <TimelineSection
              name="DevOps for Data Science"
              speakers="Damian Brady"
              speakerId="damian-brady"
              time="12:55 - 13:25 PM"
              body=""
            />
            <TimelineSection
              name="Sponsors"
              time="13:25 - 13:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 1"
              time="13:35 - 14:20 PM"
              body=""
            />
            <TimelineSection
              name="Afternoon Tea"
              time="14:20 - 14:50 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 2"
              time="14:50 - 15:35 PM"
              body=""
            />
            <TimelineSection
              name="Open Space 3"
              time="15:35 - 16:20 PM"
              body=""
            />
            <TimelineSection
              name="Closing Remarks"
              time="16:20 - 16:50 PM"
              body=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <p id="ignite">
        <em>Ignite Talks:</em> These are 5 minute-long lightning talks where the slides will automatically change every 15 seconds.
      </p>
      <p id="open-spaces">
        <em>Open Spaces:</em> Breakout sessions focused on topics suggested on the day by attendees. These topics may be sparked by the talks had earlier in the conference, or may simply reflect an issue you are facing in your workplace.
      </p>
    </div>
  </section>
);

const TimelineHeader = (props) => (
  <section className="timeline-header timeline-section">
    <h3>{props.name}</h3>
  </section>
);

const TimelineSection = (props) => {
  let topic = <div><h4>{props.name}</h4></div>;
  
  if (props.speakers && props.speakerId) {
    topic = 
      <div>
        <Link to={`/speakers#${props.speakerId}`}>
          <h4>{props.speakers}</h4>
          <h5 className="title">{props.name}</h5>
        </Link>
      </div>
  }

  return (
    <section className="timeline-section">
      <p className="time">{props.time}</p>
      {topic}
      <p>{props.body}</p>
    </section>
  );
};

export default Agenda;
