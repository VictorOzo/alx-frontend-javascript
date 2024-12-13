// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, brand: "MinorCredits" };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
