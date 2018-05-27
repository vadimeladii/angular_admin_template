export class ParkingLot {

  id: number;
  name: string;
  totalPlaces: number;
  availablePlaces: number;

  constructor(id: number, name: string, totalPlaces: number, availablePlaces: number) {
    this.id = id;
    this.name = name;
    this.totalPlaces = totalPlaces;
    this.availablePlaces = availablePlaces;
  }
}
