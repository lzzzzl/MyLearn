

// validateEmail test in jsamine
describe('validateEmail', () => {
  it('should return true for valid email', () => {
    expect(validateEmail('
      [email protected]')).toBe(true);
  }
  it('should return false for invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false);
  }
});
