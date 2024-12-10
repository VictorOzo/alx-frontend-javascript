// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Readonly to prevent modification after initialization
  readonly lastName: string; // Readonly to prevent modification after initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow additional attributes with arbitrary keys
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Additional required attribute
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
