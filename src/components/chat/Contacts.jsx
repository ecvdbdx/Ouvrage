import React from 'react';

export default class Contacts extends React.Component {
  constructor () {
    super();

    this.renderContact = this.renderContact.bind(this);
  }

  renderContact (student, index) {
    return (
      <li
        key={index}
        onClick={() => this.props.openConversation(student)}
        className={this.props.currentContact === student ? 'active' : ''}
      >
        <div className="contact-conv">
          <img src={student.avatar} alt={`Photo de profil de ${student.username}`}/>
          <p>
            {student.firstName} {student.lastName}
            <span className="username">({student.username})</span>
          </p>
        </div>
      </li>
    );
  }

  render () {
    return (
      <div className="list-conversations">
        <h2>Les contacts</h2>
        <ul>
          { this.props.students.map(this.renderContact) }
        </ul>
      </div>
    );
  }
}
