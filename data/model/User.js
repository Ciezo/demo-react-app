/**
 * @author Cloyd Van Secuya
 *
 * <p>
 * This is a template to define the Users.
 * This data model is used to understand the attributes for 
 * our users.
 * 
 * The attributes included here are `UserDetails` which are 
 * used to inform and follow a procedure of how the users 
 * in our application are defined.
 * 
 * In this template, the users have their common information defined 
 * in attributes such as the following: 
 * - firstname, 
 * - lastname,
 * - username,
 * - password
 * </p>
 *
 * <p>
 * This class can be used to implement an OOP approach in any of the 
 * `src` files.
 * 
 * endpoint is http://localhost:3001/users
 * <p>
 */

function User(firstname, lastname, username, password) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.username = username;
  this.password = password;

  function getFirstname() { return this.firstname; }
  function getLastname() { return this.lastname; }
  function getUsername() { return this.username; }
  function getPassword() { return this.password; }
}

export default User;
