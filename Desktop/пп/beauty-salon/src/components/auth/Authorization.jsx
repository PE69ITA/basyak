export default function Authorization({ onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            required 
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input 
            type="password" 
            name="password" 
            required 
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    );
  }