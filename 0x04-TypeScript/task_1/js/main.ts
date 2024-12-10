// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Readonly to prevent modification after initialization
  readonly lastName: string; // Readonly to prevent modification after initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow additional attributes with arbitrary keys
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);


