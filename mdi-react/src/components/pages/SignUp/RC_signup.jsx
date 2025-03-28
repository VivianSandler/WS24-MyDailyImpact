import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ApiError, api } from "../../../utils/api";
import { countriesApi } from "../../../utils/countriesApi";
import ColoredContainers from "../../core/ColoredContainers/Colored-Containers";
import Button from "../../core/Button/Button";
import styles from "../../../styles/forms.module.scss";
import form from "../../../styles/forms.module.scss";

export default function RC_signup() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: "",
      gender: "",
      country: "",
    },
  });

  const password = watch("password");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const data = await countriesApi.getCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error.message);
      setCountries([]);
    }
  };

  useEffect(() => {
    // --- If the current date is wanted to be shown as default value in the birthday field when the page loads. Comment in if required.
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = String(today.getMonth() + 1).padStart(2, "0"); // month starts with 0, therefore +1
    // const day = String(today.getDate()).padStart(2, "0");
    // Compile date in the format YYYY-MM-DD:
    //const currentDate = `${year}-${month}-${day}`;    //==> here it would always show the actual date
    //setDate(currentDate);
    const furtherBackDate = "2000-01-01"; // set hard coded date further back in time
    setDate(furtherBackDate);
    console.log(date);
  }, []);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const { confirmPassword, ...dataToSend } = data;
      dataToSend.birthday = new Date(dataToSend.birthday);

      const response = await api.register(dataToSend);
      if (response) {
        console.log("Signup successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof ApiError) {
        console.error("API Error Status:", error.status);
        console.error("API Error Message:", error.message);
      }
    }
  };

  return (
    <ColoredContainers h2Text="Create your account" h3Text="">
      <form
        className={form["formpage-grid"]}
        //className={styles["sign-up-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className={form.formSection}>
          <div className={form.inputSection}>
            <label className={form.label}>First Name:</label>
            <input
              className={`${form.input} ${
                errors.firstName ? styles.error : ""
              }`}
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.firstName && (
              <span className={form.errorText}>{errors.firstName.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Last Name:</label>
            <input
              className={`${form.input} ${errors.lastName ? styles.error : ""}`}
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.lastName && (
              <span className={form.errorText}>{errors.lastName.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Birthday:</label>
            <input
              type="date"
              value={date}
              className={`${form.input} ${errors.birthday ? styles.error : ""}`}
              {...register("birthday", {
                required: "Date of birth is required",
              })}
              onChange={handleDateChange}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.birthday && (
              <span className={form.errorText}>{errors.birthday.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Gender:</label>
            <select
              className={`${form.input} ${errors.gender ? styles.error : ""}`}
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.gender && (
              <span className={form.errorText}>{errors.gender.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Country:</label>
            <select
              className={`${form.input} ${errors.country ? styles.error : ""}`}
              {...register("country", { required: "Country is required" })}
            >
              <option value="" />
              {countries
                .sort((a, b) => a.Country.localeCompare(b.Country))
                .map((country) => (
                  <option key={country.Code} value={country.Code}>
                    {country.Country}
                  </option>
                ))}
            </select>
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.country && (
              <span className={form.errorText}>{errors.country.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Email:</label>
            <input
              className={`${form.input} ${errors.email ? styles.error : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.email && (
              <span className={form.errorText}>{errors.email.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Password:</label>
            <input
              type="password"
              className={`${form.input} ${errors.password ? styles.error : ""}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[0-9])/,
                  message:
                    "Password must contain at least one uppercase letter and one number",
                },
              })}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.password && (
              <span className={form.errorText}>{errors.password.message}</span>
            )}
          </div>
          <div className={form.inputSection}>
            <label className={form.label}>Confirm Password:</label>
            <input
              type="password"
              className={`${form.input} ${
                errors.confirmPassword ? styles.error : ""
              }`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {/* empty div to move the error text in the second grid column under the input field */}
            <div></div>
            {errors.confirmPassword && (
              <span className={form.errorText}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </section>
        <section className={form.buttonSection}>
          <Button className={styles["primary-button"]} type="submit">
            Sign Up
          </Button>
        </section>
      </form>
    </ColoredContainers>
  );
}
