import { Link } from 'react-router-dom';

export function ContactPreview({ contact }) {
  return (
    <section className='contact-preview flex'>
      <img src={require('../assets/img/contact.png')} alt='user' />
      <h2>{contact.name}</h2>

      <section className='actions'>
      <Link to={`/contact/${contact._id}`}> Details</Link>
      <Link to={`/contact/edit/${contact._id}`}> Edit</Link>
      </section>

    </section>
  );
}
