// SPDX-License-Identifier: Corecis

pragma solidity ^0.8.0;

// creation of school addmission system
// requirements
// name, father name, age, course of selection, previous qualification
contract School {
    // variables
    uint16 roll_no = 1;
    uint receive_address;
    address payable owner;
    // sruct
    struct StudentData {
        string name_;
        string father_name;
        uint16 age;
        string course_selection;
        string previous_qualification;
    }

    // mapping

    mapping(uint16 => StudentData) studentList;

    // constructor
    constructor(address payable owner_){
        owner = owner_;
    }

    // functions
    
    // readable functions
    // Worked on line 17 
    function getRoll() public view returns (uint16) {
        return roll_no;
    }

    function get(uint16 _roll_no) public view returns (string memory, string memory, uint16, string memory, string memory) {
        StudentData storage st = studentList[_roll_no];
        return(st.name_, st.father_name, st.age, st.course_selection, st.previous_qualification);
    }

    // write functions
    function AddStudent(string memory _name, string memory _father, uint16 _age, string memory _course, string memory _previous) public payable {
        require(msg.value >= 2 ether, "Amount should be equal to 2 Ether per Student.");
        studentList[roll_no] = StudentData(_name,_father,_age,_course,_previous);
        owner.transfer(msg.value);
        roll_no++;
    }
}