import ShotLocation from './Location';

export default class Photo {
  id: string;
  title: string;
  description: string;
  filmUsed: string;
  location: ShotLocation;
  dateTaken: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    filmUsed: string,
    location: ShotLocation,
    dateTaken: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.filmUsed = filmUsed;
    this.location = location;
    this.dateTaken = dateTaken;
  }
}
