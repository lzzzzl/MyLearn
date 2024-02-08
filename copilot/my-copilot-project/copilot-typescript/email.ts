// interface Customer with email and name fields
// document interface Customer
/**
 * Interface Customer
 * @interface
 * @property {string} email - email of the customer
 * @property {string} name - name of the customer
 **/
interface Customer {
  email: string;
  name: string;
}

// validateEmail function
// document validateEmail function
/**
 * @function validateEmail
 * @param {string} email  - email of customer
 * @returns
 * @example validateEmail('[email protected]') // returns true
 * @example validateEmail('invalid-email') // returns false
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
