// Calculating mean
export function meanCalculator(array: number[]): string {
  return (array.reduce((sum, value) => sum + value) / array.length).toFixed(3);
}

// Calculating median
export function medianCalculator(array: number[]): string {
  array.sort((a, b) => a - b);
  const middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return ((array[middleIndex] + array[middleIndex - 1]) / 2).toFixed(3);
  } else {
    return array[middleIndex].toFixed(3);
  }
}

// Calculating mode
export function modeCalculator(array: number[]): number[] {
  const counts: { [key: number]: number } = {};
  let maxCount = 0;
  const modes: number[] = [];

  for (const value of array) {
    if (counts[value] === undefined) {
      counts[value] = 0;
    }
    counts[value]++;

    if (counts[value] > maxCount) {
      maxCount = counts[value];
      modes.length = 0; // Clear previous modes
      modes.push(value);
    } else if (counts[value] === maxCount && !modes.includes(value)) {
      modes.push(value);
    }
  }

  return modes;
}

// calculating “Gamma” property
interface WineData {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": number;
  Proanthocyanins: number | string;
  "Color intensity": number | string;
  Hue: number;
  "OD280/OD315 of diluted wines": number | string;
  Unknown: number | string;
  Gamma?: number;
}

export function calculateGamma(data: WineData[]): WineData[] {
  return data.map((item) => {
    const { Ash, Hue, Magnesium } = item;

    // Convert string values to numbers if necessary
    const ashValue = typeof Ash === "string" ? parseFloat(Ash) : Ash;
    const hueValue = typeof Hue === "string" ? parseFloat(Hue) : Hue;
    const magnesiumValue =
      typeof Magnesium === "string" ? parseFloat(Magnesium) : Magnesium;

    // Calculate Gamma
    const gamma = (ashValue * hueValue) / magnesiumValue;

    // Adding the calculated Gamma property to the item
    return { ...item, Gamma: gamma };
  });
}
