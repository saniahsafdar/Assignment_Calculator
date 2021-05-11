import Assignment from "./assignment";

export const assignments: Assignment[] = [
    {id:1,name:"HW1",completed: true,total: 10,score: 9},
    {id:2,name:"Mid-Term Exam",completed: true,total: 50,score: 42},    
    {id:3, name:"Extra Credit",completed: false,total: 5,score: 0},
    {id:4,name:"Quiz",completed: true,total: 10,score: 10},
];

let nextId=5;

export const pushAssignment = (assignment:Assignment):void =>{
    assignment.id = nextId;
    nextId++
    assignments.push(assignment);
} 
export const displayAssignments =():Assignment[] =>{
    return assignments;
}