import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllStudent = () => {
  let navigate = useNavigate();
  let [student, setStudent] = useState([]);

  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/student`,
        method: "get",
      });
      setStudent(result.data.data);
      console.log(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      {student.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "solid gray 3px",
              padding: "10px",
            }}
          >
            <div>Student name is {value.studentName}</div>
            <div>Student address is {value.studentAddress}</div>
            {console.log(value.isMarried)}
            <div>Student is {value.isMarried ? "married" : "unmarried"}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllStudent;
