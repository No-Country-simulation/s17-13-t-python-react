interface FormatProps {
  target: string;
  oldValue: string;
  newValue: string;
}

export default function transformCharacters({ 
  newValue, oldValue, target 
}: FormatProps): string {
  return target.replaceAll(newValue, oldValue);
}
