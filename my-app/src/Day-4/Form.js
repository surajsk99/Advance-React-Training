import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.css";
const Form = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <div>
        <label>Owner Name</label>
        <input
          {...register("ownerName", { required: "Owner Name is required" })}
        />
        <p>{errors.ownerName?.message}</p>
      </div>

      <div>
        <label>Contact Number</label>
        <Controller
          render={({ field }) => <input {...field} />}
          control={control}
          name="contactNumber"
          rules={{
            pattern: /^[0-9]{10}$/,
            required: "Contact Number is required",
          }}
        />
        <p>{errors.contactNumber?.message}</p>
      </div>

      <div>
        <label>Vehicle Model</label>
        <input
          {...register("vehicleModel", {
            required: "Vehicle Model is required",
          })}
        />
        <p>{errors.vehicleModel?.message}</p>
      </div>

      <div>
        <label>Registration Number</label>
        <input
          {...register("registrationNumber", {
            pattern: /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/,
            required: "Registration Number is required",
          })}
        />
        <p>{errors.registrationNumber?.message}</p>
      </div>

      <div>
        <label>Vehicle Color</label>
        <input
          {...register("vehicleColor", {
            required: "Vehicle Color is required",
          })}
        />
        <p>{errors.vehicleColor?.message}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
