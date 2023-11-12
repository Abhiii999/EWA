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

const categories = [
  {
    id: 1,
    label: "Door Bells",
    title: "Smart Door Bells",
    items: [
      {
        id: "db1",
        name: "Remo Doorbell",
        price: 99.99,
        manufacturer: "Remo",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: RemoBell,
      },
      {
        id: "db2",
        name: "Remo Doorbell Mini",
        price: 59.99,
        manufacturer: "Remo",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: RemoMiniBell,
      },
      {
        id: "db3",
        name: "Blink Doorbell",
        price: 449.99,
        manufacturer: "Blink",
        discount: 50,
        accessories: ["a5", "a6"],
        image: BlinkBell,
      },
      {
        id: "db4",
        name: "Blink Doorbell Mini",
        price: 300.99,
        manufacturer: "Blink",
        discount: 25,
        accessories: ["a5", "a6"],
        image: BlinkMiniBell,
      },
      {
        id: "db5",
        name: "Ring Doorbell",
        price: 349.99,
        manufacturer: "Ring",
        discount: 30,
        accessories: ["a7", "a8"],
        image: RingBell,
      },
      {
        id: "db6",
        name: "Ring Doorbell Mini",
        price: 299.99,
        manufacturer: "Ring",
        discount: 15,
        accessories: ["a7", "a8"],
        image: RingMiniBell,
      },
    ],
  },
  {
    id: 2,
    label: "Door Locks",
    title: "Smart Door Locks",
    items: [
      {
        id: "dl1",
        name: "Door Lock 1",
        price: 99.99,
        manufacturer: "Remo",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: lock1,
      },
      {
        id: "dl2",
        name: "Door Lock 2",
        price: 59.99,
        manufacturer: "Remo",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: lock2,
      },
      {
        id: "dl3",
        name: "Door Lock 3",
        price: 449.99,
        manufacturer: "Blink",
        discount: 50,
        accessories: ["a5", "a6"],
        image: lock3,
      },
      {
        id: "dl4",
        name: "Door Lock 4",
        price: 300.99,
        manufacturer: "Blink",
        discount: 25,
        accessories: ["a5", "a6"],
        image: lock4,
      },
      {
        id: "dl5",
        name: "Door Lock 5",
        price: 349.99,
        manufacturer: "Ring",
        discount: 30,
        accessories: ["a7", "a8"],
        image: lock5,
      },
    ],
  },
  {
    id: 3,
    label: "Speakers",
    title: "Smart Speakers",
    items: [
      {
        id: "s1",
        name: "Echo Speaker",
        price: 99.99,
        manufacturer: "Amazon",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: speaker1,
      },
      {
        id: "s2",
        name: "Echo nextgen",
        price: 59.99,
        manufacturer: "Amazon",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: speaker2,
      },
      {
        id: "s3",
        name: "Homepod",
        price: 449.99,
        manufacturer: "Google",
        discount: 50,
        accessories: ["a5", "a6"],
        image: speaker3,
      },
      {
        id: "s4",
        name: "Homepod Mini",
        price: 300.99,
        manufacturer: "Google",
        discount: 25,
        accessories: ["a5", "a6"],
        image: speaker4,
      },
      {
        id: "s5",
        name: "nest",
        price: 349.99,
        manufacturer: "Google",
        discount: 30,
        accessories: ["a7", "a8"],
        image: speaker5,
      },
      {
        id: "s6",
        name: "Pod",
        price: 299.99,
        manufacturer: "Apple",
        discount: 15,
        accessories: ["a7", "a8"],
        image: speaker6,
      },
    ],
  },
  {
    id: 4,
    label: "Lightings",
    title: "Smart Lightings",
    items: [
      {
        id: "l1",
        name: "Smart Light",
        price: 99.99,
        manufacturer: "Philips",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: light1,
      },
      {
        id: "l2",
        name: "Smart Light nextgen",
        price: 59.99,
        manufacturer: "Philips",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: light2,
      },
      {
        id: "l3",
        name: "Smart Light Mini",
        price: 449.99,
        manufacturer: "Philips",
        discount: 50,
        accessories: ["a5", "a6"],
        image: light3,
      },
      {
        id: "l4",
        name: "Smart Light Mini 2",
        price: 300.99,
        manufacturer: "Philips",
        discount: 25,
        accessories: ["a5", "a6"],
        image: light4,
      },
    ],
  },
  {
    id: 5,
    label: "Thermostats",
    title: "Smart Thermostats",
    items: [
      {
        id: "t1",
        name: "EchoBees Thermostat",
        price: 99.99,
        manufacturer: "EchoBees",
        discount: 15,
        accessories: ["a1", "a2", "a3", "a4"],
        image: thermo1,
      },
      {
        id: "t2",
        name: "Nest Thermostat",
        price: 59.99,
        manufacturer: "Nest",
        discount: 10,
        accessories: ["a1", "a2", "a3", "a4"],
        image: thermo2,
      },
      {
        id: "t3",
        name: "Nest Thermostat Mini",
        price: 449.99,
        manufacturer: "Nest",
        discount: 50,
        accessories: ["a5", "a6"],
        image: thermo3,
      },
      {
        id: "t4",
        name: "Honeywell Thermostat",
        price: 300.99,
        manufacturer: "Honeywell",
        discount: 25,
        accessories: ["a5", "a6"],
        image: thermo4,
      },
    ],
  },
  {
    id: 6,
    label: "Accessories",
    title: "Smart Accessories",
    items: [
      {
        id: "a1",
        name: "Door Bell Stand",
        price: 15,
        manufacturer: "Remo",
        discount: 2,
        image: a1,
      },
      {
        id: "a2",
        name: "Door Bell Powerkit",
        price: 14,
        manufacturer: "Remo",
        discount: 1,
        image: a2,
      },
      {
        id: "a3",
        name: "Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Remo",
        discount: 1,
        image: a3,
      },
      {
        id: "a4",
        name: "Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Remo",
        discount: 1,
        image: a4,
      },
      {
        id: "a5",
        name: "Blink Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Blink",
        discount: 1,
        image: a4,
      },
      {
        id: "a6",
        name: "Blink Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Blink",
        discount: 1,
        image: a3,
      },
      {
        id: "a7",
        name: "Ring Door Bell Warranty 3 years",
        price: 10,
        manufacturer: "Ring",
        discount: 1,
        image: a3,
      },
      {
        id: "a8",
        name: "Ring Door Bell Warranty 5 years",
        price: 12,
        manufacturer: "Ring",
        discount: 1,
        image: a4,
      },
    ],
  },
];

const userTypes = {
  CUSTOMER: "customer",
  STORE_MANAGER: "store-manager",
  SALES_MANAGER: "sales-manager",
};

export { categories, userTypes };
