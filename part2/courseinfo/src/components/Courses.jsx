const Part = ({content}) => <li>{content.name} {content.exercises}</li>

const Course = ({course}) => {
    return (
        <>
            <h2>{course.name}</h2>
            <ul>
                {(course.parts).map(part => 
                    <Part key={part.id} content={part} />
                )}
                <li><b>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></li>
            </ul>
        </>
    )
}

export default Course