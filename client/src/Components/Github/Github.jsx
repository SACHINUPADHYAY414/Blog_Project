import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Row className="w-full w-screen-lg justify-center items-center text-center mb-4 mt-4 px-4 py-4 border bg-slate-50 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 mt-4">
          How much <span className="text-blue-500">Code</span> I Write
        </h2>
        
        <div data-aos="fade-up" className="flex justify-center items-center">
          <GitHubCalendar
            username="SACHINUPADHYAY414"
            color="#1872B6"
            blockSize={13}
            blockMargin={10}
            fontSize={16}
            className="justify-center items-center"
          />
        </div>
      </Row>
    </div>
  );
}

export default Github;
