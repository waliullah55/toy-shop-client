import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => {
  return (
    <div className="my-14">
      <h2 className="font-bold text-3xl tracking-widest w-[490px] mx-auto p-2 my-8 border-cyan-600 border-b-8">
        Frequently Asked Question_
      </h2>
      <div className="border-dashed border-2 border-cyan-600 p-6 space-y-6">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Who can join this course?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Only Programming Hero Students Can Join This Course. If You Are
              Comfortable With Basic JavaScript, React, Node, And MongoDB,
              Consider Joining This Course. However, If You Haven't Practiced
              React And Javascript In The Last 3+ Months, You Should Take Some
              Time To Revise Javascript And React Before The Class Starts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              How much JavaScript And React nedded for this coures
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For JavaScript, Basic Concepts, Event Handling, API, ES6,
              Debugging, Etc. For React, State, Props, Context API, Built-In
              Hooks, Routes, Component Lifecycle, Auth Integration, CRUD
              Operations, Dashboard, Debugging, Etc. For Node, API, Data
              Processing, CRUD, Basic Securities, Etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How many days continue this course</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For JavaScript, Basic Concepts, Event Handling, API, ES6,
              Debugging, Etc. For React, State, Props, Context API, Built-In
              Hooks, Routes, Component Lifecycle, Auth Integration, CRUD
              Operations
            </Typography>
          </AccordionDetails>
      
        </Accordion>
  
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Who can join this course?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Only Programming Hero Students Can Join This Course. If You Are
              Comfortable With Basic JavaScript, React, Node, And MongoDB,
              Consider Joining This Course. However, If You Haven't Practiced
              React And Javascript In The Last 3+ Months, You Should Take Some
              Time To Revise Javascript And React Before The Class Starts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              How much JavaScript And React nedded for this coures
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For JavaScript, Basic Concepts, Event Handling, API, ES6,
              Debugging, Etc. For React, State, Props, Context API, Built-In
              Hooks, Routes, Component Lifecycle, Auth Integration, CRUD
              Operations, Dashboard, Debugging, Etc. For Node, API, Data
              Processing, CRUD, Basic Securities, Etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How many days continue this course</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For JavaScript, Basic Concepts, Event Handling, API, ES6,
              Debugging, Etc. For React, State, Props, Context API, Built-In
              Hooks, Routes, Component Lifecycle, Auth Integration, CRUD
              Operations
            </Typography>
          </AccordionDetails>
      
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
