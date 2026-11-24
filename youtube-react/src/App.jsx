
import { Card } from './props'
import { Anime } from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'


function App() {
     const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    }
  ];

   const animeCharacters = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    role: "Captain of the Straw Hat Pirates",
    avatar: "https://dicebear.com"
  },
  {
    id: 2,
    name: "Naruto Uzumaki",
    role: "Seventh Hokage",
    avatar: "https://dicebear.com"
  },
  {
    id: 3,
    name: "Mikasa Ackerman",
    role: "Survey Corps Officer",
    avatar: "https://dicebear.com"
  },
  {
    id: 4,
    name: "Satoru Gojo",
    role: "Special Grade Jujutsu Sorcerer",
    avatar: "https://dicebear.com"
  },
  {
    id: 5,
    name: "Frieren",
    role: "Elven Mage",
    avatar: "https://dicebear.com"
  },
  {
    id: 6,
    name: "Levi Ackerman",
    role: "Special Operations Squad Captain",
    avatar: "https://dicebear.com"
  },
  {
    id: 7,
    name: "Spike Spiegel",
    role: "Bounty Hunter",
    avatar: "https://dicebear.com"
  },
  {
    id: 8,
    name: "Nezuko Kamado",
    role: "Demon Ally",
    avatar: "https://dicebear.com"
  }
];
  return (
    <div className='flex-container'>

      {
        profiles.map((profile) => (
          <Card key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}/>
        ))
      }
      <p>Below are some anime recomendations:-</p>
      <div className="card">
        <div className="card-body">
        {
          animeCharacters.map((anim)=>(
            <Anime key={anim.id}
            name={anim.name}
            role={anim.role}
            avatar={anim.avatar}/>
          ))
        }
        </div>

      </div>
      {/*<Card name= "mark" 
      title='Front-End developer' 
      bio='I like to work different front-end technologies and play videos games.'/>
  <Card
        name="Tiffany"
        title="Engineering manager"
        bio="I have worked in tech for 15 years and love to help people grow in this industry."
      />
      <Card
        name="Doug"
        title="Back-End developer"
        bio="I have been a software developer for over 20 years and I love working with Go and Rust."
      />*/}
     

    </div>
  )
}






export default App
