export type ServiceArea = {
  slug: string;
  county: string;
  towns: string[];
  metaDescription: string;
  introduction: string;
  localContext: string;
  planningNote: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "northamptonshire",
    county: "Northamptonshire",
    towns: ["Daventry", "Northampton", "Towcester", "Brackley", "Kettering", "Wellingborough"],
    metaDescription:
      "Book 2HD, a Daventry-area four-piece covers band, for pubs, clubs, festivals and private events across Northamptonshire. Electric and unplugged sets.",
    introduction:
      "2HD is based near Daventry in West Northamptonshire, making the county the heart of our local area. We play energetic rock, punk, indie, new wave and alternative pop for pubs, clubs, festivals and private functions.",
    localContext:
      "We welcome enquiries from across Northamptonshire, including Daventry, Northampton, Towcester, Brackley, Kettering and Wellingborough. Share your date, location and type of event and we can check availability and whether the full electric band or 2HD Unplugged is the better fit.",
    planningNote:
      "For a Northamptonshire booking, include the venue or event location as well as the date. That gives us the useful details from the start, whether you are planning a lively pub night, a festival slot or a private celebration."
  },
  {
    slug: "warwickshire",
    county: "Warwickshire",
    towns: ["Rugby", "Southam", "Warwick", "Nuneaton", "Stratford-upon-Avon", "Leamington Spa"],
    metaDescription:
      "Looking for a live covers band in Warwickshire? 2HD play rock, punk, indie, new wave and alternative pop at pubs, festivals and private events.",
    introduction:
      "From our base near Daventry, 2HD welcomes bookings across Warwickshire for pubs, clubs, festivals and private functions. Our four-piece line-up delivers an energetic full-band show, with an unplugged option for more intimate settings.",
    localContext:
      "We welcome enquiries from Rugby, Southam, Warwick, Nuneaton, Stratford-upon-Avon, Leamington Spa and surrounding Warwickshire communities. Tell us where the event is taking place and we will confirm availability for your date.",
    planningNote:
      "Warwickshire events range from compact pub rooms to outdoor festivals and private celebrations. Let us know the setting, the atmosphere you want and whether you are considering electric or unplugged so the conversation starts with the right format."
  },
  {
    slug: "buckinghamshire",
    county: "Buckinghamshire",
    towns: ["Buckingham", "Winslow", "Aylesbury", "Newport Pagnell", "Olney", "Stony Stratford"],
    metaDescription:
      "Book 2HD for live covers in Buckinghamshire: a four-piece rock, punk, indie and new wave band for pubs, festivals and private functions.",
    introduction:
      "2HD is a four-piece live covers band based near Daventry and available for suitable dates across Buckinghamshire and the surrounding area. We perform rock, punk, indie, new wave and alternative pop in both electric and unplugged formats.",
    localContext:
      "We welcome enquiries from Buckingham, Winslow, Aylesbury and communities around the north of the county, as well as nearby Newport Pagnell, Olney and Stony Stratford. Send the event location with your enquiry so we can confirm the practical details for the date.",
    planningNote:
      "A precise location is especially helpful for Buckinghamshire-area enquiries. Add the venue or town, event type and preferred format when you get in touch, and we can respond with availability and the next useful questions."
  },
  {
    slug: "leicestershire",
    county: "Leicestershire",
    towns: ["Market Harborough", "Lutterworth", "Hinckley", "Leicester", "Wigston", "Broughton Astley"],
    metaDescription:
      "2HD are a Daventry-area live covers band available for pubs, clubs, festivals and private events across Leicestershire. Electric or unplugged.",
    introduction:
      "Based near Daventry, 2HD welcomes Leicestershire enquiries for energetic pub and club nights, festival appearances and private functions. The set moves through rock, punk, indie, new wave and alternative pop rather than the standard covers-band playlist.",
    localContext:
      "We welcome enquiries from Market Harborough, Lutterworth, Hinckley, Leicester, Wigston, Broughton Astley and surrounding communities. Availability depends on the date and location, so include both when you contact us.",
    planningNote:
      "For a Leicestershire booking, tell us whether you are planning a full-energy evening or a more relaxed occasion. We can then discuss the electric show or 2HD Unplugged with the event setting in mind."
  }
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
