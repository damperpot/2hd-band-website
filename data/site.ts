import calendarGigs from "./2hd-gigs-remaining-2026.json";

export type Gig = {
  date: string;
  title: string;
  venue: string | null;
  type: "Electric" | "Unplugged" | "Private function";
  public: boolean;
  time?: string;
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
    facebook: "https://www.facebook.com/2ndhanddaylight/about",
    instagram: "https://www.instagram.com/2hdband",
    youtube: "https://www.youtube.com/"
  }
};

export const bandMembers = [
  { name: "Cleo", role: "Lead Vocals" },
  { name: "John", role: "Guitar / Backing Vocals" },
  { name: "Dave", role: "Drums" },
  { name: "Andy", role: "Bass / Backing Vocals / Keys" }
];

export const gigs = calendarGigs as Gig[];

export const songs: Song[] = [
  { title: "20th Century Boy", artist: "T. Rex", genre: "Rock", decade: "1970s" },
  { title: "A Forest", artist: "The Cure", genre: "New Wave", decade: "1980s" },
  { title: "A Little Respect", artist: "Erasure", genre: "Alternative Pop", decade: "1980s" },
  { title: "Ace of Spades", artist: "Motorhead", genre: "Rock", decade: "1980s" },
  { title: "All My Life", artist: "Foo Fighters", genre: "Rock", decade: "2000s" },
  { title: "Alternative Ulster", artist: "Stiff Little Fingers", genre: "Punk", decade: "1970s" },
  { title: "Are You Gonna Be My Girl", artist: "Jet", genre: "Indie", decade: "2000s" },
  { title: "Babylon's Burning", artist: "The Ruts", genre: "Punk", decade: "1970s" },
  { title: "Basket Case", artist: "Green Day", genre: "Punk", decade: "1990s" },
  { title: "Blitzkrieg Bop", artist: "Ramones", genre: "Punk", decade: "1970s" },
  { title: "Bohemian Like You", artist: "The Dandy Warhols", genre: "Indie", decade: "2000s" },
  { title: "Boys Don't Cry", artist: "The Cure", genre: "New Wave", decade: "1970s" },
  { title: "Call Me", artist: "Blondie", genre: "New Wave", decade: "1980s" },
  { title: "Celebrity Skin", artist: "Hole", genre: "Rock", decade: "1990s" },
  { title: "Crash", artist: "The Primitives", genre: "Indie", decade: "1980s" },
  { title: "Don't You Forget About Me", artist: "Simple Minds", genre: "New Wave", decade: "1980s" },
  { title: "Drain the Blood", artist: "The Distillers", genre: "Punk", decade: "2000s" },
  { title: "Dreaming", artist: "Blondie", genre: "New Wave", decade: "1970s" },
  { title: "Echo Beach", artist: "Martha and the Muffins", genre: "New Wave", decade: "1980s" },
  { title: "Enjoy the Silence", artist: "Depeche Mode", genre: "Alternative Pop", decade: "1990s" },
  { title: "Eton Rifles", artist: "The Jam", genre: "Punk", decade: "1970s" },
  { title: "Ever Fallen in Love", artist: "Buzzcocks", genre: "Punk", decade: "1970s" },
  { title: "Everybody Wants to Rule the World", artist: "Tears for Fears", genre: "Alternative Pop", decade: "1980s" },
  { title: "Gangsters", artist: "The Specials", genre: "Ska", decade: "1970s" },
  { title: "Guns of Brixton", artist: "The Clash", genre: "Punk", decade: "1970s" },
  { title: "Hanging on the Telephone", artist: "Blondie", genre: "New Wave", decade: "1970s" },
  { title: "Hash Pipe", artist: "Weezer", genre: "Rock", decade: "2000s" },
  { title: "Hazy Shade of Winter", artist: "The Bangles", genre: "Alternative Pop", decade: "1980s" },
  { title: "Holiday in Cambodia", artist: "Dead Kennedys", genre: "Punk", decade: "1980s" },
  { title: "Hysteria", artist: "Muse", genre: "Rock", decade: "2000s" },
  { title: "I Only Want to Be with You", artist: "Dusty Springfield", genre: "Pop", decade: "1960s" },
  { title: "I Think We're Alone Now", artist: "Tiffany", genre: "Pop", decade: "1980s" },
  { title: "I Will Follow", artist: "U2", genre: "New Wave", decade: "1980s" },
  { title: "If the Kids Are United", artist: "Sham 69", genre: "Punk", decade: "1970s" },
  { title: "Kids in America", artist: "Kim Wilde", genre: "New Wave", decade: "1980s" },
  { title: "Lil' Devil", artist: "The Cult", genre: "Rock", decade: "1980s" },
  { title: "Monkey Man", artist: "The Specials", genre: "Ska", decade: "1970s" },
  { title: "Mrs Robinson", artist: "Simon & Garfunkel", genre: "Pop", decade: "1960s" },
  { title: "New Rose", artist: "The Damned", genre: "Punk", decade: "1970s" },
  { title: "No More Heroes", artist: "The Stranglers", genre: "Punk", decade: "1970s" },
  { title: "No One Knows", artist: "Queens of the Stone Age", genre: "Rock", decade: "2000s" },
  { title: "Planet Earth", artist: "Duran Duran", genre: "New Wave", decade: "1980s" },
  { title: "Pretty Vacant", artist: "Sex Pistols", genre: "Punk", decade: "1970s" },
  { title: "Pride (In the Name of Love)", artist: "U2", genre: "Rock", decade: "1980s" },
  { title: "Proud Mary", artist: "Creedence Clearwater Revival", genre: "Rock", decade: "1960s" },
  { title: "Psycho Killer", artist: "Talking Heads", genre: "New Wave", decade: "1970s" },
  { title: "Rain", artist: "The Cult", genre: "Rock", decade: "1980s" },
  { title: "Rolling in the Deep", artist: "Adele", genre: "Pop", decade: "2010s" },
  { title: "Runaway Boys", artist: "Stray Cats", genre: "Rock", decade: "1980s" },
  { title: "She Sells Sanctuary", artist: "The Cult", genre: "Rock", decade: "1980s" },
  { title: "Shot by Both Sides", artist: "Magazine", genre: "New Wave", decade: "1970s" },
  { title: "Should I Stay or Should I Go", artist: "The Clash", genre: "Punk", decade: "1980s" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", decade: "1990s" },
  { title: "Spellbound", artist: "Siouxsie and the Banshees", genre: "New Wave", decade: "1980s" },
  { title: "Suffragette City", artist: "David Bowie", genre: "Rock", decade: "1970s" },
  { title: "Sweet Dreams (Are Made of This)", artist: "Eurythmics", genre: "New Wave", decade: "1980s" },
  { title: "Swords of a Thousand Men", artist: "Tenpole Tudor", genre: "Punk", decade: "1980s" },
  { title: "Tainted Love / The Love Cats", artist: "Soft Cell / The Cure", genre: "New Wave", decade: "1980s" },
  { title: "Teenage Kicks", artist: "The Undertones", genre: "Punk", decade: "1970s" },
  { title: "Tears of a Clown", artist: "Smokey Robinson & The Miracles", genre: "Soul", decade: "1970s" },
  { title: "Time Bomb", artist: "Rancid", genre: "Punk", decade: "1990s" },
  { title: "Toxic", artist: "Britney Spears", genre: "Pop", decade: "2000s" },
  { title: "Turning Japanese", artist: "The Vapors", genre: "New Wave", decade: "1980s" },
  { title: "Uprising", artist: "Muse", genre: "Rock", decade: "2000s" },
  { title: "Walk Like an Egyptian", artist: "The Bangles", genre: "Pop", decade: "1980s" },
  { title: "What Difference Does It Make?", artist: "The Smiths", genre: "Indie", decade: "1980s" },
  { title: "What Do I Get?", artist: "Buzzcocks", genre: "Punk", decade: "1970s" },
  { title: "Where Eagles Dare", artist: "Misfits", genre: "Punk", decade: "1970s" },
  { title: "White Wedding", artist: "Billy Idol", genre: "Rock", decade: "1980s" },
  { title: "Zombie", artist: "The Cranberries", genre: "Rock", decade: "1990s" }
];
