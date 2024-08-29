import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificStudent = () => {
  let [student, setStudent] = useState({});

  let params = useParams();

  const getData = async () => {
    try {
      let result = await axios({
        url: `htttp://localhost:3000/student/${params.id}`,
        method: "get",
      });
      setStudent(result);
    } catch (error) {}
  };
  return (
    <div>
      <div>
        <div>Student Name:{student.studentName}</div>
        <div>Student Address:{student.studentAddress}</div>
        <div>Student is {student.isMarried ? "married" : "unmarried"}</div>
      </div>
    </div>
  );
};

export default ReadSpecificStudent;
