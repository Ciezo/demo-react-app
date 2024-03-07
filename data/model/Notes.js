/**
 * @author Cloyd Van Secuya
 * 
 * <p>
 * This is a data template for how Notes is defined.
 * 
 * Notes are created by users, and for each note it has a 
 * significant "id" to denote the individual Notes submitted by 
 * Users. 

 * <b>Each Note has its own unique author</b>
 * </p>
 * 
 * <p>
 * This template can be used to define a Note data 
 * using the OOP approach.
 * 
 * endpoint is http://localhost:3001/notes
 * </p>
 */

function Notes(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;                   // The User.username

    function getNoteTitle() { return this.title; }
    function getNoteBody() { return this.body; }
    function getNoteAuthor() { return this.author; }
}

export default Notes;