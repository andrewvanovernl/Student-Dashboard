import React from 'react';
import InputSelect from './InputSelect';

const SelectStudents = (props) => {
    const inputSelects = props.students.map(item => {
        return (
            <InputSelect
                key={item}
                selectName={item}
                selectText={item}
                selectChange={props.studentsChange}
            />
        )
    })
    return (
        <div className="SelectStudents">
            <p>filter name from a student:</p>
            {inputSelects}
        </div>
    )
}

export default SelectStudents;