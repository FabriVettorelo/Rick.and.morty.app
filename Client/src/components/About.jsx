const About = () =>{
return(
<div>
<h2 style={{color:"white"}}> Rick and Morty Project</h2>
<p style={{color:"white"}}>Hi, I'm Fabri Vettorelo, this project was made during my days learning on a javascript bootcamp.</p>
<p style={{color:"white"}}>This React App originally was way more basic and simple, it had the option to bring random characters through typing a random number in the search bar(the character ID). And you were able to delete or add this characters to "my favorites".</p>
<p style={{color:"white"}}>It was just a practice exercise but I wanted to make this a little nicer to be able to show it and add it to my portfolio. So I decided to modify it and now it loads all 826 characters from the API on the home view, it has the characters ordered on pages and it shows the information of the selected character when you click the image.</p>
<p style={{color:"white"}}>There's only one account created on the database and there is no option to register a new one, after all this was just a practice excersice I made while learning, if you wish to see my potential I suggest to check out my more recent projects. Bye! </p>
<img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" style={{height:"50vh"}} alt="" />
</div>
)
}
export default About;