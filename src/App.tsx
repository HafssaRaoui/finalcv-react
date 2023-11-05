import './App.css'
import Footer from './Footer';
import INFO from './INFO'
import Linguistiques from './Linguistique';
import Loisir from './Loisir';
import Langues from './Langues';
import MOI from './MOI'
import Education from './Education';


function App() {
 

return (
<>


<head>
	<title>MON CV</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

</head>


<body>

<div className="main">

	<div className="left">
    <br/>
		<div className="profile-img"><img src='images/cv.jpg' alt="Profile Picture" width={150}/></div>
		<INFO></INFO>
		<Langues></Langues>
		<br/>
		<Linguistiques></Linguistiques>
		<br/>
		<Loisir></Loisir>
	</div>


	<div className="right">
		<div className="name-div">
			<h1>AYMANE KENBOUCH</h1>
			<p>Eleve Ingénieur </p>
		</div>

		<MOI></MOI>
    <Education></Education>
	</div>
</div>

</body>
<Footer></Footer>
    </>);
}

export default App