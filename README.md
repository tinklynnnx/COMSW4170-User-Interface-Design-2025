# cUNIected - Club Connection App

A fully integrated React application that combines club browsing, detailed club information, event management, and newsletter features. This app was compiled from three team member contributions into one cohesive application.


## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
cd cUNIected-app
npm install
npm i firebase
```

### Step 2: Start React to Open
npm start

## How to Use

### Navigation Flow

1. **Clubs List Screen** (Default): 
   - Browse all clubs
   - Click the star to favorite/unfavorite clubs
   - Click on GCC club card to view details

2. **Club Detail Screen** (GCC):
   - View club information
   - Browse past events in carousel
   - Click "Read More" on Mid-Autumn Festival to view newsletter
   - Click on upcoming event to view RSVP form

3. **Newsletter Screen**:
   - Read event recaps and articles
   - View event photos

4. **Campus Feed/Post Event Screens**:
   - View event thumbnails
   - Fill out 'Post Event' form with title and description
   - Change the Date Picker

5. **Bottom Navigation**:
   - "Clubs" button - Return to clubs list
   - "Events" button - Placeholder for future functionality




## Technologies Used

- **React** 19.2.3 - UI framework
- **Firebase** 12.6.0 - Backend/database 
Used Firestore database to store the event title and description when event is posted by club admin. 
- **lucide-react** 0.561.0 - Icon library
- **react-router-dom** 7.10.1 - Navigation
- **react-scripts** 5.0.1 - Build tooling

