export interface School {
  id: number;
  name: string;
  location: string;
  board: string;
  image: string;
  description: string;
  tags: string[];
  category: string[];
}

export const schools: School[] = [
  {
    id: 1,
    name: "Ecole Globale International Girls' School",
    location: "Sahaspur, Dehradun",
    board: "CBSE / IB",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    description: "Premier all-girls boarding school offering holistic education with global exposure and leadership programs.",
    tags: ["Girls Only", "Boarding", "IB"],
    category: ["Girls Schools", "Boarding Schools", "International"],
  },
  {
    id: 2,
    name: "The Doon School",
    location: "Mall Road, Dehradun",
    board: "ISC",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    description: "One of India's oldest and most prestigious all-boys boarding schools, known for academic rigor and traditions.",
    tags: ["Boys Only", "Boarding", "ISC"],
    category: ["Boarding Schools"],
  },
  {
    id: 3,
    name: "Welham Girls' School",
    location: "Municipal Road, Dehradun",
    board: "ISC",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    description: "Historic all-girls school fostering independent thinking, creativity, and excellence since 1957.",
    tags: ["Girls Only", "Boarding", "ISC"],
    category: ["Girls Schools", "Boarding Schools"],
  },
  {
    id: 4,
    name: "Brightlands School",
    location: "Rajpur Road, Dehradun",
    board: "CBSE",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    description: "Well-established co-ed day school with strong CBSE results and a focus on holistic child development.",
    tags: ["Co-ed", "Day School", "CBSE"],
    category: ["CBSE Schools", "Budget Friendly"],
  },
  {
    id: 5,
    name: "Ann Mary School",
    location: "Clement Town, Dehradun",
    board: "CBSE",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop",
    description: "Affordable CBSE school with modern facilities and a warm, nurturing learning environment.",
    tags: ["Co-ed", "Day School", "CBSE"],
    category: ["CBSE Schools", "Budget Friendly"],
  },
  {
    id: 6,
    name: "Woodstock School",
    location: "Mussoorie, Near Dehradun",
    board: "IB",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    description: "International co-ed boarding school in the Himalayas offering IB curriculum with a diverse global community.",
    tags: ["Co-ed", "Boarding", "IB"],
    category: ["International", "Boarding Schools"],
  },
];
