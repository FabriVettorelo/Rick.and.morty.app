const About = () =>{
return(
<div>
<h2 style={{color:"white"}}> Rick and Morty Project</h2>
<p style={{color:"white"}}>Hi, I'm Fabri Vettorelo, this project was made during my days learning on a javascript bootcamp.</p>
<p style={{color:"white"}}>This React App originally was way more basic and simple, it had the option to bring random characters through typing a random number in the search bar(the character ID). And you were able to delete or add this characters to "my favorites".</p>
<p style={{color:"white"}}>It was just a practice exercise but I wanted to make this a little nicer to be able to show it and add it to my portfolio. So I decided to modify it and now it loads 300 characters from the API on the home view, (there are 826 but it was really slow, you can still access all the characters thanks to the searchbar) it has the characters ordered on pages and it shows the information of the selected character when you click the image.</p>
<p style={{color:"white"}}>There's only one account created on the database and there is no option to register a new one, after all this was just a practice excersice I made while learning, if you wish to see my potential I suggest to check out my more recent projects. Bye! </p>
</div>
)
}
export default About;