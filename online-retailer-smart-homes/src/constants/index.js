import RemoBell from "../assets/doorBells/remo_bell.jpeg";
import RemoMiniBell from "../assets/doorBells/remo_mini_bell.jpeg";
import BlinkBell from "../assets/doorBells/blink_bell.jpeg";
import BlinkMiniBell from "../assets/doorBells/blink_mini_bell.jpeg";
import RingBell from "../assets/doorBells/ring_bell_mini.jpeg";
import RingMiniBell from "../assets/doorBells/ring_bell_mini.jpeg";
import lock1 from "../assets/doorLocks/doorlock-1.jpg";
import lock2 from "../assets/doorLocks/doorlock-2.jpg";
import lock3 from "../assets/doorLocks/doorlock-3.png";
import lock4 from "../assets/doorLocks/doorlock-4.jpg";
import lock5 from "../assets/doorLocks/doorlock-5.jpg";
import speaker1 from "../assets/speakers/echo.jpeg";
import speaker2 from "../assets/speakers/echo2.jpeg";
import speaker3 from "../assets/speakers/homepod.jpg";
import speaker4 from "../assets/speakers/homepod_mini.jpg";
import speaker5 from "../assets/speakers/nest.jpg";
import speaker6 from "../assets/speakers/pod.jpg";
import light1 from "../assets/lightnings/light-1.jpg";
import light2 from "../assets/lightnings/light-2.jpg";
import light3 from "../assets/lightnings/light-3.jpg";
import light4 from "../assets/lightnings/light-4.jpg";
import thermo1 from "../assets/thermo/th1.jpg";
import thermo2 from "../assets/thermo/th2.jpg";
import thermo3 from "../assets/thermo/th3.jpg";
import thermo4 from "../assets/thermo/th4.jpg";
import a1 from "../assets/accessories/a1.jpeg";
import a2 from "../assets/accessories/a2.jpeg";
import a3 from "../assets/accessories/a3.jpeg";
import a4 from "../assets/accessories/a4.jpg";



const items = [
  {
    id: "db1",
    name: "Remo Doorbell",
    price: 99.99,
    manufacturer: "Remo",
    discount: 15,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: RemoBell,
    category: 1,
  },
  {
    id: "db2",
    name: "Remo Doorbell Mini",
    price: 59.99,
    manufacturer: "Remo",
    discount: 10,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: RemoMiniBell,
    category: 1,
  },
  {
    id: "db3",
    name: "Blink Doorbell",
    price: 449.99,
    manufacturer: "Blink",
    discount: 50,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: BlinkBell,
    category: 1,
  },
  {
    id: "db4",
    name: "Blink Doorbell Mini",
    price: 300.99,
    manufacturer: "Blink",
    discount: 25,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: BlinkMiniBell,
    category: 1,
  },
  {
    id: "db5",
    name: "Ring Doorbell",
    price: 349.99,
    manufacturer: "Ring",
    discount: 30,
    // accessories: ["a7", "a8"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: RingBell,
    category: 1,
  },
  {
    id: "db6",
    name: "Ring Doorbell Mini",
    price: 299.99,
    manufacturer: "Ring",
    discount: 15,
    // accessories: ["a7", "a8"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: RingMiniBell,
    category: 1,
  },
  {
    id: "dl1",
    name: "Door Lock 1",
    price: 99.99,
    manufacturer: "Remo",
    discount: 15,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    image: lock1,
    category: 2,
  },
  {
    id: "dl2",
    name: "Door Lock 2",
    price: 59.99,
    manufacturer: "Remo",
    discount: 10,
    image: lock2,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 2,
  },
  {
    id: "dl3",
    name: "Door Lock 3",
    price: 449.99,
    manufacturer: "Blink",
    discount: 50,
    image: lock3,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 2,
  },
  {
    id: "dl4",
    name: "Door Lock 4",
    price: 300.99,
    manufacturer: "Blink",
    discount: 25,
    image: lock4,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 2,
  },
  {
    id: "dl5",
    name: "Door Lock 5",
    price: 349.99,
    manufacturer: "Ring",
    discount: 30,
    image: lock5,
    // accessories: ["a7", "a8"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 2,
  },
  {
    id: "s1",
    name: "Echo Speaker",
    price: 99.99,
    manufacturer: "Amazon",
    discount: 15,
    image: speaker1,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "s2",
    name: "Echo nextgen",
    price: 59.99,
    manufacturer: "Amazon",
    discount: 10,
    image: speaker2,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "s3",
    name: "Homepod",
    price: 449.99,
    manufacturer: "Google",
    discount: 50,
    image: speaker3,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "s4",
    name: "Homepod Mini",
    price: 300.99,
    manufacturer: "Google",
    discount: 25,
    image: speaker4,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "s5",
    name: "nest",
    price: 349.99,
    manufacturer: "Google",
    discount: 30,
    image: speaker5,
    // accessories: ["a7", "a8"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "s6",
    name: "Pod",
    price: 299.99,
    manufacturer: "Apple",
    discount: 15,
    image: speaker6,
    // accessories: ["a7", "a8"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 3,
  },
  {
    id: "l1",
    name: "Smart Light",
    price: 99.99,
    manufacturer: "Philips",
    discount: 15,
    image: light1,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 4,
  },
  {
    id: "l2",
    name: "Smart Light nextgen",
    price: 59.99,
    manufacturer: "Philips",
    discount: 10,
    image: light2,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 4,
  },
  {
    id: "l3",
    name: "Smart Light Mini",
    price: 449.99,
    manufacturer: "Philips",
    discount: 50,
    image: light3,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 4,
  },
  {
    id: "l4",
    name: "Smart Light Mini 2",
    price: 300.99,
    manufacturer: "Philips",
    discount: 25,
    image: light4,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 4,
  },
  {
    id: "t1",
    name: "EchoBees Thermostat",
    price: 99.99,
    manufacturer: "EchoBees",
    discount: 15,
    image: thermo1,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 5,
  },
  {
    id: "t2",
    name: "Nest Thermostat",
    price: 59.99,
    manufacturer: "Nest",
    discount: 10,
    image: thermo2,
    // accessories: ["a1", "a2", "a3", "a4"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 5,
  },
  {
    id: "t3",
    name: "Nest Thermostat Mini",
    price: 449.99,
    manufacturer: "Nest",
    discount: 50,
    image: thermo3,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 5,
  },
  {
    id: "t4",
    name: "Honeywell Thermostat",
    price: 300.99,
    manufacturer: "Honeywell",
    discount: 25,
    image: thermo4,
    // accessories: ["a5", "a6"],
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
    category: 5,
  },
  {
    id: "a1",
    name: "Door Bell Stand",
    price: 15,
    manufacturer: "Remo",
    discount: 2,
    image: a1,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a2",
    name: "Door Bell Powerkit",
    price: 14,
    manufacturer: "Remo",
    discount: 1,
    image: a2,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a3",
    name: "Door Bell Warranty 3 years",
    price: 10,
    manufacturer: "Remo",
    discount: 1,
    image: a3,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a4",
    name: "Door Bell Warranty 5 years",
    price: 12,
    manufacturer: "Remo",
    discount: 1,
    image: a4,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a5",
    name: "Blink Door Bell Warranty 5 years",
    price: 12,
    manufacturer: "Blink",
    discount: 1,
    image: a4,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a6",
    name: "Blink Door Bell Warranty 3 years",
    price: 10,
    manufacturer: "Blink",
    discount: 1,
    image: a4,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a7",
    name: "Ring Door Bell Warranty 3 years",
    price: 10,
    manufacturer: "Ring",
    discount: 1,
    image: a4,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
  {
    id: "a8",
    name: "Ring Door Bell Warranty 5 years",
    price: 12,
    manufacturer: "Ring",
    discount: 1,
    image: a4,
    category: 6,
    available : 1,
    onSale : 1,
    manufacturerRebate : 1,
  },
];

const categories = [
  {
    id: 1,
    label: "Door Bells",
    title: "Smart Door Bells",
  },
  {
    id: 2,
    label: "Door Locks",
    title: "Smart Door Locks",
  },
  {
    id: 3,
    label: "Speakers",
    title: "Smart Speakers",
  },
  {
    id: 4,
    label: "Lightings",
    title: "Smart Lightings",
  },
  {
    id: 5,
    label: "Thermostats",
    title: "Smart Thermostats",
  },
  {
    id: 6,
    label: "Accessories",
    title: "Smart Accessories",
  },
];

const userTypes = {
  CUSTOMER: "customer",
  STORE_MANAGER: "storemanager",
  SALES_MANAGER: "salesmanager",
};

export { categories, userTypes, items };
