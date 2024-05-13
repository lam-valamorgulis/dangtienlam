export default function User({ user }) {
  const { createAt, name, avatar, address, phone } = user;
  return (
    <ul>
      <li>
        <img src={avatar} />
        <div>
          <h2>{name}</h2>
          <p> {address}</p>
          <p> {phone}</p>
          <p> {createAt}</p>
        </div>
        <br />
      </li>
    </ul>
  );
}
