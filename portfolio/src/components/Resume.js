import React from 'react'
const styles = {
    header: {
        // width: "100%",
        // margin: "0 auto",
        // textAlign: "center",
        // padding: "20px",
    },
    p: {
        // width: "60%",
        // margin: "0 auto",
        // textAlign: "center",
        // padding: "10px",
    },
};
 const Resume = () => {
    return (
        <div className="container">
            <h2 style={styles.header}>My Resume</h2>
             <a
                href=""
                className="link"
            >
                Download Resume
            </a>
        </div>
    )
}
export default Resume;