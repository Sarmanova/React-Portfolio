import React from "react";
const styles = {
  card:{
    float: 'right',
    marginTop: "50px",
    marginRight:'170px',
    fontSize:'32px'
   
  }
}
 function About() {
   return (
    <div id="about">
    <section className="about">
         <h1 className="title">About Me</h1>
         <img  id="avatar" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/011/043/original/IMG-0788.JPG?1624118358" alt="Zhansaya Sarmanova" />
         <p className="parag" style={styles.card}>Hello, My name is Zhansaya Sarmanova. <br />I am full-stack Web Developer living in Austin,TX. <br /> I am very passionate about <br/>producing high level resultsand dedicated to my work. </p>
    </section>
</div>

  );
}
export default About;