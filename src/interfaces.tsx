export interface Card {
  /**
   Card ID
  */
  id?: number | undefined | null;
  /**
   The color of the card
  */
  color?: string | undefined | null;
  /**
   Card title
  */
  title?: string | undefined | null;
  /**
     Completion level
    */
  completionLevel: number;
  /**
     Other? feel free to add if needed
    */
}

export const cardsData: Card[] = [
  { id: 1, color: "#4caf50", title: "Carte 1", completionLevel: 100 },
  { id: 2, title: "Carte 2", completionLevel: 100 },
  { id: 3, title: "Carte 3.1", completionLevel: 90 },
  { id: 4, color: "#ff9800", title: "Carte 3.2", completionLevel: 80 },
  { id: 5, color: "#e51c23", title: "Carte 3.3", completionLevel: 70 },
  { id: 6, color: "#4caf50", title: "Carte 4", completionLevel: 70 },
  { id: 7, title: "Carte 5", completionLevel: 10 },
  { id: 8, color: "#50BFD5", title: "Carte 6.1", completionLevel: 25 },
  { id: 9, color: "#FFE527", title: "Carte 6.2", completionLevel: 0 },
  { id: 10, color: "#e51c23", title: "Carte de fin", completionLevel: 0 }
];
