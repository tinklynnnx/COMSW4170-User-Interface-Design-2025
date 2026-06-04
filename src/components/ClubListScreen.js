import React from 'react';
import { Menu, User} from 'lucide-react';
import '../styles/ClubListScreen.css';


// image imports
import picnicImg from '../images/picnic.png';
import gourmandImg from '../images/gourmand.png';
import gccImg from '../images/gcc.png';
import taalImg from '../images/taal.png';
import designImg from '../images/design.png';
import lionImg from '../images/lion.png';
import photoImg from '../images/image.png';
import boardgamesImg from '../images/image copy.png';
import instagramIcon from '../images/instagram.svg';  
import mailIcon from '../images/mail.svg';  

const initialClubs = [
  {
    id: 1,
    name: "Picnic Club",
    tagline: "Food tasting & community gatherings",
    meetings: "Meetings: M, Sat 7–8pm",
    image: picnicImg,
    starred: true,
  },
  {
    id: 2,
    name: "Gourmand",
    tagline: "Food critics, reviews, and tastings!",
    meetings: "Meetings: Sat 12pm",
    image: gourmandImg,
    starred: true,
  },
  {
    id: 3,
    name: "GCC",
    tagline: "Columbia's largest Chinese Student Organization",
    meetings: "Meetings: M, Sat 7–8pm",
    image: gccImg,
    starred: true,
  },
  {
    id: 4,
    name: "Taal",
    tagline: "South Asian Classical Fusion dance team",
    meetings: "Meetings: M, W 8–10pm, Sat 10am–12pm",
    image: taalImg,
    starred: true,
  },
  {
    id: 5,
    name: "Design Club",
    tagline: "Student-led org for UX, Product Design, etc.",
    meetings: "Meetings: M 8–9pm",
    image: designImg,
    starred: true,
  },
  {
    id: 6,
    name: "Lion Dance",
    tagline: "Student-run lion dance troupe",
    meetings: "Meetings: W 3–5pm, Sun 8–10pm",
    image: lionImg,
    starred: true,
  },
  {
    id: 7,
    name: "Photography Club",
    tagline: "Campus photo walks & editing workshops",
    meetings: "Meetings: Thu 6–8pm",
    image: photoImg,
    starred: false,
  },
  {
    id: 8,
    name: "Board Games Club",
    tagline: "Weekly strategy, co-op & party games",
    meetings: "Meetings: Fri 7–11pm",
    image: boardgamesImg,
    starred: false,
  },
];

const ClubListScreen = ({ setCurrentScreen, setSelectedClub }) => {
  const [clubs, setClubs] = React.useState(
    initialClubs.map((c, index) => ({ ...c, order: index }))
  );

  const toggleStar = (id) => {
    setClubs((prev) =>
      prev.map((club) =>
        club.id === id ? { ...club, starred: !club.starred } : club
      )
    );
  };

  const sortedClubs = React.useMemo(() => {
    const copy = [...clubs];
    copy.sort((a, b) => {
      if (a.starred === b.starred) {
        return a.order - b.order;
      }
      return a.starred ? -1 : 1;
    });
    return copy;
  }, [clubs]);

  const handleClubClick = (club) => {
    if (club.id === 3) { // GCC club
      setSelectedClub(club);
      setCurrentScreen('club');
    }
  };

  return (
    <div className="club-list-screen">
      <div className="top-icons">
        <button className="icon-square" aria-label="Menu">
        </button>
        <button className="icon-circle" aria-label="Profile">
             <User size={28} color="#94b7ff" />
        </button>
      </div>

      <h1 className="title">Clubs</h1>

      <div className="clubs-scroll">
        {sortedClubs.map((club) => (
          <div 
            key={club.id} 
            className="club-card"
            onClick={() => handleClubClick(club)}
            style={{ cursor: club.id === 3 ? 'pointer' : 'default' }}
          >
            <div className="club-left">
              <img
                src={club.image}
                alt={club.name}
                className="club-logo-img"
              />
            </div>

            <div className="club-middle">
              <h2 className="club-name">{club.name}</h2>
              <p className="club-tagline">{club.tagline}</p>
              <p className="club-meetings">{club.meetings}</p>
            </div>

            <div className="club-right">
              <button
                className={"star-button" + (club.starred ? " starred" : "")}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleStar(club.id);
                }}
                aria-label="Favorite"
              >
                ★
              </button>
              <button 
                className="small-icon" 
                aria-label="Instagram"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={instagramIcon} alt="Instagram" className="icon-img" />
              </button>
              <button 
                className="small-icon" 
                aria-label="Email"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={mailIcon} alt="Email" className="icon-img" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubListScreen;
