export function formatPhoneNo(digits: string): string {
  const clean = digits.replace(/\D/g, "");
  if (clean.length === 8) {
    return `${clean.slice(0, 2)} ${clean.slice(2, 4)} ${clean.slice(4, 6)} ${clean.slice(6)}`;
  }
  return digits;
}

export function telHref(digits: string): string {
  const clean = digits.replace(/\D/g, "");
  return `tel:+47${clean}`;
}
