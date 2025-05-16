export const UserCard = ({ user }) => {
  if (!user) return <p>Please Log in to view your profile</p>;

  return (
    <main>
      <h2>User Profile</h2>
      <p>
        <strong>Username:</strong>
        {user.username}
      </p>
    </main>
  );
};
