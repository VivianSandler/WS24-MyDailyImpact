import { useState } from "react";
import { User, Mail, KeyRound, Calendar, Users, Loader2 } from "lucide-react";
import styles from "./RegisterForm.module.scss";

export function RegisterForm({ onSubmit, onShowLogin, loading, error }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    gender: "",
  });
  const [validationError, setValidationError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError(null);

    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passwords don't match");
      return;
    }

    const { confirmPassword, ...registerData } = formData;
    await onSubmit(registerData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name">Full Name</label>
        <div className={styles.inputWrapper}>
          <User className={styles.icon} />
          <input
            id="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <div className={styles.inputWrapper}>
          <Mail className={styles.icon} />
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="birthday">Birthday</label>
        <div className={styles.inputWrapper}>
          <Calendar className={styles.icon} />
          <input
            id="birthday"
            type="date"
            required
            value={formData.birthday}
            onChange={(e) =>
              setFormData({ ...formData, birthday: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="gender">Gender</label>
        <div className={styles.inputWrapper}>
          <Users className={styles.icon} />
          <select
            id="gender"
            required
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className={styles.select}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <div className={styles.inputWrapper}>
          <KeyRound className={styles.icon} />
          <input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className={styles.inputWrapper}>
          <KeyRound className={styles.icon} />
          <input
            id="confirmPassword"
            type="password"
            required
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>
      </div>

      {(error || validationError) && (
        <div className={styles.error}>
          <div>{error || validationError}</div>
        </div>
      )}

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? (
          <>
            <Loader2 className={styles.spinner} />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </button>

      <div className={styles.switchMode}>
        <button
          type="button"
          onClick={onShowLogin}
          className={styles.switchButton}
        >
          Already have an account? Sign in
        </button>
      </div>
    </form>
  );
}
