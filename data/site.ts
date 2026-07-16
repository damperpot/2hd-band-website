export type Gig = {
  date: string;
  venue: string;
  location: string;
  status: "Available" | "Public gig" | "Booked";
};

export type Song = {
  title: string;
  artist: string;
  genre: string;
  decade: string;
};

export const site = {
  name: "2HD",
  fullName: "2HD (2nd Hand Daylight)",
  tagline: "Songs You Forgot You Loved",
  domain: "https://2hdband.co.uk",
  email: "bookings@2hdband.co.uk",
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/"
  }
};

export const bandMembers = [
  { name: "Cleo", role: "Lead Vocals" },
  { name: "John", role: "Guitar / Backing Vocals" },
  { name: "Dave", role: "Drums" },
  { name: "Andy", role: "Bass / Backing Vocals / Keys" }
];

export const gigs: Gig[] = [
  {
    date: "2026-08-15",
    venue: "Venue name to confirm",
    location: "West Northamptonshire",
    status: "Public gig"
  },
  {
    date: "2026-09-12",
    venue: "Private function",
    location: "Details withheld",
    status: "Booked"
  },
  {
    date: "2026-10-04",
    venue: "Venue name to confirm",
    location: "West Northamptonshire",
    status: "Public gig"
  }
];

export const songs: Song[] = [
  { title: "Shot by Both Sides", artist: "Magazine", genre: "New Wave", decade: "1970s" },
  { title: "Go Your Own Way", artist: "Fleetwood Mac", genre: "Rock", decade: "1970s" },
  { title: "Heroes", artist: "David Bowie", genre: "Alternative Pop", decade: "1970s" },
  { title: "Town Called Malice", artist: "The Jam", genre: "Punk", decade: "1980s" },
  { title: "Don't You Forget About Me", artist: "Simple Minds", genre: "New Wave", decade: "1980s" },
  { title: "Dakota", artist: "Stereophonics", genre: "Indie", decade: "2000s" },
  { title: "Mr. Brightside", artist: "The Killers", genre: "Indie", decade: "2000s" },
  { title: "I Predict a Riot", artist: "Kaiser Chiefs", genre: "Indie", decade: "2000s" },
  { title: "Place Your Hands", artist: "Reef", genre: "Rock", decade: "1990s" },
  { title: "The One I Love", artist: "R.E.M.", genre: "Alternative Pop", decade: "1980s" },
  { title: "Summer of '69", artist: "Bryan Adams", genre: "Rock", decade: "1980s" },
  { title: "Are You Gonna Go My Way", artist: "Lenny Kravitz", genre: "Rock", decade: "1990s" }
];
