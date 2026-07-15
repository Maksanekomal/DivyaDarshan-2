
import mahashivratri from "../assets/festivals/mahashivratri.jpg";
import rathyatra from "../assets/festivals/rathyatra.jpg";
import navratri from "../assets/festivals/navratri.jpg";
import diwali from "../assets/festivals/diwali.jpg";
import ganesh from "../assets/festivals/ganesh-chaturthi.jpg";
import badrikedar from "../assets/festivals/badri-kedar.jpg";

const festivals = [
  {
    id: 1,
    name: "Maha Shivratri",
    month: "March",
    deity: "Lord Shiva",
    temple: "Kedarnath, Somnath, Kashi Vishwanath, Mahakaleshwar",
    image: mahashivratri,
    description:
      "Maha Shivratri is one of the most sacred Hindu festivals dedicated to Lord Shiva. Devotees observe fasting, perform night-long prayers, and visit Shiva temples.",
    significance:
      "Celebrates the divine union of Lord Shiva and Goddess Parvati.",
  },

  {
    id: 2,
    name: "Rath Yatra",
    month: "June",
    deity: "Lord Jagannath",
    temple: "Jagannath Temple, Puri",
    image: rathyatra,
    description:
      "The famous chariot festival where Lord Jagannath, Balabhadra and Subhadra are taken in magnificent wooden chariots.",
    significance:
      "One of the world's largest annual religious processions.",
  },

  {
    id: 3,
    name: "Navratri",
    month: "October",
    deity: "Goddess Durga",
    temple: "Meenakshi Temple & Shakti Peethas",
    image: navratri,
    description:
      "Nine nights dedicated to the worship of Goddess Durga in her various forms.",
    significance:
      "Celebrates the victory of good over evil.",
  },

  {
    id: 4,
    name: "Diwali",
    month: "October / November",
    deity: "Lord Rama & Goddess Lakshmi",
    temple: "Ayodhya, Kashi Vishwanath, Akshardham",
    image: diwali,
    description:
      "Diwali, the Festival of Lights, symbolizes the victory of light over darkness and good over evil. Temples across India are beautifully illuminated.",
    significance:
      "One of the largest and most celebrated festivals in India.",
  },

  {
    id: 5,
    name: "Ganesh Chaturthi",
    month: "September",
    deity: "Lord Ganesha",
    temple: "Siddhivinayak Temple",
    image: ganesh,
    description:
      "Celebrates the birth of Lord Ganesha with prayers, devotional music, cultural events, and grand processions.",
    significance:
      "One of Maharashtra's biggest religious festivals.",
  },

  {
    id: 6,
    name: "Badri Kedar Festival",
    month: "June",
    deity: "Lord Vishnu & Lord Shiva",
    temple: "Badrinath & Kedarnath",
    image: badrikedar,
    description:
      "A cultural and devotional festival celebrated jointly at Badrinath and Kedarnath with music, dance, and spiritual programs.",
    significance:
      "Promotes the spiritual and cultural heritage of Uttarakhand.",
  },
];

export default festivals;